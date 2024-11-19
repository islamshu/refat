import {
  c7 as C,
  A as m,
  y as I,
  a as t,
  e as _,
  jp as b,
  ab as h,
  bP as d,
  a9 as f,
  aa as P,
  bv as x,
  fb as E,
  bf as k,
  o as R,
  l as L,
  eU as O,
  aj as D,
  at as M,
  e5 as T,
  cq as V,
  em as A,
  m as F,
  pM as z,
  dE as U,
  qK as j,
  bi as q,
} from './app.js';
function Y({ impressionType: e, impressionFeatures: s }) {
  const r = C(),
    n = m(null),
    i = m({ impressionType: e, impressionFeatures: s });
  return (
    (i.current = { impressionType: e, impressionFeatures: s }),
    I(() => {
      if (!window.IntersectionObserver) return;
      const o = new IntersectionObserver(
          (p) => {
            const u = p.some(({ isIntersecting: c }) => c);
            a &&
              u &&
              (o.unobserve(a),
              r('impression', { ...i.current, timestamp: new Date() }));
          },
          { threshold: 1 }
        ),
        a = n.current;
      return (
        a && o.observe(a),
        () => {
          a && o.unobserve(a);
        }
      );
    }, [r]),
    n
  );
}
function J({ impressionType: e, impressionFeatures: s, children: r }) {
  const n = Y({ impressionType: e, impressionFeatures: s });
  return t('div', { ref: n, children: r });
}
function K() {
  const e = _();
  return t(P, {
    size: 'small',
    appearance: 'subdued',
    children: t(b, {
      children: e(
        'shop_pay_remember_me.terms_and_privacy_html',
        {
          privacy_href: t(h, {
            children: t(d, {
              external: !0,
              to: 'https://www.shopify.com/legal/privacy/app-users',
              appearance: 'monochrome',
              accessibilityLabel: e(
                'shop_pay_remember_me.new_window_disclaimer',
                '(opens a new window)'
              ),
              children: [
                e('shop_pay_remember_me.privacy_policy', 'Privacy Policy'),
                t(f, {
                  source: 'external',
                  size: 'small',
                  display: 'inline',
                  appearance: 'monochrome',
                }),
              ],
            }),
          }),
          terms_href: t(h, {
            children: t(d, {
              external: !0,
              to: 'https://shop.app/terms-of-service',
              appearance: 'monochrome',
              accessibilityLabel: e(
                'shop_pay_remember_me.new_window_disclaimer',
                '(opens a new window)'
              ),
              children: [
                e('shop_pay_remember_me.terms_of_service', 'Terms of Service'),
                t(f, { source: 'external', size: 'small', display: 'inline' }),
              ],
            }),
          }),
        },
        'By continuing, you agree to Shop Pay’s %{privacy_href} and %{terms_href}.'
      ),
    }),
  });
}
function N({ field: e = 'phone', link: s }) {
  const r = _();
  return t(P, {
    appearance: 'subdued',
    children: t(b, {
      children: [
        e === 'phone'
          ? r(
              'shop_pay_remember_me.description_html',
              'Next time you check out here or on other stores powered by Shopify, you’ll receive a code by text message to securely purchase with Shop Pay.'
            )
          : r(
              'shop_pay_remember_me.email_description_html',
              'Your email will be used to create your Shop account so you can pay faster next time.'
            ),
        ' ',
        s,
      ],
    }),
  });
}
function W() {
  const { currentUrl: e } = x(),
    s = E(e),
    { purchasingCompany: r } = k(),
    n = R(),
    { checkoutSessionIdentifier: i = '' } = L(),
    o = O(),
    a = D(),
    u = M().paymentLines.value,
    { value: c } = T(),
    { currentDetour: v } = V(),
    w = A(),
    { shopPayEnabled: g } = F(),
    { hasSavedCreditCards: S } = z(),
    l = U();
  return w?.shopPayOptInEnabled === !1 ||
    r ||
    !g ||
    (n?.__typename === 'CustomerProfile' && o && (!a || !S)) ||
    j(i) ||
    s
    ? !1
    : v?.type === 'thankYou'
    ? c
      ? y(c.lines, l)
      : !1
    : y(u, l);
}
const y = (e, s) => {
  if (!e?.length || !e[0].method) return !1;
  const { method: r } = e[0];
  return !!(
    r.type === 'direct' ||
    r.type === q.CreditCard ||
    (s && r.type === 'local' && r.name === 'IDEAL')
  );
};
export { J as I, N as R, K as a, W as u };
