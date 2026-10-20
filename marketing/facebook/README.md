# Sock Only — clean Facebook ad kit

The revised direction is deliberately restrained: neutral background, small logo, one headline, product first. No colored halo, animated sock rotation, giant slogans, fake CTA button, badges or decorative swatches.

## Download

- **sockonly-feed-ad.png** — clean static ad, 1122 × 1402: “Meet Mystic Clouds.”, supplied-artwork-derived full logo, product, short footer and sockonly.com. The still is AI-assisted artwork based on the supplied mockup; inspect pattern/color/logo fidelity against approved production references before using it.
- **sockonly-reels-1080x1920.mp4** — 10 seconds, 1080 × 1920, 24 fps, H.264, silent. Uses the **original supplied product mockup JPEG** without regenerating the socks. A slow 1.5% camera push is the only motion. The product stays in its square image panel; the headline, logo and footer remain stationary.
- **sockonly-reels-cover.jpg** — preview frame from the revised video.
- **reference-product.jpg** — the original product mockup extracted from the supplied design document, used by the video renderer. It is a mockup, not newly shot product photography.
- **render-video.mjs** — video source; requires Node, Playwright, Chromium and FFmpeg. Run `node marketing/facebook/render-video.mjs` with the dependencies installed. It does not connect to or publish an ad account.

Open a file on GitHub and click **Download raw file**. Chat artifact links are not required.

## Suggested Facebook copy

**Primary text**

Meet Mystic Clouds. Limited-run crew socks from Sock Only.

**Headline:** Mystic Clouds

**CTA:** Shop Now — use Meta’s actual button, rather than drawing a button into the image.

**Destination:** The actual published Mystic Clouds product page. Verify `https://sockonly.com/products/mystic-clouds` loads, is not password-protected, and supports real checkout before using that URL.

## Placement and review

Use the MP4 for Reels/Stories and inspect the still in the Feed placement preview. Check all placement crops, overlay zones and logo/product legibility in Meta Ads Manager before publishing. The still is 1122 × 1402, approximately 4:5; the vertical video is 1080 × 1920.

No price, discount, stock count, shipping promise, fake review or conversion claim is included. No campaign has been published, no budget set, and no money spent. Ad/website consistency, stock and checkout readiness remain merchant checks.

The video intentionally has no audio. If adding music or narration, use appropriately licensed material. For a more natural photographic campaign later, replace the supplied mockup with approved real flat-lay or on-foot photography/video. No generated people or fabricated customer testimonials are used here.

## Measuring the change

Compare the clean creative with the previous version while keeping audience, destination, offer and budget allocation consistent. Assess purchases and revenue alongside click metrics. An aesthetic revision is not evidence of increased conversion.
