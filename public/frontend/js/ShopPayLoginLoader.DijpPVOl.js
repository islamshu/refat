import {
  c as ne,
  aO as se,
  oM as z,
  cx as te,
  q as u,
  c0 as ie,
  h as I,
  oN as re,
  J as j,
  e as K,
  r as ce,
  l as G,
  m as le,
  cH as C,
  A as ue,
  o as he,
  bF as de,
  j0 as W,
  cF as me,
  iF as pe,
  bs as ge,
  T as F,
  ih as J,
  y as g,
  cI as Q,
  oO as V,
  oP as fe,
  a as o,
  ab as ye,
  bK as Se,
  hg as Pe,
  oQ as Le,
  oR as _e,
  he as be,
  bP as ke,
  V as q,
  hW as Ie,
  cK as Ce,
  fc as Te,
  j7 as we,
  O as Ae,
  Q as ve,
  bA as Ee,
  cM as b,
  f9 as x,
  hY as Oe,
  m8 as Me,
  E as h,
  ae as Re,
  a0 as De,
  a6 as Ne,
  v as Ue,
  oS as He,
} from './app.js';
import {
  a as ze,
  u as Y,
  b as Fe,
  p as Ve,
  S as xe,
  U as $e,
} from './publishMessage.C2H334tF.js';
import { S as k, b as je, u as Ke } from './Section.DVUmF4Ga.js';
const Ge = ne(!1);
function We() {
  const a = se(),
    s = Object.keys(z).map((e) => [e, te[e]]),
    t = u(async () => {
      s.forEach(([e, r]) => {
        a.write(r, z[e]);
      });
    }, [a, s]);
  return { shopPayLogout: Ge, resetShopPayParts: t };
}
const Je = '_5Z70J',
  Qe = { LoginIframe: Je },
  qe = 'shop-pay-login-iframe',
  Ye = '100%',
  $ = 'c1_login',
  Ze = 250;
function Be() {
  const a = ie(We().shopPayLogout),
    [s, t] = I(!0),
    [e, r] = I(Ze),
    c = re(),
    { progress: i } = j(),
    f = K(),
    d = ce(),
    { checkoutSessionIdentifier: y } = G(),
    { myshopifyDomain: T } = le(),
    { transaction_params: w, authorization: A } = C(),
    m = ue(null),
    S = he(),
    P = de().alternate,
    { exchangeSessionTokenForCookie: v } = ze(),
    E = W(),
    {
      sessionStorageEmail: O,
      startEmailOnlySignUp: M,
      skipAutomaticCustomerLoginAttempt: R,
      setSkipAutomaticCustomerLoginAttempt: l,
      setSharedHCaptchaToken: D,
    } = me(),
    N = pe(),
    U = ge(),
    p = F(() => Se(), []),
    L = Y();
  J(s);
  const Z = u(() => {
      Ve(m?.current, { action: xe.Ready }),
        m.current?.contentDocument?.body &&
          Pe(m.current.contentDocument.body)?.focus();
    }, []),
    B = u(
      async (n, _) => {
        n &&
          (await v({
            token: n,
            origin: $,
            analytics_trace_id: p,
            in_checkout_profile_preview: _,
          })),
          l(!1),
          i();
      },
      [p, i, v, l]
    ),
    X = u((n) => {
      r(n);
    }, []),
    ee = u(
      (n) => {
        M(n), l(!1), i();
      },
      [i, M, l]
    ),
    oe = u(
      (n) => {
        D(n);
      },
      [D]
    );
  g(() => {
    O && c > 0 && (l(!1), i());
  }, [O, i, l, c]),
    Fe({
      hostname: P,
      onLoaded: Z,
      onLoggedIn: B,
      onResized: X,
      onRedirectUserWithEmailOnly: ee,
      onShareCaptchaToken: oe,
    });
  const ae = F(() => {
    if (!y) throw new Q('Checkout token is undefined');
    const n = {
      shopify_domain: T,
      checkout_token: y,
      origin: $,
      locale: d,
      transaction_params: w,
      isPointOfSale: E,
      analytics_trace_id: p,
      shop_pay_new_signup_login_variant: L,
    };
    !R && S?.email && (n.storefront_account_email = S.email),
      N &&
        ((n[Le] = U.isPartner() ? V.Partner : V.Merchant), (n[_e] = fe.Dark)),
      a || (n.authorization = A);
    const _ = Object.entries(n)
      .map(
        (H) => `${encodeURIComponent(H[0])}=${encodeURIComponent(H[1] || '')}`
      )
      .join('&');
    return `https://${P}/pay/authentication/login-seamless?${_}`;
  }, [y, T, d, w, A, E, p, R, S?.email, N, P, U, L, a]);
  return L
    ? o(ye, {
        children: o('iframe', {
          ref: m,
          id: qe,
          title: f('shop_pay.verification.title', 'Shop Pay Quick Checkout'),
          src: ae,
          onLoad: () => t(!1),
          height: e,
          width: Ye,
          className: Qe.LoginIframe,
          allow: 'publickey-credentials-get *',
        }),
      })
    : null;
}
function Xe() {
  const a = be(),
    t = K()(
      'checkout_sdk.use_another_payment_method',
      'Use another payment method'
    ),
    { checkout_as_guest_url: e } = C();
  return a
    ? o(q, {
        padding: 'base',
        inlineAlignment: 'center',
        children: o(ke, { to: e, children: t }),
      })
    : null;
}
const eo = 'oSdnC',
  oo = { ShopPayLogin: eo };
function ao() {
  Ie(Oe);
  const { redirect_source: a } = C(),
    { recordImmediately: s, pageLoadId: t } = Ce(),
    e = Te(),
    r = we(Me.SHOP_PAY_LOGIN),
    c = W();
  Ae({ stage: ve.Complete, id: 'ShopPayLogin' });
  const { checkoutSessionIdentifier: i = 'checkout_identifier_undefined' } =
    G();
  g(() => {
    Ee() &&
      s({
        schemaId: b.ShopAppPageLoad,
        payload: {
          platform: 'web',
          locale: navigator.language,
          userToken: x('_shopify_y') || '',
          webSessionToken: x('_shopify_s') || '',
          pageType: 'pay_checkout_login',
          pageValue: i,
        },
      }),
      s({
        schemaId: b.PayPageLoad,
        payload: {
          pageType: 'checkout_login',
          clientTimestampMs: Date.now(),
          pageLoadId: t,
          redirectSource: a,
        },
      }),
      c && e?.record({ schemaId: b.PayRetail, payload: r });
  }, [t, s, a, e, r, c, i]);
}
function no() {
  ao();
  const a = h
    .default('block')
    .when({ viewportInlineSize: { min: 'medium' } }, 'none');
  return o('div', {
    children: [
      o(k, {
        padding: 'none',
        dividerDisplay: a,
        children: o(q, {
          padding: h
            .default('none')
            .when({ viewportInlineSize: { min: 'small' } }, [
              'none',
              'none',
              'large500',
              'none',
            ]),
          maxInlineSize: h
            .default(432)
            .when({ viewportInlineSize: { min: 'small' } }, 425),
          className: Re(oo.ShopPayLogin),
          children: o(k, {
            padding: 'none',
            border: h.when({ viewportInlineSize: { min: 'small' } }, 'base'),
            cornerRadius: h.when(
              { viewportInlineSize: { min: 'small' } },
              'base'
            ),
            hideDivider: !0,
            children: o(Be, {}),
          }),
        }),
      }),
      o(De, {
        section: 'summary',
        children: o(Ne, {
          above: 'small',
          children: o(k, { hideDivider: !0, children: o(je, {}) }),
        }),
      }),
      o(Xe, {}),
    ],
  });
}
function so() {
  const a = Ue(),
    s = Y(),
    t = s ? $e.includes(s) : !1,
    e = s == null || t;
  J(e);
  const r = He(),
    { progress: c } = j(),
    [i, f] = I(!1);
  return (
    g(() => {
      t && (r?.usable(), f(!0));
    }, [t, r, c]),
    g(() => {
      i && c();
    }, [c, i]),
    Ke({
      enabled: e,
      onTimeout: (d) => {
        a.notify(new Q(`ShopPayLoginLoader does not resolve after ${d}ms`));
      },
    }),
    e ? null : o(no, {})
  );
}
const co = Object.freeze(
  Object.defineProperty({ __proto__: null, default: so }, Symbol.toStringTag, {
    value: 'Module',
  })
);
export { co as S, We as u };
