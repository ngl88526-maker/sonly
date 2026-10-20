# Sock Only — Facebook ad kit

## Files

- **sockonly-feed-ad.png** — AI-assisted still ad using the supplied sock/logo references. Source size 1092 × 1440. In Meta Ads Manager, inspect the actual placement preview and use fit/crop controls to keep the complete logo, product and website visible; do not assume every placement uses this native aspect ratio.
- **sockonly-reels-1080x1920.mp4** — 10-second vertical product-motion ad, 1080 × 1920, 24 fps, H.264, silent. Uses the existing supplied-artwork-derived logo/cutout, animated with typography. This is an animated product graphic, not generated footage of a model wearing the socks.
- **sockonly-reels-cover.jpg** — preview frame from the video; check placement-specific cover cropping in Meta.
- **render-video.mjs** — editable rendering source. Requires Node, Playwright, Chromium and FFmpeg. Run from the repository using `node marketing/facebook/render-video.mjs` after installing dependencies. No ad account, generative-video subscription or publication is performed by this script.

These are reviewable draft assets, not a published campaign. Image-tool adaptations can differ from the original artwork/product. Check pattern, color and logo fidelity against approved production imagery before running the ad. The website/payment/stock setup must be ready before paid traffic is sent. No price, discount, stock count, shipping guarantee, review or performance claim is included.

## Recommended ad copy

**Primary text — version A**

Boring socks? Not today.

Meet Mystic Clouds: cloud-inspired color for feet with personality. Discover the current Sock Only drop.

**Headline:** Your next favorite pair.

**Description:** Mystic Clouds · Limited-run crew socks.

**Meta CTA:** Shop Now

**Destination:** The actual published Mystic Clouds product URL. If the product uses the documented handle, use `https://sockonly.com/products/mystic-clouds` only after verifying the live page and checkout. Do not send ads to a preview, a password page, or an unconfirmed product URL.

**Primary text — version B**

Your outfit called. It wants better socks.

Meet Mystic Clouds from Sock Only. One bold pattern. A little more personality in every step.

**Headline:** Good socks. Great energy.

Keep creative, audience and offer constant when comparing the two copy variants. Do not change everything simultaneously or promise a conversion uplift.

## Video storyboard

| Time | Visual / on-screen text |
| --- | --- |
| 0–3.3 seconds | Logo, floating product, “BORING SOCKS? NOT TODAY.” |
| 3.3–7 seconds | Gentle product motion; “MYSTIC CLOUDS. BIG PERSONALITY.” |
| 7–10 seconds | “GOOD SOCKS. GREAT ENERGY.” Product title, Shop now and sockonly.com remain readable. |

The edit is intentionally silent and readable without audio. Optional narration: “Boring socks? Not today. Meet Mystic Clouds from Sock Only. Good socks. Great energy. Shop the drop at sockonly dot com.” If adding music, use a track licensed for commercial advertising. No music license or voice-over is included.

## Using an AI video service

A generative-video service is not connected to this workspace. For a separate product animation in a service such as Sora or Runway, supply the approved product reference and use this brief. Check the service’s current access, commercial-use terms and export capabilities before paying.

> Create a 5-second vertical 9:16 studio product animation from the uploaded reference pair of Mystic Clouds crew socks. Preserve the exact sock shapes, navy cuffs/heels, smoke-blue toes, knit texture and navy/smoke-blue/coral/lilac cloud pattern. The pair gently floats and rotates a few degrees against a clean pale sky-blue background. Soft studio lighting, premium playful ecommerce feel, subtle natural shadow, smooth restrained motion. Keep both socks fully visible. No humans, feet, extra products, invented patterns, lettering, logos, prices or offers. Leave clean space at top and bottom for brand graphics added separately. No warping, morphing, duplicated socks or color shifts.

Use an editor to add the approved logo, copy and CTA after generating the footage; do not rely on the video model to preserve exact typography. A generated on-foot scene can misrepresent fit or product detail; approved real on-foot footage is preferable for fit demonstrations.

## Uploading to Meta

1. Use the merchant’s Facebook Page and authorized Meta ad account. No campaign has been created or published by this task.
2. For paid purchases, use a Sales campaign and the actual purchase destination. Select the approved product/catalog and conversion setup if available.
3. Use the vertical MP4 for Reels/Stories. Use the still for Feed and inspect every placement preview for cropping, overlays and text legibility. Adjust placement crops or omit unsuitable placements.
4. Use Shop Now as the actual Meta button. The button drawn in the artwork is visual; the real click destination is configured in the ad.
5. Check the destination loads on a phone, shows the same product, accepts eligible customer orders, and reveals shipping/tax before payment.
6. Only enable supported, consent-aware Meta/Shopify measurement. Validate purchase reporting without duplicate events. No tracking pixel or Conversions API integration was installed in this task.
7. Set a budget and audience you approve in Ads Manager. Neither spending nor publishing is authorized or performed here.
8. Judge results on purchases and revenue as well as clicks. Avoid declaring a winner from a few conversions.

## Download from GitHub

Open a file in this folder and click **Download raw file**. For the MP4, use GitHub’s raw download button; a browser preview is not guaranteed. These files are ordinary repository assets, not a chat sandbox artifact link.
