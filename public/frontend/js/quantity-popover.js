customElements.get('quantity-popover') ||
  customElements.define(
    'quantity-popover',
    class extends HTMLElement {
      constructor() {
        super(),
          (this.mql = window.matchMedia('(min-width: 990px)')),
          (this.mqlTablet = window.matchMedia('(min-width: 750px)')),
          (this.infoButtonDesktop = this.querySelector(
            '.quantity-popover__info-button--icon-only'
          )),
          (this.infoButtonMobile = this.querySelector(
            '.quantity-popover__info-button--icon-with-label'
          )),
          (this.popoverInfo = this.querySelector('.quantity-popover__info')),
          (this.closeButton = this.querySelector('.button-close')),
          (this.variantInfo = this.querySelector(
            '.quantity-popover-container'
          )),
          (this.eventMouseEnterHappened = !1),
          this.closeButton &&
            this.closeButton.addEventListener(
              'click',
              this.closePopover.bind(this)
            ),
          this.popoverInfo &&
            this.infoButtonDesktop &&
            this.mql.matches &&
            this.popoverInfo.addEventListener(
              'mouseenter',
              this.closePopover.bind(this)
            ),
          this.infoButtonDesktop &&
            (this.infoButtonDesktop.addEventListener(
              'click',
              this.togglePopover.bind(this)
            ),
            this.infoButtonDesktop.addEventListener(
              'focusout',
              this.closePopover.bind(this)
            )),
          this.infoButtonMobile &&
            (this.infoButtonMobile.addEventListener(
              'click',
              this.togglePopover.bind(this)
            ),
            this.infoButtonMobile.addEventListener(
              'focusout',
              this.closePopover.bind(this)
            )),
          this.infoButtonDesktop &&
            this.mqlTablet.matches &&
            (this.variantInfo.addEventListener(
              'mouseenter',
              this.togglePopover.bind(this)
            ),
            this.variantInfo.addEventListener(
              'mouseleave',
              this.closePopover.bind(this)
            ));
      }
      togglePopover(event) {
        if (
          (event.preventDefault(),
          event.type === 'mouseenter' && (this.eventMouseEnterHappened = !0),
          event.type === 'click' && this.eventMouseEnterHappened)
        )
          return;
        const button =
            this.infoButtonDesktop && this.mql.matches
              ? this.infoButtonDesktop
              : this.infoButtonMobile,
          isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded),
          this.popoverInfo.toggleAttribute('hidden');
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.classList.toggle('quantity-popover__info-button--open'),
          isOpen && event.type !== 'mouseenter' && button.focus();
      }
      closePopover(event) {
        event.preventDefault();
        const isChild = this.variantInfo.contains(event.relatedTarget),
          button =
            this.infoButtonDesktop && this.mql.matches
              ? this.infoButtonDesktop
              : this.infoButtonMobile;
        (!event.relatedTarget || !isChild) &&
          (button.setAttribute('aria-expanded', 'false'),
          button.classList.remove('quantity-popover__info-button--open'),
          this.popoverInfo.setAttribute('hidden', '')),
          (this.eventMouseEnterHappened = !1);
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/6/assets/quantity-popover.js.map?v=19455713230017000861700898871
