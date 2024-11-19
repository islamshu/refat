import {
  bu as _,
  bv as I,
  l as C,
  bw as w,
  bx as L,
  o as F,
  by as U,
  bz as b,
  bA as W,
  bB as f,
  bC as v,
  bD as R,
  bE as M,
  m as x,
  k as H,
  q as k,
  bF as B,
  y as D,
} from './app.js';
const E = _.Control,
  G = _.UnauthenticatedCheckout,
  V = _.UnauthenticatedCheckout,
  Q = [_.UnauthenticatedCheckout];
function Y() {
  const { currentUrl: e } = I(),
    { type: a } = C(),
    t = e.searchParams.get(w),
    [d, o] = L([R, M]),
    l = F() != null,
    i = U(),
    u = [b.DraftOrder, b.Simulated],
    c = W(e.search),
    n = (c && d) || o,
    y = ![
      f.ShopPayAsPaymentMethod,
      f.ShopPayInstallmentsAsPaymentMethod,
    ].includes(t),
    h = i && y && !u.includes(a) && (!l || n),
    p = v({
      disabled: !h,
      key: 'shop_pay_new_signup_login_variant',
      variants: Object.values(_),
    });
  return h ? p || (c ? (d ? V : E) : o ? G : E) : E;
}
const q = () => {
    const { myshopifyDomain: e } = x(),
      { checkoutSessionIdentifier: a } = C(),
      t = H();
    return {
      exchangeSessionTokenForCookie: k(
        async ({
          token: o,
          origin: l,
          analytics_trace_id: i,
          in_checkout_profile_preview: u,
        }) => {
          const { primary: c } = B(),
            n = new URLSearchParams({ token: o, origin: l, shopify_domain: e });
          a && n.set('checkout_token', a),
            i && n.set('analytics_trace_id', i),
            u && n.set('in_checkout_profile_preview', u),
            await fetch(`https://${c}${t.shopPaySession()}?${n.toString()}`, {
              method: 'POST',
              keepalive: !0,
            });
        },
        [a, e, t]
      ),
    };
  },
  O = 'shopify_pay',
  m = ':';
var r = ((e) => (
    (e.Closed = 'closed'),
    (e.EmailChanged = 'emailChanged'),
    (e.Error = 'error'),
    (e.Hidden = 'hidden'),
    (e.Loaded = 'loaded'),
    (e.LoggedIn = 'loggedIn'),
    (e.Ready = 'ready'),
    (e.RedirectWithEmailOnly = 'redirectWithEmailOnly'),
    (e.Resized = 'resized'),
    (e.ShareCaptchaToken = 'shareCaptchaToken'),
    e
  ))(r || {}),
  z = ((e) => (
    (e.AllowNoInitialEmail = 'allowNoInitialEmail'),
    (e.Create = 'create'),
    (e.Hidden = 'hidden'),
    (e.OriginChanged = 'originChanged'),
    (e.Ready = 'ready'),
    (e.CheckoutQueueToken = 'checkoutQueueToken'),
    e
  ))(z || {}),
  K = ((e) => ((e.ShopifyPayUserNotFound = 'shopify_pay_user_not_found'), e))(
    K || {}
  ),
  $ = ((e) => (
    (e.FraudGuard = 'fraud_guard'),
    (e.InvalidEmail = 'invalid_email'),
    (e.InvalidPhone = 'invalid_phone'),
    (e.LimitExceeded = 'limit_exceeded'),
    (e.PhoneBlocked = 'phone_blocked'),
    (e.RecordNotFound = 'record_not_found'),
    e
  ))($ || {});
function X({
  hostname: e,
  targetId: a,
  onLoaded: t,
  onClosed: d,
  onHidden: o,
  onError: l,
  onLoggedIn: i,
  onReady: u,
  onResized: c,
  onRedirectUserWithEmailOnly: n,
  onShareCaptchaToken: y,
  onEmailChange: h,
}) {
  const p = k(
    (s) => {
      switch (s.action) {
        case r.Closed:
          return d?.();
        case r.Hidden:
          return o?.();
        case r.Error:
          return l?.(s.message, s.apiError, s.email);
        case r.Loaded:
          return t?.();
        case r.LoggedIn:
          return i?.(
            s.token,
            s.in_checkout_profile_preview,
            s.shop_pay_access_token
          );
        case r.Ready:
          return u?.(s.phoneNumber);
        case r.Resized:
          return c?.(parseInt(s.height, 10));
        case r.RedirectWithEmailOnly:
          return n?.(s.email);
        case r.ShareCaptchaToken:
          return y?.(s.token);
        case r.EmailChanged:
          return h?.(s.email, s.isUserFound);
      }
    },
    [d, o, l, t, i, u, c, n, y, h]
  );
  D(() => {
    const s = ({ data: g, origin: N }) => {
      if (N !== `https://${e}` || !g || typeof g != 'string' || !g.includes(m))
        return;
      const [P, ...T] = g.split(m);
      if (P === O)
        try {
          const S = JSON.parse(T.join(m));
          ((a && S.targetId === a) || !a) && p(S);
        } catch {}
    };
    return (
      window.addEventListener('message', s),
      () => {
        window.removeEventListener('message', s);
      }
    );
  }, [p, e, a]);
}
function j(e, a = { delimiter: m, messageKey: O }) {
  return [a.messageKey, a.delimiter, JSON.stringify(e)].join('');
}
function A(e) {
  return j(e);
}
function Z(e, a) {
  e && e.contentWindow?.postMessage(A(a), '*');
}
export { $ as A, K as M, z as S, Q as U, q as a, X as b, Z as p, Y as u };
