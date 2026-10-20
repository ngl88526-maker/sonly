// Render a restrained silent ad from the original supplied product mockup.
// Requires Node, Playwright Chromium and FFmpeg. No generative-video account needed.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const directory = dirname(fileURLToPath(import.meta.url));
const root = resolve(directory, '../..');
const logo = 'data:image/webp;base64,' + readFileSync(resolve(root, 'shopify-theme/assets/sock-only-logo.webp')).toString('base64');
const socks = 'data:image/jpeg;base64,' + readFileSync(resolve(directory, 'reference-product.jpg')).toString('base64');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.setContent('<!doctype html><html><head><style>*{margin:0}body{overflow:hidden}canvas{display:block}</style></head><body><canvas width="1080" height="1920"></canvas></body></html>');
await page.evaluate(async ({ logo, socks }) => {
  const load = source => new Promise((resolve, reject) => { const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = source; });
  window.art = { logo: await load(logo), socks: await load(socks) };
  window.renderAd = time => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const ink = '#181818';
    ctx.fillStyle = '#faf9f7'; ctx.fillRect(0, 0, 1080, 1920);
    // A fixed brand header, no rotating copy or artificial product motion.
    ctx.drawImage(window.art.logo, 80, 205, 200, 119);
    ctx.fillStyle = ink; ctx.textAlign = 'left'; ctx.font = '400 56px Arial';
    ctx.fillText('Meet Mystic Clouds.', 80, 411);
    // Keep the original mockup intact. A 1.5% push is clipped to its square panel.
    const x = 80, y = 462, width = 920;
    const scale = 1 + .015 * Math.max(0, Math.min(1, time / 10));
    const size = width * scale;
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, width, width); ctx.clip();
    ctx.drawImage(window.art.socks, x - (size-width)/2, y - (size-width)/2, size, size);
    ctx.restore();
    ctx.fillStyle = ink; ctx.font = '400 29px Arial';
    ctx.fillText('Limited-run crew socks.', 80, 1450);
    ctx.font = '400 27px Arial'; ctx.fillText('sockonly.com', 80, 1514);

  };
}, { logo, socks });
const target = resolve(directory, 'sockonly-reels-1080x1920.mp4');
const encoder = spawn('ffmpeg', ['-y','-loglevel','error','-f','image2pipe','-vcodec','mjpeg','-framerate','24','-i','pipe:0','-an','-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p','-movflags','+faststart',target], { stdio: ['pipe','inherit','inherit'] });
let encodingError;
encoder.stdin.on('error', error => { encodingError = error; });
for (let frame = 0; frame < 240; frame++) {
  await page.evaluate(time => window.renderAd(time), frame / 24);
  const buffer = await page.screenshot({ type: 'jpeg', quality: 91 });
  if (encodingError) throw encodingError;
  if (!encoder.stdin.write(buffer)) await once(encoder.stdin, 'drain');
  if (frame % 60 === 0) console.log(`Rendered ${frame}/240 frames`);
}
encoder.stdin.end();
const [code] = await once(encoder, 'close');
await browser.close();
if (code !== 0) throw new Error('FFmpeg encoding failed');
console.log('Created clean 10-second 1080×1920 ad: original product mockup, 1.5% camera push, fixed type, silent.');
