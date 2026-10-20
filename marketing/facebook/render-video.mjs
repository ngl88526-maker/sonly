// Render a silent product-motion ad using the supplied logo and sock artwork.
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
const socks = 'data:image/webp;base64,' + readFileSync(resolve(root, 'shopify-theme/assets/mystic-cutout-1200.webp')).toString('base64');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.setContent('<!doctype html><html><head><style>*{margin:0}body{overflow:hidden}canvas{display:block}</style></head><body><canvas width="1080" height="1920"></canvas></body></html>');
await page.evaluate(async ({ logo, socks }) => {
  const load = source => new Promise((resolve, reject) => { const image = new Image(); image.onload = () => resolve(image); image.onerror = reject; image.src = source; });
  window.art = { logo: await load(logo), socks: await load(socks) };
  window.renderAd = time => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const ink = '#111110', blue = '#249beb';
    ctx.fillStyle = '#fffefa'; ctx.fillRect(0, 0, 1080, 1920);
    ctx.fillStyle = '#c5e7ff'; ctx.beginPath(); ctx.ellipse(540, 950, 440, 445, 0, 0, Math.PI * 2); ctx.fill();
    ctx.drawImage(window.art.logo, 90, 220, 225, 134);
    ctx.textAlign = 'left'; ctx.fillStyle = ink; ctx.font = '600 82px Arial';
    ctx.fillText('Boring socks?', 90, 445);
    ctx.fillStyle = blue; ctx.font = '600 86px Arial'; ctx.fillText('Not today.', 90, 542);
    // Preserve the original creative's energy, with small controlled product motion.
    const size = 720 + 12 * Math.sin(time * .65);
    ctx.save(); ctx.translate(540, 958 + 7 * Math.sin(time * .9));
    ctx.rotate((-3 + .6 * Math.sin(time * .7)) * Math.PI / 180);
    ctx.shadowColor = '#24445b19'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 15;
    ctx.drawImage(window.art.socks, -size/2, -size/2, size, size); ctx.restore();
    // Just two accents; no badges or decorative swatch row.
    ctx.strokeStyle = '#64bdf9'; ctx.lineWidth = 10; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(112, 770); ctx.lineTo(145, 789); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(955, 1160); ctx.lineTo(981, 1131); ctx.stroke();
    ctx.textAlign = 'center'; ctx.fillStyle = ink; ctx.font = '600 40px Arial'; ctx.fillText('Mystic Clouds', 540, 1370);
    ctx.font = '400 27px Arial'; ctx.fillText('Limited-run crew socks', 540, 1414);
    ctx.fillStyle = ink; ctx.beginPath(); ctx.roundRect(265, 1452, 550, 86, 43); ctx.fill();
    ctx.fillStyle = '#fffefa'; ctx.font = '600 34px Arial'; ctx.fillText('Shop the drop', 540, 1508);
    ctx.fillStyle = ink; ctx.font = '400 27px Arial'; ctx.fillText('sockonly.com', 540, 1590);

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
console.log('Created refined bold 10-second ad: original blue direction, cleaned typography, restrained motion.');
