customElements.get('product-info') ||
  customElements.define(
    'product-info',
    class extends HTMLElement {
      constructor() {
        super(),
          (this.input = this.querySelector('.quantity__input')),
          (this.currentVariant = this.querySelector('.product-variant-id')),
          (this.variantSelects = this.querySelector('variant-radios')),
          (this.submitButton = this.querySelector('[type="submit"]'));
      }
      cartUpdateUnsubscriber = void 0;
      variantChangeUnsubscriber = void 0;
      connectedCallback() {
        this.input &&
          ((this.quantityForm = this.querySelector('.product-form__quantity')),
          this.quantityForm &&
            (this.setQuantityBoundries(),
            this.dataset.originalSection ||
              (this.cartUpdateUnsubscriber = subscribe(
                PUB_SUB_EVENTS.cartUpdate,
                this.fetchQuantityRules.bind(this)
              )),
            (this.variantChangeUnsubscriber = subscribe(
              PUB_SUB_EVENTS.variantChange,
              (event) => {
                const sectionId = this.dataset.originalSection
                  ? this.dataset.originalSection
                  : this.dataset.section;
                event.data.sectionId === sectionId &&
                  (this.updateQuantityRules(
                    event.data.sectionId,
                    event.data.html
                  ),
                  this.setQuantityBoundries());
              }
            ))));
      }
      disconnectedCallback() {
        this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber(),
          this.variantChangeUnsubscriber && this.variantChangeUnsubscriber();
      }
      setQuantityBoundries() {
        const data = {
          cartQuantity: this.input.dataset.cartQuantity
            ? parseInt(this.input.dataset.cartQuantity)
            : 0,
          min: this.input.dataset.min ? parseInt(this.input.dataset.min) : 1,
          max: this.input.dataset.max ? parseInt(this.input.dataset.max) : null,
          step: this.input.step ? parseInt(this.input.step) : 1,
        };
        let min = data.min;
        const max = data.max === null ? data.max : data.max - data.cartQuantity;
        max !== null && (min = Math.min(min, max)),
          data.cartQuantity >= data.min && (min = Math.min(min, data.step)),
          (this.input.min = min),
          (this.input.max = max),
          (this.input.value = min),
          publish(PUB_SUB_EVENTS.quantityUpdate, void 0);
      }
      fetchQuantityRules() {
        !this.currentVariant ||
          !this.currentVariant.value ||
          (this.querySelector(
            '.quantity__rules-cart .loading__spinner'
          ).classList.remove('hidden'),
          fetch(
            `${this.dataset.url}?variant=${this.currentVariant.value}&section_id=${this.dataset.section}`
          )
            .then((response) => response.text())
            .then((responseText) => {
              const html = new DOMParser().parseFromString(
                responseText,
                'text/html'
              );
              this.updateQuantityRules(this.dataset.section, html),
                this.setQuantityBoundries();
            })
            .catch((e) => {
              console.error(e);
            })
            .finally(() => {
              this.querySelector(
                '.quantity__rules-cart .loading__spinner'
              ).classList.add('hidden');
            }));
      }
      updateQuantityRules(sectionId, html) {
        const quantityFormUpdated = html.getElementById(
            `Quantity-Form-${sectionId}`
          ),
          selectors = [
            '.quantity__input',
            '.quantity__rules',
            '.quantity__label',
          ];
        for (let selector of selectors) {
          const current = this.quantityForm.querySelector(selector),
            updated = quantityFormUpdated.querySelector(selector);
          if (!(!current || !updated))
            if (selector === '.quantity__input') {
              const attributes = [
                'data-cart-quantity',
                'data-min',
                'data-max',
                'step',
              ];
              for (let attribute of attributes) {
                const valueUpdated = updated.getAttribute(attribute);
                valueUpdated !== null &&
                  current.setAttribute(attribute, valueUpdated);
              }
            } else current.innerHTML = updated.innerHTML;
        }
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/6/assets/product-info.js.map?v=81873523020508815201700898871
