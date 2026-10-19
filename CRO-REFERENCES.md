# Requested CRO references and implementation status

## Update: owner supplied the article excerpt

The owner subsequently supplied the full 14-point conversion excerpt in an uploaded text file. It has now been read and used for theme v1.3. See [CRO-ACTION-PLAN.md](CRO-ACTION-PLAN.md) for the recommendation-by-recommendation mapping, implementation, merchant settings and testing plan. The original linked pages remain unverified; the Mastercard content has not been supplied. The earlier blocked-retrieval notes below describe the previous task.

## References supplied by the owner

- Shopify: https://www.shopify.com/enterprise/blog/how-to-increase-conversion-rate
- Mastercard Dynamic Yield: https://www.mastercard.com/us/en/business/consumer-acquisition-and-engagement/personalization/dynamic-yield/use-cases/optimization.html

Tracking parameters were removed from the saved URLs. Both pages returned proxy/network-policy HTTP 403 during this task, including a retry after saving domain additions in the cloud environment draft. **Their article contents have not been read or verified.** No recommendations, statistics, quotes or case-study results are attributed to those pages in this update.

The draft now preserves prior custom network entries and adds `www.shopify.com`, `shopify.com`, `www.mastercard.com`, and `mastercard.com`. Saving a draft does not activate running-instance access. Save/apply the relevant domain settings through the environment UI, or supply the article text, to enable an actual source-by-source review. Publishing the development environment is separate from Shopify publication.

## Independent improvements in v1.2.1

These changes follow the owner’s explicit request for a simple purchase path; they are not presented as findings from the unread articles:

- Preserve the product-first homepage, short navigation and one primary Add to bag action.
- Keep the cart’s primary action visually dominant. Order notes and paid gift wrap use optional disclosures; quantities and final line prices remain visible.
- Put real configured shipping/return policy links near the cart total. State that final shipping/tax and payment methods appear before payment at Shopify checkout. Do not promise free delivery or refunds without configured policies.
- Take an empty-cart shopper back to the actual featured product rather than an unnecessary collection step.
- Automatically reveal newsletter success/error feedback after Shopify renders a result; do not leave feedback inside a collapsed disclosure.

## Merchant configuration to verify

The theme cannot switch these on by itself:

1. Enable guest checkout in Shopify so an account is not required.
2. Activate supported wallets and test the actual device/country combinations. Do not install a separate Mastercard/Dynamic Yield SDK simply because its marketing page was linked.
3. Publish accurate shipping/returns policies and ensure the final checkout cost is clear before payment.
4. Verify order confirmations, contact delivery and marketing-consent flows.
5. Use Shopify Analytics/customer events with appropriate consent to measure product views, add-to-cart, checkout starts and purchases. Segment by mobile/desktop and traffic source. No custom tracking scripts were added.

## Measurement discipline

Use the simplified design as the baseline. Test one meaningful change at a time when traffic supports it, define success and guardrail metrics in advance, and compare completed orders/revenue per session—not only clicks. Do not promise a conversion percentage, launch fabricated urgency or add unconfigured promotions. Once the supplied sources are readable, map their actual recommendations to the current theme and retain only those justified for this one-product store.
