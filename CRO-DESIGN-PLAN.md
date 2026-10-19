# SockOnly: limited-run socks, direct-sales design plan

Theme version 1.1. The goal is a completed order, with the current drop as the primary path. Recommendations below distinguish what the theme implements from merchant configuration and future experiments. Conversion improvements are hypotheses until measured; no uplift is promised.

## 1. Homepage, hero to footer

| Order | Section and content | Conversion purpose | Theme status |
| --- | --- | --- | --- |
| 1 | Slim announcement, lowercase wordmark, The Socks / Story / Size & Care / Gifting, bag count | Orient shoppers without a crowded menu. Use announcements only for real shipping offers or drop dates. | Implemented; editable menu/announcement |
| 2 | Hero: “Small runs. Big themes. Only socks.” Original product image, real product price, one primary “Shop the current drop” CTA | Immediately explain the offer and show the actual product. Keep account signup out of the purchase path. | Implemented |
| 3 | Compact product-proof strip: cotton comfort, jacquard knit, seamless toe, fit-guide link | Answer “why these?” using product attributes rather than unsubstantiated endorsements. | Implemented; confirm construction claims against production |
| 4 | Current drop card: product image, title, price, stock availability, direct product CTA, fit/shipping/return links | Bring buying information ahead of the long brand story. Only show remaining stock when tracked and overselling is disabled. | Implemented; real low-stock count defaults to threshold 10, editable |
| 5 | Craft: knit detail, comfort, reinforced areas, concise brand story | Justify the purchase with close-up evidence. Replace mockup crops with real product/detail photos when ready. | Implemented |
| 6 | Genuine customer proof: verified reviews, fit feedback and customer photos | Reduce first-brand purchase anxiety. Hide the section until actual review app content exists. | App-block section implemented; merchant must configure a reviews app |
| 7 | Gifting: personal note, hidden packing-slip prices, optional paid wrapping | Offer an additional reason to purchase and a route to multiple pairs. | Implemented; wrapping and fulfillment setup required |
| 8 | FAQ: fit, shipping costs, gifts and sold-out drops | Resolve practical objections before another exit. Answers are editable. | Implemented as native keyboard-accessible disclosures |
| 9 | Email signup for upcoming drops | Capture visitors whose preferred drop is sold out without interrupting active buyers. No entry popup. | Native Shopify signup; welcome/confirmation automation requires setup |
| 10 | Footer: help, accounts, final policies, merchant identity and contact access | Make the business accountable and easy to reach. | Policy links display when configured; merchant must supply final policies |

Homepage sections can now be reordered in the theme editor. Do not add a countdown or “never returning” language unless the production schedule supports that specific statement. Use sold-out products to invite interest in the next drop; an email-list invitation is not an automated back-in-stock alert.

## 2. Product page layout to reduce abandonment

On desktop: a generous gallery left and an approximately 40–45% purchase column right. On mobile: one strong image, name, price and purchase information first, with the remaining gallery and detailed information below as space allows.

Purchase column sequence:

1. Product title and current-drop context; price clearly marked **per pair**. Show a compare-at price only if it is an actual substantiated prior price.
2. Honest availability. Exact low-stock counts only come from tracked Shopify inventory with overselling disabled, never a random number.
3. Concise benefit description, colorway and confirmed fit. Put Size & Care access beside the size note. Do not convert flat sock length into an unsupported shoe-size range.
4. Native 1-, 2-, or 3-pair radio choices with visible selection and keyboard focus. Orders contain the actual quantity of the variant. Configure quantity discounts in Shopify before advertising savings; this update invents none.
5. Gift message and hidden-price request. Keep both optional. Wrapping is a separate real product offered in the cart when available.
6. One high-contrast Add to bag button. A mobile bottom bar submits the **same form**, preserving selected quantity, variant and gift note. Sold-out buttons are disabled.
7. Shipping/tax disclosure and direct fit/shipping/returns links. Actual shipping cost and taxes remain at checkout. Enable guest checkout and supported express payment methods in Shopify; these are store settings, not theme badges.
8. Construction, care, delivery and return disclosures; verified review app blocks beneath the product information. Product structured data comes from Shopify.

Use product photography showing front/back, on-foot scale, cuff stretch, knit detail and heel/toe. Add a short user-controlled fit video. Do not autoplay video or imply mockup crops are independent photographs. The current theme renders uploaded product images and native video; it does not create missing photography.

Before payment, Shopify checkout must show the final total, eligible discounts, tax, shipping and available payment methods. Do not require customer account creation. Test checkout error recovery and wallets on real devices. A trustworthy returns policy needs eligibility, timing, costs and process—not just a reassurance badge.

## 3. Brand palette and typography

| Role | Recommendation | Usage |
| --- | --- | --- |
| Base | Warm off-white **#FAF8F5** | Main background; keeps the patterned product dominant |
| Text / structure | Deep navy **#273E5D** | Headings, body copy, dark purchase buttons |
| Primary accent | Coral **#FF9281** | Homepage CTA with navy text; avoid white button text |
| Supporting accent | Smoke blue **#4F8198** | Decorative details and secondary emphasis; do not assume all small-text pairings pass contrast |
| Drop / gifting accent | Lilac **#CAB2CC** | Section backgrounds, paired with navy text |
| Supporting text | Slate **#526174** | Secondary copy on off-white |

Headings: **DM Sans, weight 600**. Body/UI: **Inter, weight 400**, with bold emphasis where needed. Occasional italic Georgia gives short editorial phrases a warmer voice. Shopify font pickers now control the heading/body families; Shopify hosts the selected fonts with `font-display: swap` and fallbacks. Body copy starts at 16px with roughly 1.5 line height; keep critical fit, pricing and policy information readable, rather than treating it as tiny legal copy.

Coral/navy and navy/off-white are the key CTA pairs. Check actual rendered text, disabled controls, review-app widgets and focus states to WCAG 2.2 AA. Palette selection alone does not certify accessibility.

## 4. Mobile-first UX for socks

- Make the pattern readable in the first image; use on-foot photos to establish crew height and styling. Use responsive images and reserve their dimensions to limit layout shift.
- Keep the main purchase button and 1/2/3-pair choices easy to reach with a thumb. The bottom purchase bar is fixed, respects device safe-area padding, and reserves document space so the footer is not covered.
- Keep size confidence beside purchase controls. Offer flat measurements and a tested shoe-size range once available. Avoid extra size selectors for a product with one actual variant.
- Target at least 44px controls, clear keyboard focus, native form inputs and visible selected states. Let customers complete a purchase without JavaScript where Shopify native forms support it.
- Use native collapsible FAQs and details for secondary information. Avoid nested sliders, intrusive popups, autoplay and sticky elements competing for screen space.
- Keep the gift note optional and short. Preserve selections through native cart submission. Show request errors and allow customers to correct them.
- Test 320px through larger mobile widths, keyboard behavior, slow connections, Safari/Android, wallet availability and back-button recovery. The theme is not yet validated on a merchant’s live Shopify store.

## 5. Micro-interaction and trust checklist

Implemented:

- [x] Visible selected quantity and keyboard focus.
- [x] “Adding…” feedback and disabled duplicate-submit controls while navigating to Shopify’s native cart handling.
- [x] Back-navigation restores purchase-button availability.
- [x] Mobile action submits the original product form.
- [x] Sold-out purchase states and genuine low-stock rules.
- [x] Native FAQ disclosure states and expanded mobile-menu state.
- [x] Real cart item count and Shopify security wording.
- [x] Shipping/return policy links appear when configured.
- [x] Review-app sections render only when app blocks exist.
- [x] Reduced-motion support inherited from the base theme.

Merchant setup / validation:

- [ ] Display payment logos only for methods actually enabled; Shopify checkout is authoritative.
- [ ] Publish final return terms and a monitored support contact.
- [ ] Verify gift instructions reach fulfillment and packing slips.
- [ ] Install genuine verified-purchase/fit review collection and display.
- [ ] Configure confirmation/welcome/unsubscribe emails and review consent behavior.
- [ ] Set up consent-aware Shopify customer events/pixels; do not add decorative “GDPR compliant” or security-certification badges.
- [ ] Validate native add-to-cart failures, wallet checkout, taxes, shipping, stock decrement and refund flows.

## Measurement and experiments after launch

Track product views → add to cart → checkout started → orders through Shopify analytics/customer events with appropriate consent. Segment by mobile/desktop, source and drop. Compare revenue per session and checkout completion alongside conversion rate; do not optimize email signup at the expense of sales.

Test one material change at a time: hero product crop versus on-foot image; purchase-column fit wording; configured bundle offer; review placement. Set sample-size/duration criteria in advance, include full weekly cycles where practical, and do not declare a winner from a handful of orders. Use real inventory and pricing throughout.

## Applying this update

Upload `dist/sockonly-shopify-theme.zip` as a **new unpublished theme**. Copy your live theme’s selected products, menu, editable copy, app blocks and policy settings into the new theme before testing; a ZIP upload does not transfer all previous theme customizations. Use the new DM Sans/Inter defaults or choose fonts in Theme settings → Typography. Homepage review blocks remain hidden until configured. Test the full purchase path before publishing; uploading does not publish automatically.
