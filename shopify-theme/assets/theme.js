function initializeTheme(root = document) {
  root.querySelectorAll('[data-menu-toggle]').forEach(button => {
    if (button.dataset.bound) return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !expanded;
    });
  });
  root.querySelectorAll('.purchase-form').forEach(form => {
    if (form.dataset.bound) return;
    form.dataset.bound = 'true';
    const buttons = () => [...document.querySelectorAll('[data-add-button]')].filter(button => button.form === form);
    const variantControl = form.querySelector('[data-variant]');
    function updateVariant() {
      const variant = variantControl?.selectedOptions?.[0] || variantControl;
      const available = variant?.dataset.available === 'true';
      const status = form.querySelector('.purchase-status');
      if (status) status.textContent = '';
      buttons().forEach(button => {
        button.disabled = !available;
        button.querySelector('[data-button-label]').textContent = available ? 'Add to bag' : 'Sold out';
      });
      if (variant?.dataset.price) document.querySelectorAll('[data-price-display],[data-sticky-price]').forEach(price => price.textContent = variant.dataset.price);
      // Counts rendered for the initial variant must never describe a different variant.
      if (variantControl?.tagName === 'SELECT') document.querySelector('[data-stock-note]')?.setAttribute('hidden', '');
    }
    variantControl?.addEventListener('change', updateVariant);
    form.addEventListener('submit', () => {
      if (!form.checkValidity()) return;
      const status = form.querySelector('.purchase-status');
      if (status) status.textContent = 'Adding your socks to the bag…';
      // Preserve native form submission and Shopify error handling.
      setTimeout(() => buttons().forEach(button => { button.disabled = true; button.querySelector('[data-button-label]').textContent = 'Adding…'; }), 0);
    });
    window.addEventListener('pageshow', updateVariant);
  });
}
initializeTheme();
document.addEventListener('shopify:section:load', event => initializeTheme(event.target));
