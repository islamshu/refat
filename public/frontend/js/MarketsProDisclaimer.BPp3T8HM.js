const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'component-PayPalExpressButton.CMlRI300.js',
      'app.YFeVIJ1k.js',
      'assets/app.whj6cDzT.css',
      'assets/PayPalExpressButton.h-S8x8hC.css',
    ])
) => i.map((i) => d[i]);
import {
  ji as y,
  a as e,
  T as h,
  pl as p,
  gj as g,
  c0 as b,
  pm as P,
  bH as f,
  bI as v,
  _ as k,
  e as m,
  m as d,
  aa as o,
  bt as i,
  bP as x,
  V as C,
  ab as A,
  aB as s,
} from './app.js';
function B({ id: a, children: n }) {
  const t = y(!1);
  return e(p.Provider, {
    value: h(() => ({ id: a, completeStatusAtom: t }), [a, t]),
    children: [n, e(M, {})],
  });
}
function M() {
  const a = g(p),
    n = b(a.completeStatusAtom);
  return P(a.id, !n), null;
}
const T = f({
  load: () =>
    v(() =>
      k(
        () => import('./component-PayPalExpressButton.CMlRI300.js'),
        __vite__mapDeps([0, 1, 2, 3])
      )
    ),
});
function R(a) {
  const n = a.fundingSource === 'venmo' ? 'Venmo' : 'PayPal';
  return e(B, { id: n, children: e(T, { ...a }) });
}
function S({ isForExpressCheckout: a = !1 }) {
  const n = m(),
    { merchantPolicies: t } = d(),
    r = a ? 'small' : 'base',
    c = t?.find((_) => _.handle === 'subscription-policy'),
    l = e(o, {
      appearance: 'subdued',
      size: r,
      children: n(
        'payment.purchase_options_cancellation_policy_label',
        'cancellation policy'
      ),
    }),
    u = c
      ? e(x, {
          appearance: 'monochrome',
          overlay: e(i, {
            title: n(
              'shop_policies.purchase_options_cancellation_policy',
              'Cancellation policy'
            ),
            source: c.url,
            padding: !0,
          }),
          children: l,
        })
      : l;
  return e(A, {
    children: e(C, {
      id: 'purchase_options_agreement',
      padding: a ? ['small100', 'none', 'none', 'none'] : 'none',
      children: e(o, {
        appearance: 'subdued',
        size: r,
        children: a
          ? n(
              'payment.purchase_options_agreement_label_wallets',
              'By continuing with your payment, you agree to the future charges listed on this page and the cancellation policy.'
            )
          : n(
              'payment.purchase_options_agreement_label',
              { cancellation_policy_label: u },
              'One or more items in your cart is a deferred or recurring purchase. By continuing with your payment, you agree that your payment method will automatically be charged at the price and frequency listed on this page until it ends or you cancel. All cancellations are subject to the  %{cancellation_policy_label}.'
            ),
      }),
    }),
  });
}
function V({ textProps: a }) {
  const { name: n } = d(),
    t = m();
  return e(o, {
    ...a,
    children: t(
      'payment.markets_pro_disclaimer_label',
      {
        markets_pro_terms: e(s, {
          kind: 'plain',
          textDecoration: 'none',
          overlay: e(i, {
            source: 'https://content.global-e.com/shopper-terms',
            title: t(
              'payment.markets_pro_disclaimer_terms_and_conditions_title',
              'Merchant of Record Terms and Conditions'
            ),
            padding: !0,
          }),
          'aria-haspopup': 'dialog',
          children: t(
            'payment.markets_pro_disclaimer_terms_and_conditions',
            'Terms and Conditions'
          ),
        }),
        privacy_policy: e(s, {
          kind: 'plain',
          textDecoration: 'none',
          overlay: e(i, {
            source: 'https://content.global-e.com/privacy-policy',
            title: t(
              'payment.markets_pro_disclaimer_privacy_policy_title',
              'Merchant of Record Privacy Policy'
            ),
            padding: !0,
          }),
          'aria-haspopup': 'dialog',
          children: t(
            'payment.markets_pro_disclaimer_privacy_policy',
            'Privacy Policy'
          ),
        }),
        shop_name: n,
      },
      "By clicking below and completing your order, you agree to purchase your item(s) from Global-e as merchant of record for this transaction, on Global-e's %{markets_pro_terms} and %{privacy_policy}. Global-e is an international fulfilment service provider to %{shop_name}."
    ),
  });
}
export { V as M, S as P, R as a, B as b };
