# SockOnly CRO actions from the supplied excerpt

The owner supplied an excerpt containing 14 conversion recommendations. This plan uses that text directly, rather than pretending the blocked web page was retrieved. The Mastercard/Dynamic Yield linked page has not been read; no claim here is attributed to its contents. Theme v1.3 preserves the owner’s overriding preference for simplicity.

## Goal and baseline

Primary conversion: a completed paid order. Use Shopify’s Online Store conversion metric consistently for comparisons and record its denominator; do not mix sessions, unique visitors and orders interchangeably. Track revenue per session, average order value, refunds, and checkout completion as guardrails. Email subscriptions are secondary and must not interfere with buying.

Before changing the live theme, record the last 30 days of sessions, conversion, revenue, device mix, channel mix and product/checkout funnel performance. If the store has not launched, collect a baseline first; there is no historic uplift to claim. Compare like-for-like source/device cohorts and record stock availability and promotions, which can confound results.

## Apply the 14 recommendations to this store

| Supplied recommendation | SockOnly action | Implementation / ownership |
| --- | --- | --- |
| 1. Talk to customers | Ask buyers why they chose the pattern, which details mattered, and what almost stopped them. Use the most frequent unresolved question to improve inline fit/shipping copy. | Merchant research; use the interview questions below. No unsolicited messages sent. |
| 2. Define goals | Optimize completed orders first; use email signup as a secondary signal. | Measurement plan above; no invented target conversion rate. |
| 3. Analyze data | Compare product-to-cart and checkout-to-purchase performance by device and acquisition channel. | Shopify Analytics/customer events setup; not enabled by theme code. |
| 4. Review friction | Keep product, price, size guidance and Add to bag together. Keep optional notes collapsed. Fix payment/shipping surprises before adding features. | Implemented in the simplified v1.2+ theme; verify against live store data. |
| 5. Test the value proposition | Edit one short product promise and test it against the baseline. | New Product section **Short product promise** setting in v1.3. |
| 6. Audit technical setup | Check actual Shopify preview/live URLs, all navigation/policies, mobile layout and media performance. | Local Theme Check is available; live Shopify/Lighthouse/device tests require the store. |
| 7. Add social proof | Show product-relevant ratings only from the review app; retain detailed review app blocks below product details. | New compact rating summary reads standard Shopify reviews.rating and reviews.rating_count metafields. Hidden with no data. Configure a real review app; no verified-purchase claim is invented. |
| 8. Make products easy to find | Land directly on the single product and purchase controls. | Already implemented. Search is deferred until the catalog needs it. |
| 9. Add live chat | Start with accessible Help and clear product answers. Add Shopify Inbox only if repeated unanswered questions and staffing justify it. | Optional merchant decision; no floating chat widget added. |
| 10. Test the buying journey | Test product copy or primary image separately; keep the existing design as control. | Merchant testing plan below; no random theme-based assignment or experiment SDK added. |
| 11. Abandoned cart emails | Configure eligible Shopify abandoned-checkout recovery and test suppression after a purchase. | Merchant automation; theme cannot send checkout recovery mail. |
| 12. Shorten checkout | Permit guests, avoid unnecessary fields, and enable available accelerated payments. | Shopify checkout/account/payment settings, depending on merchant plan and region. |
| 13. Offer an incentive | Test margin-safe shipping or first-order offers only after configuring them in Shopify. Never promise an unconfigured promotion. | Optional offer setup. New confirmed shipping summary can explain a genuine offer near the purchase button. |
| 14. Reassuring returns | Publish actual eligibility, window, condition and return costs. Put one concise, accurate summary near Add to bag. | New optional **Confirmed returns summary** links the actual refund policy. It is blank by default. |

## New theme-editor controls

Open the homepage or product template → Product section:

- **Short product promise:** one or two sentences about the product’s actual value. Default retains the existing cotton/seamless-toe proposition. If testing, change only this field, not the full layout at the same time.
- **Show real review rating:** on by default but renders nothing until both a standard review rating and positive review count exist. The merchant’s app owns these data and must aggregate real customer reviews. Detailed reviews remain in Shopify app blocks below the product information. Do not enter a made-up rating to make the section visible.
- **Confirmed shipping summary:** optional, blank by default. Use an actual configured shipping rule. Examples must be replaced by your own real terms; the theme does not infer your shipping eligibility.
- **Confirmed returns summary:** optional, blank by default. Keep it consistent with Shopify’s published refund policy. State unworn/other conditions clearly if applicable; do not advertise a money-back guarantee the business does not offer.

These additions add no popups, search, chat, countdown timers, recommendation carousels or external tracking scripts.

## Shopify settings and recovery checklist

Admin labels vary by plan and release; find the corresponding settings rather than installing unnecessary apps.

1. **Customer accounts / checkout:** permit guest purchases; do not require login. Keep necessary fulfillment/contact fields only. Confirm mobile address autofill and validation. Checkout customization limits depend on the plan.
2. **Payments:** enable eligible Shop Pay, Apple Pay, Google Pay and PayPal/cards as appropriate. Test each available method and the actual country/device combinations. Theme text does not activate wallets.
3. **Policies and shipping:** publish shipping/refund policies; configure US/Canada rates and taxes; enter only confirmed policy summaries in the theme editor. Verify totals are disclosed before payment.
4. **Marketing → Automations** or the current abandoned-checkout settings: configure recovery for eligible recipients. Review consent/legal requirements and Shopify’s eligibility rules. Exclude converted orders, test the recovery link, and confirm messages stop after purchase. Do not assume anonymous carts without a known eligible contact can be emailed. Avoid automatic discounts until margin/eligibility rules are decided.
5. **Analytics / customer events:** use Shopify’s existing reports and properly configured pixels with consent. Validate product views, add-to-cart, checkout starts and purchase events without double counting. Do not paste tracking into Liquid as a shortcut.
6. **Customer privacy:** configure Shopify consent behavior for applicable regions. Test rejection/acceptance and any app pixels or review widgets. Adding a provider does not automatically establish compliance.

## Customer interview: three questions

Ask a small, varied group of real customers, using an appropriate consented channel:

1. Why did you choose this pair rather than another option?
2. Which feature mattered most: pattern, fit, comfort, gifting, price, or something else?
3. What almost stopped you from purchasing, or what was unclear?

Keep an internal count of recurring themes. Do not publish private customer messages or turn them into testimonials without permission. No interviews or messages have been sent by this task.

## First experiment

Hypothesis: product-specific comfort plus pattern copy reduces hesitation more than a general brand slogan.

- Control: “Cloud-inspired crew socks. Soft combed cotton. A seamless toe.”
- Candidate: a truthful customer-informed alternative, chosen only after interviews; keep length comparable.
- Primary metric: completed-purchase conversion with a consistent denominator.
- Guardrails: revenue per session, average order value, refunds, mobile performance and checkout errors.
- Hold constant: price, stock, photography, promotion, shipping rules and traffic mix where practical.
- Define sample size, minimum detectable effect, duration and stopping criteria before starting. Low traffic may not support a credible split test; collect qualitative evidence and avoid false certainty.

Use a currently supported Shopify-compatible experimentation tool if an actual split test is justified. **Google Optimize in the supplied excerpt is obsolete; it was discontinued.** No experiment is running merely because theme settings are editable, and no lift is claimed.

## Validation and publication

The source code and ZIP can be checked locally, but real reviews, checkout/guest behavior, recovery emails and analytics need a configured merchant store. Upload as an unpublished theme, select the product/logo/menu, configure the new optional fields, test, and publish only after signoff. The theme update does not change live Shopify settings automatically.
