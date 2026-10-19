# Upload the SockOnly Shopify design

**Current release: Sock Only Studio v2.0.0.** The design now uses the supplied logo’s sky-blue/black direction, with a bundled transparent logo adaptation, background-cleaned product mockup, stronger typography and one focused purchase area. [View the desktop/mobile design previews](design-preview/README.md).

Upload `dist/sockonly-shopify-theme.zip` as a **new unpublished theme**. Select Mystic Clouds in Theme settings → Storefront. The logo appears by default; Theme settings → Brand logo lets you replace it with original artwork. The Product section’s **Product presentation image** overrides the bundled cutout. Reapply your menu, copy and review-app blocks, then test cart/checkout before publishing.

The Shopify-native Online Store 2.0 theme is in `shopify-theme/`. The uploadable archive is `dist/sockonly-shopify-theme.zip`. This preserves the cream/navy/coral/lilac design and supplied product mockup while replacing the custom Node backend with Shopify-native forms, cart, accounts, customer signup and hosted checkout.

**For this Shopify-hosted route you do not need the Headless channel, a Storefront API token, Node hosting, SQLite or Resend.** The earlier SHOPIFY-SETUP.md describes the separate custom-app route. Choose the theme route below to host the site entirely on Shopify.

## Upload and preview

1. Sign in to Shopify Admin. Under **Online Store → Themes**, choose **Import theme / Add theme → Upload ZIP file** (labels may vary).
2. Upload `dist/sockonly-shopify-theme.zip`. Leave it unpublished while configuring. Uploading the theme does not create products, pages, policies, payment settings or discounts.
3. Choose **Customize / Edit theme** on the uploaded theme. In **Theme settings → Storefront**, choose your Mystic Clouds product. Set the optional gift-wrap product if offered.
4. The homepage uses the selected product’s featured image or the bundled original mockup. You can also set a different hero image in the homepage section. Homepage introduction, navigation, product details, story, fit/care copy and newsletter copy can be edited in the theme editor. Upload approved on-foot/detail photos and video to the product media gallery.

## Create products and pages

Create Mystic Clouds with handle `mystic-clouds`, SKU `SO-MYS-001`, confirmed price, tracked stock and one size variant. Publish it to **Online Store**, not just Headless. The theme shows live Shopify pricing and availability; no $18 preview price is hardcoded. Product description is editable in Shopify. Paid gift wrap is offered in the cart when the configured optional wrap product has one available variant and is not already in the cart.

Under **Online Store → Pages**, create these pages and select their theme templates:

| Page | URL handle | Theme template |
| --- | --- | --- |
| Our story | `our-story` | `story` |
| Size & care | `size-care` | `size-care` |
| Help | `help` | `contact` |

The story and size/care templates contain designed content, so the page body may be left blank. Customize their sections in the theme editor. Add shipping/return/help copy to the Help page body. If these template choices do not appear while the theme is unpublished, preview/customize the corresponding page using this theme, or assign the template after publishing during your planned release window. Do not delete an existing live theme to expose template choices.

Create a navigation menu linking the product and those pages in Shopify’s Menus settings (often **Content → Menus**, or **Online Store → Navigation**). Select it in the theme’s Header section. The default navigation already targets the handles above.

## Shopify services

- **Cart/payment:** native Shopify product/cart forms and hosted checkout; no card data enters theme code. Configure merchant identity, Payments, supported wallets, shipping zones/rates and taxes in Shopify. Accounts use Shopify’s new hosted customer accounts; enable them in Settings. Legacy customer-account templates are not included.
- **Email signup:** Shopify’s native customer/newsletter form, stored in Shopify customer records. Configure Shopify Email or your email platform for confirmed opt-in, welcome offer and unsubscribe behavior. The theme does not automatically send a welcome discount or install a marketing app.
- **Contact/returns:** native Shopify contact form emailed to the merchant. It captures request type and order number. It is a request form, not a returns database, automatic authorization, label generator or refund engine. Configure the merchant inbox and test receipt. Use Shopify’s return tools or a returns app for an actual self-service return portal.
- **Gifts:** gift message and hidden-price request are **line-item properties** on the sock item. Update packing-slip templates/workflows and verify staff honor these properties. The optional gift-wrap product is a separate paid cart item.
- **Discounts:** Shopify calculates actual discounts. The theme does not promise unconfigured 10%/15% bundle savings or a free-shipping threshold. Set up and test those promotions before adding marketing copy for them.
- **Reviews:** product sections support Shopify app blocks. Install your verified-purchase review app and add its block in the product template. No fake ratings are included.
- **Privacy/analytics:** configure Shopify Customer Privacy consent banners and Shopify customer events/app pixels, rather than pasting trackers into Liquid. No custom analytics tracker is included. Add final policies in Settings → Policies; footer links appear when policies exist.

## Launch checks

Keep storefront password protection enabled until ready. The theme includes a matching password page. Use Shopify test payments to verify stock, 1/2/3-pair quantity, gifts, wrapping, discount totals, both shipping countries, taxes, customer accounts, confirmation and fulfillment emails, refunds and contact/signup delivery.

Confirm supplier fit range, material blend and care instructions; replace provisional theme-editor wording before publication. Confirm the actual return/refund policy and merchant legal details. Review accessibility on real devices, mobile performance, media alt text, payment availability and consent behavior. Theme Check is static validation, not a live checkout test or accessibility certification.

Connect `sockonly.com` using **Settings → Domains**, follow Shopify’s DNS instructions, wait for SSL provisioning, preview again and publish the theme when the merchant configuration and testing are complete. Shopify hosts the storefront and checkout; no separate app server is required.

## Development

Edit the Liquid, JSON, CSS and JavaScript in `shopify-theme/`. Repackage using:

```sh
python scripts/package-theme.py
```

Run Shopify’s official static checker:

```sh
npm exec --cache /tmp/sockonly-npm-cache --yes --package @shopify/cli -- shopify theme check --path shopify-theme
```

A connected Shopify store is required to verify actual Liquid rendering, app blocks, customer forms and checkout. No Shopify store was connected or changed during local theme creation.

## Version 1.1: limited-run sales layout

See [CRO-DESIGN-PLAN.md](CRO-DESIGN-PLAN.md) for the section plan, PDP rationale, palette/fonts, mobile patterns and trust checklist. The homepage now has reorderable current-drop, craft, review-app, gifting and FAQ sections. Genuine tracked low-stock counts are controlled in Theme settings → Storefront; heading/body fonts in Typography. Product quantity uses accessible 1/2/3-pair choices and a mobile purchase bar connected to the same form.

Upload this ZIP as a new unpublished theme. Reapply the selected product/menu, approved content and app blocks from your existing theme, then test before publishing. The upload does not migrate prior theme-editor customizations or activate reviews, payment methods, discounts or marketing automations.

## Your Sock Only logo (v1.1.1)

In **Online Store → Themes → Edit theme / Customize → Theme settings → Brand logo**, choose **Logo → Select image → Upload** and select your original logo file. This single setting updates the header, footer and password page. Set desktop/mobile widths there. The image keeps its original proportions; a light footer panel keeps the logo’s black lettering visible. Use the original PNG/WebP if possible; a transparent original avoids a white rectangular background.

This described v1.1.1. In v2.0.0 a transparent adaptation prepared from the supplied logo is **bundled and shown by default**. Uploading original production artwork still takes precedence, and a new theme upload does not copy a logo selected in another theme.

## Version 1.2: simplified purchase-first design

The default homepage now goes directly to the selected product: photo, price, short benefit statement, fit guidance, quantity and one Add to bag button. Extra gallery images follow the purchase section. Gift fields and product details are collapsed. Navigation defaults to Shop and Help. The announcement bar and low-stock counts default to off; no fixed duplicate purchase bar or large newsletter appears. A compact footer holds support/policy links and optional email signup. Older decorative sections remain available in the editor but are not in the default homepage.

Upload as a new unpublished theme to use the new default homepage. An existing custom navigation menu can still show extra links: select a two-link Shop/Help menu or clear the Header menu setting. Select your featured product and logo, confirm fit/care copy, and test the real cart/checkout before publishing.

## Version 1.2.1: cart clarity and form feedback

The cart now keeps the primary Checkout action prominent, collapses optional order notes/gift wrap, and links configured shipping/returns policies near the total. Empty-cart shoppers return to the featured product. Newsletter success/errors automatically reveal the signup disclosure. See CRO-REFERENCES.md for the requested reference URLs and their currently blocked retrieval status; this update does not claim to implement unread source-specific recommendations.

## Version 1.3: apply the supplied conversion recommendations

See CRO-ACTION-PLAN.md for the 14-point mapping. Product sections now expose a **Short product promise**, optional **Confirmed shipping summary** and **Confirmed returns summary**, plus a real rating summary from Shopify's standard review metafields. Blank policy summaries and absent ratings stay hidden. No new homepage sections or popups were added. Configure actual guest checkout, wallets, recovery automations and analytics in Shopify; the theme does not activate them. Upload as an unpublished theme and reapply the chosen product/logo/menu before testing.


## Version 2.0: Sock Only Studio

The current visual system is sky blue `#64BDF9`, pale blue `#DFF1FD`, ink `#111110` and warm white `#FFFEFA`, with a small yellow product sticker. The homepage pairs a bold brand headline with product price, fit access, quantity and one Add to bag button; product details and gifting remain collapsed. The product page prioritizes the standard image-and-purchase layout. Navigation, product benefits, checkout disclosures and the footer use one consistent visual language.

The logo and mockup backgrounds were cleaned using the image tool from the supplied references, then exported as responsive WebP assets. They are source-derived presentation adaptations, not pixel-identical original files. Preserve the original artwork and verify these assets against production before public launch; upload approved originals through the theme editor when available.

Local validation covered actual theme markup rendered with Shopify fixture data at 320, 390, 768, 1024 and 1440px, loaded imagery, one purchase CTA, mobile navigation, quantity/gift-property submission, back-navigation recovery and sold-out disabling. Shopify Theme Check reported 38 files with no offenses. This does not validate live provider behavior or certify conversion lift.
