# Upload the SockOnly Shopify design

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

The logo shown inline in chat was not provided as an accessible workspace file, so its image bytes are **not bundled in the ZIP**. The theme includes the upload controls and falls back to the text wordmark until you select the actual logo. A new theme upload does not copy a logo selected in another theme.
