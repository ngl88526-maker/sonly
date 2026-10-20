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
    const ink = '#111110', blue = '#1675ad';
    ctx.fillStyle = '#fffefa'; ctx.fillRect(0, 0, 1080, 1920);
    const gradient = ctx.createRadialGradient(540, 950, 80, 540, 950, 650);
    gradient.addColorStop(0, '#dff2ff'); gradient.addColorStop(1, '#b9dffa');
    ctx.fillStyle = gradient; ctx.beginPath(); ctx.ellipse(540, 965, 455, 470, 0, 0, Math.PI * 2); ctx.fill();
    ctx.drawImage(window.art.logo, 80, 230, 250, 149);
    ctx.fillStyle = ink; ctx.textAlign = 'right'; ctx.font = 'bold 22px Arial'; ctx.fillText('THEMED SOCKS. SMALL RUNS.', 990, 303);
    ctx.textAlign = 'center';
    const first = time < 3.3, last = time >= 7;
    const title = first ? ['BORING SOCKS?', 'NOT TODAY.'] : last ? ['GOOD SOCKS.', 'GREAT ENERGY.'] : ['MYSTIC CLOUDS.', 'BIG PERSONALITY.'];
    const ease = Math.min(1, Math.max(0, (time - (first ? 0 : last ? 7 : 3.3)) / .3));
    ctx.save(); ctx.globalAlpha = .45 + .55 * ease; ctx.translate(0, 15 * (1-ease));
    ctx.fillStyle = ink; ctx.font = '900 86px Arial'; ctx.fillText(title[0], 540, 435);
    ctx.fillStyle = blue; ctx.font = '900 88px Arial'; ctx.fillText(title[1], 540, 535); ctx.restore();
    const bob = Math.sin(time * 1.3) * 16;
    const size = 760 + Math.sin(time * .7) * 22;
    ctx.save(); ctx.translate(540, 960 + bob); ctx.rotate((-5 + 2 * Math.sin(time * .8)) * Math.PI / 180);
    ctx.shadowColor = '#203c4f22'; ctx.shadowBlur = 35; ctx.shadowOffsetY = 20;
    ctx.drawImage(window.art.socks, -size/2, -size/2, size, size); ctx.restore();
    ctx.fillStyle = ink; ctx.font = 'bold 40px Arial'; ctx.fillText('Mystic Clouds', 540, 1370);
    ctx.font = '26px Arial'; ctx.fillText('Limited-run crew socks', 540, 1415);
    ctx.fillStyle = ink; ctx.beginPath(); ctx.roundRect(210, 1460, 660, 98, 49); ctx.fill();
    ctx.fillStyle = '#fffefa'; ctx.font = 'bold 39px Arial'; ctx.fillText(last ? 'Shop now' : 'Meet your next pair', 540, 1523);
    ctx.fillStyle = ink; ctx.font = 'bold 29px Arial'; ctx.fillText('sockonly.com', 540, 1615);
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
console.log('Created 10-second 1080×1920 H.264 product-motion ad, 24 fps, silent.');
