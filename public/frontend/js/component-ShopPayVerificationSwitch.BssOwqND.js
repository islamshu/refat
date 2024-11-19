import {
  hc as He,
  o as ue,
  cH as ge,
  r as ze,
  m as Pe,
  l as te,
  T as V,
  cI as de,
  bw as We,
  bB as Ge,
  bF as ve,
  h as B,
  q as b,
  w as we,
  a as C,
  eC as qe,
  A,
  hd as Ke,
  he as je,
  y as g,
  ae as me,
  hf as Ye,
  ab as Ce,
  dg as Qe,
  hg as Je,
  hh as Xe,
  bc as Ie,
  hi as Me,
  d as ae,
  br as ie,
  aO as be,
  hj as Le,
  hk as X,
  hl as Ae,
  f9 as ce,
  hm as ee,
  hn as W,
  ho as De,
  hp as q,
  hq as ne,
  hr as le,
  hs as Ze,
  ht as oe,
  hu as Ne,
  hv as et,
  cE as U,
  v as tt,
  bO as nt,
  e as ot,
  c0 as st,
  cx as rt,
  cB as at,
  hw as it,
  hx as xe,
  hy as ct,
  hz as ut,
  by as dt,
  al as lt,
  hA as ye,
} from './app.js';
import { M as R } from './DeliveryMethodSelectorSection.45hAcTBm.js';
import {
  u as ht,
  p as G,
  S as $,
  A as J,
  a as ft,
  M as Te,
  b as pt,
} from './publishMessage.C2H334tF.js';
import {
  a as mt,
  u as yt,
  U as Se,
} from './useUnauthenticatedErrorModal.Dgap6hbC.js';
import {
  u as St,
  a as Ue,
  P as Et,
  C as _t,
  i as se,
  b as kt,
  c as Z,
  d as he,
  e as Ve,
  f as fe,
  g as gt,
  A as Pt,
  h as vt,
  r as wt,
  R as Ct,
  j as It,
} from './index.lnCcFIPd.js';
import './LegacyVaultedShippingMethods.DGTCZkTx.js';
import './Rollup.D_DVU1MA.js';
import './SubscriptionPriceBreakdown.GhzR2flD.js';
import './MarketsProDisclaimer.BPp3T8HM.js';
import './ShopPayLogo.qW-3ANH5.js';
import './index.DcTYqCBo.js';
import './PickupPointCarrierLogo.BqXvsPcc.js';
import './hooks.aHDY8Amc.js';
const Mt = (e) => {
    const { alternate: n } = ve(),
      t = He(),
      o = ue(),
      { iframe_token: r, redirect_url: d, transaction_params: c } = ge(),
      s = ze(),
      { myshopifyDomain: u } = Pe(),
      { checkoutSessionIdentifier: a } = te(),
      i = ht();
    return V(() => {
      if (!a) throw new de('Checkout token is undefined');
      if (!i) return;
      const m =
          e === R.C1InlineModal ? { [We]: Ge.ShopPayAsPaymentMethod } : null,
        f = {
          shopify_domain: u,
          checkout_token: a,
          origin: e,
          locale: s,
          iframe_token: r,
          redirect_url: d,
          transaction_params: c,
          shop_pay_new_signup_login_variant: i,
          ...m,
        };
      o?.email && (f.fast_login = !0);
      const h = Object.entries(f).map(
        (l) => `${encodeURIComponent(l[0])}=${encodeURIComponent(l[1])}`
      );
      t && h.push(t);
      const p = h.join('&');
      return `https://${n}/pay/transactions/new/email?${p}`;
    }, [e, n, u, a, s, r, d, c, i, t, o]);
  },
  Ee = 10;
function bt({ x: e, y: n }) {
  const t = window.devicePixelRatio || 1;
  return { x: Math.round(e * t) / t || 0, y: Math.round(n * t) / t || 0 };
}
function Lt(e, n, t, o, { offset: r = 0, arrowOffset: d = 0 } = {}) {
  let c = { x: 0, y: 0 },
    s = { left: 0, right: 0 },
    u = 0;
  if (!n && !t) return { offsets: c, spacing: u };
  if (!o) {
    const { clientWidth: a, clientHeight: i } = document.documentElement;
    return (
      (c = { x: a / 2 - n / 2, y: i / 2 - t / 2 }), { offsets: c, spacing: u }
    );
  }
  switch (e) {
    case 'blockEnd':
      c = {
        x: (document?.dir ?? 'ltr') === 'rtl' ? o.left : o.right - n,
        y: o.bottom + r,
      };
      break;
    case 'inlineEnd':
      c = {
        x: (document?.dir ?? 'ltr') === 'rtl' ? o.left - n - r : o.right + r,
        y: o.top + o.height / 2 - d,
      };
      break;
  }
  return (
    (s = At(c, n)),
    s.right && !s.left
      ? ((c.x += s.right), (u = -Ee))
      : !s.right && s.left && ((c.x = 0), (u = Ee)),
    { offsets: c, spacing: u }
  );
}
function At(e, n) {
  const t = document.documentElement.clientWidth,
    o = e.x + n;
  let r = { left: 0, right: 0 };
  return (
    o > t && (r = { ...r, right: t - o }),
    e.x < 0 && (r = { ...r, left: -e.x }),
    r
  );
}
function Dt() {
  const [e, n] = B(null),
    t = b((o) => {
      o !== null && n(o.getBoundingClientRect());
    }, []);
  return [e, t];
}
function Nt(e) {
  const [n, t] = B(null),
    o = b(() => {
      e !== null && t(e.getBoundingClientRect());
    }, [e]);
  return (
    we(
      () => (
        o(),
        window.addEventListener('resize', o),
        window.addEventListener('scroll', o),
        () => {
          window.removeEventListener('resize', o),
            window.removeEventListener('scroll', o);
        }
      ),
      [o]
    ),
    n
  );
}
const xt = 'qdHCv',
  Tt = { Popper: xt };
function Ut({
  children: e,
  offset: n,
  arrowOffset: t,
  contentWidth: o,
  contentHeight: r,
  placement: d = 'inlineEnd',
  activator: c,
  open: s,
}) {
  const u = Nt(c ?? null),
    [a, i] = Dt(),
    { offsets: m, spacing: f } = V(
      () =>
        s
          ? Lt(d, (o || a?.width) ?? 0, (r || a?.height) ?? 0, u, {
              offset: n,
              arrowOffset: t,
            })
          : { offsets: { x: 0, y: 0 }, spacing: 0 },
      [n, t, d, a, u, s, o, r]
    ),
    { x: h, y: p } = V(
      () =>
        s
          ? bt({
              x: m.x + f + (window.scrollX || window.pageXOffset),
              y: m.y + (window.scrollY || window.pageYOffset),
            })
          : { x: 0, y: 0 },
      [m, f, s]
    ),
    l = V(
      () =>
        s
          ? (window.devicePixelRatio || 1) < 2
            ? `translate(${h}px, ${p}px)`
            : `translate3d(${h}px, ${p}px, 0)`
          : 'none',
      [s, h, p]
    );
  return C(qe, {
    children: C('div', {
      className: Tt.Popper,
      style: {
        ...(a && { transform: l, MozTransform: l, WebkitTransform: l }),
      },
      ref: i,
      'aria-hidden': !s,
      children: e,
    }),
  });
}
const Vt = 'hgqpU',
  Ot = 'axmya',
  Rt = 'JHj7j',
  Bt = 'hQvGd',
  Ft = 'PMbsk',
  $t = 'wA8HY',
  Ht = 'xnzQ4',
  O = {
    Backdrop: Vt,
    'Backdrop-visible': 'LTbS5',
    BackdropLinearGradient: Ot,
    Popover: Rt,
    Content: Bt,
    PopoverArrow: Ft,
    PopoverOpen: $t,
    'Popover-placementInlineEnd': 'trTaz',
    'Popover-placementBlockEnd': 'KMvI7',
    Bumper: Ht,
  },
  zt = Qe('Popover');
function Wt({
  children: e,
  activator: n,
  open: t,
  placement: o = 'inlineEnd',
  contentWidth: r,
  contentHeight: d,
  onClose: c,
}) {
  const s = A(null),
    u = A(null),
    a = A(null),
    i = Ke(void 0, zt),
    m = je(),
    f = b(() => {
      n?.tagName === 'BUTTON' &&
        (n?.setAttribute('aria-controls', i),
        n?.setAttribute('aria-expanded', String(t)));
    }, [n, t, i]),
    h = b(
      (S) => {
        c?.(S);
      },
      [c]
    ),
    p = b(
      (S) => {
        S.target instanceof Node &&
          !n?.contains(S.target) &&
          document.contains(S.target) &&
          !a.current?.contains(S.target) &&
          t &&
          h(S);
      },
      [h, n, t, a]
    ),
    l = b(
      (S) => {
        if (t)
          switch (S.key) {
            case 'Escape':
            case 'Esc':
              h(), n?.focus();
              break;
          }
      },
      [h, n, t]
    );
  g(
    () => (
      document.addEventListener('click', p),
      () => {
        document.removeEventListener('click', p);
      }
    ),
    [p]
  ),
    g(
      () => (
        t && document.addEventListener('keydown', l, !1),
        () => {
          document.removeEventListener('keydown', l, !1);
        }
      ),
      [t, l]
    ),
    g(() => {
      f();
    }),
    we(() => {
      t && a.current?.focus({ preventScroll: !0 });
    }, [t]);
  const P = (S) => {
      const _ = a.current;
      if (_) {
        const v = S ? Je(_) : Xe(_);
        v ? v.focus() : _.focus();
      }
    },
    y = me(
      O.Popover,
      O[Ye('Popover-placement', o)],
      t && O.PopoverOpen,
      n && O.PopoverArrow
    );
  return C(Ce, {
    children: [
      C(Ut, {
        activator: n,
        placement: o,
        offset: 15,
        arrowOffset: 30,
        open: t,
        contentWidth: r,
        contentHeight: d,
        children: [
          t &&
            C('button', {
              className: O.Bumper,
              ref: s,
              'aria-hidden': 'true',
              onFocus: () => P(!1),
            }),
          C('div', {
            className: y,
            id: i,
            ref: a,
            children: C('div', { className: O.Content, children: e }),
          }),
          t &&
            C('button', {
              className: O.Bumper,
              ref: u,
              'aria-hidden': 'true',
              onFocus: () => P(!0),
            }),
        ],
      }),
      C('div', {
        className: me(
          O.Backdrop,
          t && O['Backdrop-visible'],
          t && m && O.BackdropLinearGradient
        ),
      }),
    ],
  });
}
const Gt = 'B1y2m',
  qt = { VerificationIframe: Gt };
var re = ((e) => (
  (e.Normal = 'normal'),
  (e.CustomerAccount = 'customer_account'),
  (e.AccountsSameStore = 'accounts_same_store'),
  (e.AccountsCrossStore = 'accounts_cross_store'),
  e
))(re || {});
let Kt = class extends Error {
  name = 'ShopPayError';
};
function jt({
  email: e,
  skipVerifyOnLoad: n,
  iframeReady: t,
  iframeRef: o,
  dismissedModalKey: r,
  readyToDismiss: d,
  onReadyToDismiss: c,
  showPopover: s,
  showToggle: u,
  popoverActivator: a,
}) {
  const i = ue(),
    [m] = Ie(),
    { guestDismissedModalKey: f } = Me(),
    { checkoutSessionIdentifier: h } = te(),
    [, p] = ae(ie),
    l = be(),
    P = Le(X.ShopPayVerification, { scope: De }),
    y = Ae().current.token;
  g(() => {
    if (n.current && t) {
      n.current = !1;
      return;
    }
    const I = i && ce(r),
      L = e && ee(e),
      k = m.status === 'connected',
      M = i && Yt();
    if (!(!t || !L || I || k || M)) {
      if (l.read(P).value === W.Verified) {
        l.write(P, void 0);
        return;
      }
      G(o?.current, {
        action: $.Create,
        email: e,
        flow: re.Normal,
        disableAutoFocus: !!sessionStorage.getItem(f),
      });
    }
  }, [e, t]);
  function S() {
    if (!h) throw new Kt('Checkout token is undefined');
    (i && ce(r)) ||
      (e &&
        ee(e) &&
        (d || c(),
        y && G(o?.current, { action: $.CheckoutQueueToken, queueToken: y }),
        q(oe, escape(h)),
        ne(X.IdentifiedShopPayUser, escape(h)),
        q(Ne, 'false'),
        window.dispatchEvent(new Event('shop_pay_user_identified_cookie_set')),
        l.write(P, W.Pending),
        sessionStorage.getItem(f) ? u?.(!0) : (s(!0, e), u?.(!1))));
  }
  function _() {
    d &&
      (l.write(P, W.Dismissed),
      i && q(r, 'true'),
      a?.current?.focus(),
      s(!1),
      u?.(!0));
  }
  function v() {
    le(), l.write(P, W.Verified), p('none');
  }
  return { onShow: S, onHidden: _, onLoggedIn: v };
}
function Yt() {
  const e = sessionStorage.getItem(Ze);
  if (!e) return !1;
  const n = Number.parseInt(e, 10);
  return isNaN(n) ? !1 : Date.now() < n;
}
class Qt extends Error {
  name = 'ShopPayError';
}
const Jt = [J.FraudGuard, J.InvalidPhone, J.LimitExceeded, J.PhoneBlocked];
function Xt({
  email: e,
  onSetEmail: n,
  skipVerifyOnLoad: t,
  iframeReady: o,
  iframeRef: r,
  readyToDismiss: d,
  onReadyToDismiss: c,
  showPopover: s,
  popoverActivator: u,
  origin: a,
  open: i,
}) {
  const { checkoutSessionIdentifier: m } = te(),
    { openModal: f } = mt(),
    { exchangeSessionTokenForCookie: h } = ft(),
    [, p] = ae(ie),
    l = A(null),
    P = A(!1),
    y = et(),
    [, S] = yt(),
    _ = b(() => {
      r.current &&
        G(r.current, { action: $.Create, email: '', flow: re.Normal });
    }, [r]);
  g(() => {
    r.current &&
      o &&
      a === R.C1ModalShopPaySignIn &&
      (G(r.current, { action: $.AllowNoInitialEmail }),
      _(),
      G(r.current, { action: $.Ready }));
  }, [o, r, a, _]),
    g(() => {
      i && (l.current = null);
    }, [i]),
    g(() => {
      P.current && r.current && o && ((P.current = !1), _());
    }),
    g(() => {
      function E() {
        n &&
          (y.set({ email: '', userStatus: U.None }),
          n(''),
          u?.current?.focus()),
          (P.current = !0);
      }
      return (
        window.addEventListener('shop_pay_verification_reset', E),
        () => {
          window.removeEventListener('shop_pay_verification_reset', E);
        }
      );
    }, [u, s, n, r, y]),
    g(() => {
      if (!o) return;
      if (t.current) {
        t.current = !1;
        return;
      }
      e && ee(e) && a !== R.C1ModalShopPaySignIn
        ? (y.set({ email: e, userStatus: U.Loading }),
          G(r?.current, { action: $.Create, email: e, flow: re.Normal }))
        : a !== R.C1ModalShopPaySignIn &&
          (_(), y.set({ email: '', userStatus: U.None }));
    }, [e, o, t, r, a, y, _, s, S]);
  function v() {
    if (!m) throw new Qt('Checkout token is undefined');
    a === R.C1ModalShopPay &&
      e &&
      ee(e) &&
      (d || c(), y.set({ email: e, userStatus: U.Found }), s(!0, e));
  }
  function I() {
    if (a === R.C1ModalShopPay && !d) return;
    const E = l.current;
    n != null &&
      E != null &&
      (E.userStatus !== U.Found || a === R.C1ModalShopPay || !e) &&
      (n(E.email), y.set(E), u?.current?.focus()),
      y.get().userStatus === U.Found
        ? f({ type: Se.ContinueWithShopPay, email: y.get().email })
        : u?.current?.focus(),
      s(!1),
      (l.current = null);
  }
  function L(E, w, D) {
    if (
      !(D && D !== y.get().email) &&
      (E === Te.ShopifyPayUserNotFound &&
        Jt.includes(w) &&
        (s(!1), f({ type: Se.Generic })),
      D)
    ) {
      const x = w === J.InvalidEmail;
      y.set({ email: D, userStatus: x ? U.Invalid : U.New });
    }
  }
  function k(E, w) {
    E
      ? (l.current || y.get().email !== E) &&
        (l.current = { email: E, userStatus: w ? U.Found : U.New })
      : (l.current = { email: '', userStatus: U.None });
  }
  async function M(E, w) {
    le(),
      p('none'),
      E &&
        (await h({ token: E, origin: a, in_checkout_profile_preview: w }),
        window.location.reload());
  }
  return {
    onShow: v,
    onHidden: I,
    onEmailChange: k,
    onError: L,
    onLoggedIn: M,
  };
}
function Zt(e) {
  const n = tt(),
    t = A(e),
    o = t.current,
    r =
      e === t.current
        ? void 0
        : `Callback hook changed from ${t.current.name} to ${e.name} between renders.`;
  return (
    g(() => {
      r &&
        n.notify(new de(`${r} Only the original hook is called.`), {
          severity: 'warning',
          errorClass: 'ShopPay::ShopPayVerification::useStableHook',
        });
    }, [r, n]),
    o
  );
}
const en = 'shop-pay-verification-iframe',
  _e = 320,
  tn = 300,
  nn = 1e3;
function on({
  email: e,
  onSetEmail: n,
  open: t,
  popoverActivator: o,
  showPopover: r,
  showToggle: d,
  urlOrigin: c = R.C1Modal,
  updatedOrigin: s = c,
  onIframeLoaded: u,
}) {
  const a = nt({ base: 'blockEnd', medium: 'inlineEnd' }),
    [i, m] = B(!1),
    [f, h] = B(tn),
    [p, l] = B(!1),
    P = ot(),
    { checkoutSessionIdentifier: y } = te(),
    S = A(null),
    { alternate: _ } = ve(),
    v = _,
    [I, L] = B(!1),
    [, k] = ae(ie),
    M = st(rt?.flow) === at.UnauthenticatedUser,
    E = it(e, ut),
    w = `${y}-${e.replace(/[^a-zA-Z0-9]/g, '')}`,
    D = xe(),
    x = A(D),
    {
      onShow: K,
      onHidden: T,
      onError: j,
      onEmailChange: Y,
      onLoggedIn: F,
    } = Zt(M ? Xt : jt)({
      email: E,
      onSetEmail: n,
      skipVerifyOnLoad: x,
      iframeReady: i,
      iframeRef: S,
      dismissedModalKey: w,
      readyToDismiss: p,
      onReadyToDismiss: () => {
        setTimeout(() => l(!0), nn);
      },
      showPopover: r,
      showToggle: d,
      popoverActivator: o,
      origin: s,
      open: t,
    });
  pt({
    hostname: v,
    targetId: c,
    onReady: K,
    onClosed: Be,
    onLoggedIn: F,
    onHidden: T,
    onError: Fe,
    onResized: Re,
    onLoaded: () => {
      m(!0), u();
    },
    onEmailChange: Y,
  }),
    g(() => {
      G(S?.current, { action: $.OriginChanged, origin: s });
    }, [s]),
    g(() => {
      const H = t ? $.Ready : $.Hidden;
      G(S?.current, { action: H }),
        k(t ? 'shopPayVerification' : 'none'),
        S.current && t && S.current.focus();
    }, [t, k]);
  const N = Mt(c);
  if (
    (g(
      () => () => {
        m(!1);
      },
      [N]
    ),
    !N)
  )
    return null;
  const Oe = t ? o?.current : void 0;
  return C(Wt, {
    activator: Oe,
    open: t,
    onClose: T,
    placement: a,
    contentWidth: _e,
    contentHeight: f,
    children: C(ct, {
      active: I || !i,
      size: 'large',
      children: C(
        'iframe',
        {
          id: en,
          title: P('shop_pay.verification.title', 'Shop Pay Quick Checkout'),
          ref: S,
          src: N,
          height: f,
          width: _e,
          className: qt.VerificationIframe,
          allow: 'publickey-credentials-get *',
          referrerPolicy: 'origin',
        },
        N
      ),
    }),
  });
  function Re(H) {
    !isNaN(H) && H && h(H);
  }
  function Be() {
    L(!0);
  }
  function Fe(H, pe, $e) {
    j?.(H, pe, $e),
      H === Te.ShopifyPayUserNotFound &&
        (q(oe, 'false'), ne(X.IdentifiedShopPayUser, 'false')),
      q(Ne, pe === J.LimitExceeded ? y || '' : 'false'),
      window.dispatchEvent(new Event('shop_pay_user_identified_cookie_set'));
  }
}
const z = (e) => {
  if (e !== void 0) return e === !1 ? 'false' : 'true';
};
function sn({
  analyticsContext: e,
  avoidPayAltDomain: n = !1,
  avoidSdkSession: t = !1,
  disableSignUp: o = !1,
  flow: r = 'default',
  flowVersion: d = 'unspecified',
  error: c,
  ...s
}) {
  const { locale: u } = St(),
    { instanceId: a } = Ue(),
    i = b((f) => {
      if (!f.proxy) {
        if (f?.clientId === void 0) return '';
        const p = ke(f),
          l = f.avoidPayAltDomain ? '/pay/sdk-authorize' : '/pay/sdk-session';
        return `${Et}${l}?${p}`;
      }
      const h = ke(f);
      return `${_t}/services/login_with_shop/authorize?${h}`;
    }, []);
  return V(
    () =>
      i({
        analyticsContext: e,
        analyticsTraceId: a,
        avoidPayAltDomain: n,
        avoidSdkSession: t,
        disableSignUp: o,
        flow: r,
        flowVersion: d,
        locale: u,
        error: c,
        ...s,
      }),
    [e, n, t, i, o, c, r, d, a, u, s]
  );
}
function ke({
  analyticsContext: e,
  analyticsTraceId: n,
  apiKey: t,
  avoidSdkSession: o,
  checkoutRedirectUrl: r,
  checkoutToken: d,
  checkoutVersion: c,
  clientId: s,
  codeChallenge: u,
  codeChallengeMethod: a,
  consentChallenge: i,
  disableSignUp: m,
  error: f,
  flow: h,
  flowVersion: p,
  hideCopy: l,
  isCompactLayout: P = !0,
  isFullView: y,
  locale: S,
  modalCustomized: _,
  popUpFeatures: v,
  popUpName: I,
  redirectType: L,
  redirectUri: k,
  requireVerification: M,
  responseMode: E,
  responseType: w,
  scope: D,
  shopId: x,
  state: K,
  transactionParams: T,
  uxMode: j,
}) {
  const Y = m === void 0 ? void 0 : m === !1,
    F = {
      analytics_context: e,
      analytics_trace_id: n,
      avoid_sdk_session: z(o),
      api_key: t,
      checkout_redirect_url: r,
      checkout_token: d,
      checkout_version: c,
      client_id: s,
      code_challenge: u,
      code_challenge_method: a,
      compact_layout: z(P),
      consent_challenge: z(i),
      'customize-modal': z(_),
      ...(f && { error: f }),
      flow: h ? h.toString() : void 0,
      flow_version: p,
      full_view: z(y),
      hide_copy: z(l),
      locale: S,
      pop_up_features: L === 'pop_up' ? v : void 0,
      pop_up_name: L === 'pop_up' ? I : void 0,
      preact: 'true',
      redirect_type: L,
      redirect_uri: k || se.location.origin,
      require_verification: z(M),
      response_mode: E || 'web_message',
      response_type: w || 'id_token',
      scope: D || 'openid email profile',
      sign_up_enabled: z(Y),
      shop_id: x ? x.toString() : void 0,
      state: K,
      target_origin: se.location.origin,
      transaction_params: T,
      ux_mode: j,
    };
  return (
    Object.keys(F).forEach((N) => F[N] === void 0 && delete F[N]),
    new URLSearchParams(F)
  );
}
function rn(e) {
  const { element: n } = Ue();
  g(() => {
    if (n)
      return (
        Object.entries(e).forEach(([t, o]) => {
          n.addEventListener(t, o);
        }),
        () => {
          Object.entries(e).forEach(([t, o]) => {
            n?.removeEventListener(t, o);
          });
        }
      );
  }, [n, e]);
}
function an() {
  const e = kt.userAgent,
    n = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
    t = !!e.match(/WebKit/i);
  return n && t && !e.match(/CriOS/i);
}
function cn() {
  if (!an()) return;
  const e = 'shop-pay-safari-unzoom',
    n = Z.getElementById(e);
  if (n) return n.focus();
  const t = Z.createElement('input');
  (t.id = e),
    (t.style.fontSize = '16px'),
    (t.style.width = '1px'),
    (t.style.height = '1px'),
    (t.style.position = 'fixed'),
    (t.style.bottom = '-1000px'),
    (t.style.right = '-1000px'),
    (t.style.transform = 'translate(1000px, 1000px)'),
    t.setAttribute('aria-hidden', 'true'),
    Z.body.appendChild(t),
    t.focus({ preventScroll: !0 });
}
const un = 100;
function dn({ emailInputSelector: e }) {
  const [n, t] = B(),
    [o, r] = B();
  return (
    g(() => {
      function c(s) {
        this.type === 'password' ? r(s.timeStamp) : t(s.timeStamp);
      }
      if (e) {
        const s = Z.querySelector(e);
        if (s) {
          s.addEventListener('input', c);
          const u = s.form?.querySelector('input[type="password"]');
          return (
            u &&
              u instanceof HTMLInputElement &&
              u.addEventListener('input', c),
            () => {
              s.removeEventListener('input', c),
                u && u.removeEventListener('input', c);
            }
          );
        }
      }
    }, [e]),
    {
      isFilledWithPasswordManager: V(
        () => (n === void 0 || o === void 0 ? !1 : Math.abs(n - o) < un),
        [n, o]
      ),
    }
  );
}
function ln({
  autoOpen: e,
  email: n,
  emailInputSelector: t,
  hideChange: o,
  iframeRef: r,
  shouldListen: d = !0,
}) {
  const {
      autoOpened: c,
      loaded: s,
      modalVisible: u,
      sessionDetected: a,
    } = he(),
    { leaveBreadcrumb: i, notify: m } = Ve(),
    { trackUserAction: f } = fe(),
    { isFilledWithPasswordManager: h } = dn({ emailInputSelector: t }),
    p = A(null),
    [l, P] = B(),
    y = A(null),
    S = A(''),
    _ = V(() => new Set(), []),
    v = () => S.current,
    I = b(
      async (k) => {
        const M = gt(k);
        if (
          (h &&
            !_.has('PASSWORD_MANAGER_AUTOFILL_DETECTED') &&
            (_.add('PASSWORD_MANAGER_AUTOFILL_DETECTED'),
            f({ userAction: 'PASSWORD_MANAGER_AUTOFILL_DETECTED' })),
          M &&
            !_.has('EMAIL_ENTERED') &&
            (_.add('EMAIL_ENTERED'), f({ userAction: 'EMAIL_ENTERED' })),
          i('email entered', {}, 'state'),
          !r.current || u || (s && a && e && !c))
        )
          return;
        const E = M ? k : '';
        p.current && !p.current?.signal.aborted && p.current.abort(),
          (p.current = new AbortController());
        try {
          const { open: w, postMessage: D, waitForMessage: x } = r.current;
          (S.current = E),
            D({
              email: E,
              hideChange: o === void 0 ? E.length > 0 : o,
              type: 'emailsubmitted',
            }),
            i('email submitted', { email: E ? 'redacted' : '' }, 'state');
          const K = x('shop_user_matched', p.current.signal),
            T = new Promise((j, Y) => {
              const F = async () => {
                try {
                  const N = await x('error', p.current.signal);
                  N.type === 'error' && N.code === 'captcha_challenge'
                    ? j(void 0)
                    : F();
                } catch (N) {
                  Y(N);
                }
              };
              F();
            });
          await Promise.race([K, T]),
            w('event_shop_user_matched'),
            y?.current?.blur(),
            cn(),
            p.current.abort(),
            P(void 0);
        } catch (w) {
          if (w instanceof Pt && w.name === 'AbortSignalReceivedError') return;
          w instanceof Error &&
            m(new Error(`Error updating user info: ${w.name} - ${w.message}`));
        }
      },
      [e, c, o, r, h, i, s, u, m, a, f, _]
    ),
    L = vt((k) => {
      I(k);
    }, 200);
  return (
    g(() => {
      l !== void 0 && s && L(l);
    }, [L, l, s]),
    g(() => {
      if (!t) return;
      const k = Z.querySelector(t);
      if (!k) return;
      y.current = k;
      const M = () => {
        k && P(k.value);
      };
      if ((k?.value && M(), !d)) {
        k?.removeEventListener('input', M);
        return;
      }
      return (
        k?.addEventListener('input', M),
        () => {
          k?.removeEventListener('input', M);
        }
      );
    }, [t, d]),
    g(() => {
      n !== void 0 && P(n);
    }, [n]),
    { getSubmittedEmail: v, updateEmailToPost: (k) => P(k || '') }
  );
}
function hn({ iframeRef: e }) {
  const { loaded: n } = he();
  async function t(o) {
    if (!e.current) return;
    const { postMessage: r, waitForMessage: d } = e.current;
    n || (await d('loaded')), r(o);
  }
  return { postMessageAfterLoad: t };
}
function fn() {
  const { analyticsData: e, produceMonorailEvent: n } = fe();
  return {
    trackShopPayModalStateChange: b(
      ({ currentState: o, zoom: r }) => {
        const {
            analyticsTraceId: d,
            checkoutToken: c,
            checkoutVersion: s,
            shopPermanentDomain: u,
          } = e,
          a = {
            previousState: '',
            currentState: o,
            clientTimestampMs: new Date().getTime(),
            analyticsTraceId: d,
            checkoutToken: c || '',
            checkoutVersion: s || '',
            shopifyDomain: u || '',
            zoom: r,
          };
        n({
          event: { payload: a, schemaId: 'shopify_pay_modal_state_change/1.3' },
        });
      },
      [e, n]
    ),
  };
}
function pn(e) {
  const { checkoutToken: n, checkoutVersion: t, shopPermanentDomain: o } = e;
  return {
    checkoutVersion: t,
    checkoutToken: n,
    flow: 'checkout_modal',
    shopPermanentDomain: o,
  };
}
const mn = ({ anchorTo: e, email: n, queueToken: t, ...o }) => {
    const { modalVisible: r } = he(),
      d = A(null);
    ln({ email: n, iframeRef: d });
    const { postMessageAfterLoad: c } = hn({ iframeRef: d }),
      { trackUserAction: s } = fe(),
      { leaveBreadcrumb: u } = Ve(),
      a = V(
        () => ({
          open: async () => {
            r ||
              (d.current?.open('user_button_clicked'),
              s({ userAction: 'OPEN_CALLED' }),
              u('open called', {}, 'state'));
          },
        }),
        [r, s, u]
      );
    rn(a);
    const { trackShopPayModalStateChange: i } = fn(),
      m = b(() => {
        i({ currentState: 'loaded', zoom: `${se.visualViewport?.scale}` });
      }, [i]),
      f = b(
        (p) => {
          i({
            currentState: p ? 'shown' : 'hidden',
            zoom: `${se.visualViewport?.scale}`,
          });
        },
        [i]
      );
    g(() => {
      t && c({ type: 'checkoutqueuetokensubmitted', checkoutQueueToken: t });
    }, [c, t]);
    const h = sn({
      analyticsContext: 'loginWithShopCheckoutModal',
      avoidSdkSession: !0,
      clientId: '',
      disableSignUp: !0,
      proxy: !0,
      redirectType: 'iframe',
      responseType: 'code',
      ...o,
    });
    return C(It, {
      anchorTo: e,
      keepModalOpen: !0,
      onLoaded: m,
      onModalVisibleChange: f,
      proxy: !0,
      ref: d,
      src: h,
      variant: 'checkoutModal',
    });
  },
  yn = () =>
    wt(
      ({ element: e, ...n }) =>
        C(Ct, {
          element: e,
          monorailProps: pn(n),
          featureName: 'ShopCheckoutModal',
          children: C(mn, { ...n }),
        }),
      {
        methods: ['open'],
        name: 'shop-checkout-modal',
        props: {
          anchorTo: 'string',
          checkoutRedirectUrl: 'string',
          checkoutToken: 'string',
          checkoutVersion: 'string',
          email: 'string',
          queueToken: 'string',
          shopPermanentDomain: 'string',
          transactionParams: 'string',
        },
        shadow: 'open',
      }
    ),
  Q = ({ shopCheckoutModal: e, eventName: n, eventListener: t }) => {
    g(
      () => (e?.addEventListener(n, t), () => e?.removeEventListener(n, t)),
      [t, n, e]
    );
  };
function Sn({
  email: e,
  open: n,
  popoverActivator: t,
  showPopover: o,
  showToggle: r,
  onIframeLoaded: d,
}) {
  const c = t?.current,
    s = A(null),
    [u, a] = B(!1),
    i = A(!1),
    { redirect_url: m, transaction_params: f } = ge(),
    { myshopifyDomain: h } = Pe(),
    p = ue(),
    [l] = Ie(),
    { guestDismissedModalKey: P } = Me(),
    { checkoutSessionIdentifier: y } = te(),
    S = Ae().current.token,
    [, _] = ae(ie);
  g(() => {
    customElements.get('shop-checkout-modal') || yn();
  }, []);
  const v = be(),
    I = Le(X.ShopPayVerification, { scope: De }),
    L = `${y}-${e.replace(/[^a-zA-Z0-9]/g, '')}`,
    k = xe(),
    M = A(k);
  g(() => {
    if (M.current) {
      (M.current = !1), a(!1);
      return;
    }
    const T = sessionStorage.getItem(P),
      j = p && ce(L),
      Y = l.status === 'connected';
    if (T || j || Y) {
      a(!1);
      return;
    }
    if (v.read(I).value === W.Verified) {
      v.write(I, void 0), a(!1);
      return;
    }
    a(!0);
  }, [e]);
  const E = b(() => {
    le(), v.write(I, W.Verified), _('none');
  }, [_, I, v]);
  Q({ shopCheckoutModal: s.current, eventName: 'completed', eventListener: E });
  const w = b(() => {
    if (!y) throw new de('Checkout token is undefined');
    q(oe, escape(y)),
      ne(X.IdentifiedShopPayUser, escape(y)),
      window.dispatchEvent(new Event('shop_pay_user_identified_cookie_set')),
      v.write(I, W.Pending),
      o?.(!0, e),
      r?.(!1);
  }, [y, e, I, o, r, v]);
  Q({
    shopCheckoutModal: s.current,
    eventName: 'modalopened',
    eventListener: w,
  });
  const D = b(() => {
    v.write(I, W.Dismissed), p && q(L, 'true'), o?.(!1), r?.(i.current);
  }, [p, L, I, o, r, v]);
  Q({
    shopCheckoutModal: s.current,
    eventName: 'modalclosed',
    eventListener: D,
  });
  const x = b(() => {
    i.current = !0;
  }, []);
  Q({
    shopCheckoutModal: s.current,
    eventName: 'shopusermatched',
    eventListener: x,
  });
  const K = b((T) => {
    (i.current = !1),
      q(oe, 'false'),
      ne(X.IdentifiedShopPayUser, 'false'),
      window.dispatchEvent(new Event('shop_pay_user_identified_cookie_set'));
  }, []);
  return (
    Q({
      shopCheckoutModal: s.current,
      eventName: 'shopusernotmatched',
      eventListener: K,
    }),
    Q({ shopCheckoutModal: s.current, eventName: 'loaded', eventListener: d }),
    g(() => {
      const T = s.current;
      _(n ? 'shopPayVerification' : 'none'), c && n && (T?.open(), c.blur());
    }, [c, e, n, _]),
    C('shop-checkout-modal', {
      'anchor-to': c?.id ? `#${c.id}` : '',
      'checkout-redirect-url': m,
      'checkout-token': y,
      'checkout-version': 'checkout_one',
      email: n || u ? e : '',
      'queue-token': S || '',
      ref: s,
      'shop-permanent-domain': h,
      'transaction-params': f,
    })
  );
}
const En = (e) => C(Ce, { children: C(Sn, { ...e }) }),
  xn = ({
    email: e,
    onSetEmail: n,
    open: t,
    popoverActivator: o,
    showPopover: r,
    showToggle: d,
    urlOrigin: c = R.C1Modal,
    updatedOrigin: s = R.C1Modal,
  }) => {
    const u = dt(),
      a = lt(),
      i = V(() => ye(), []),
      m = V(() => ye(), []),
      f = A(!0),
      h = V(() => {
        if (u !== void 0) return { isC1: !0, shopJsVerification: !u };
      }, [u]);
    g(() => {
      ee(e) && (i.mark('start'), (f.current = !0));
    }, [i, e]),
      g(() => {
        if (t && f.current && i.marks.start && h) {
          i.mark('open'), (f.current = !1);
          const l = Math.round(i.marks.open - i.marks.start);
          a.histogram({
            name: 'shop_pay_verification_time_to_interactive',
            value: l,
            attributes: h,
          });
          const P = Math.round(
            i.marks.open - Math.max(i.marks.start, i.marks.loaded || 0)
          );
          a.histogram({
            name: 'shop_pay_verification_time_to_interactive_after_load',
            value: P,
            attributes: h,
          });
        }
      }, [t, a, i, h]),
      g(() => {
        m.mark('start');
      }, [m]);
    const p = b(() => {
      if (m.marks.start) {
        m.mark('loaded'), i.mark('loaded');
        const l = Math.round(m.marks.loaded - m.marks.start);
        a.histogram({
          name: 'shop_pay_verification_iframe_ready_duration',
          value: l,
          attributes: h,
        });
      }
    }, [m, i, a, h]);
    return u
      ? C(on, {
          popoverActivator: o,
          email: e,
          onSetEmail: n,
          open: t,
          showPopover: r,
          showToggle: d,
          urlOrigin: c,
          updatedOrigin: s,
          onIframeLoaded: p,
        })
      : C(En, {
          popoverActivator: o,
          email: e,
          open: t,
          showPopover: r,
          showToggle: d,
          onIframeLoaded: p,
        });
  };
export { xn as default };
