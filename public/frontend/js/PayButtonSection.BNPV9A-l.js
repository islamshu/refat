const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'ShopPayButtonContainer.BMgMd7oT.js',
      'app.YFeVIJ1k.js',
      'assets/app.whj6cDzT.css',
      'context.CKWj44aH.js',
      'useIsOriginatedFromShop.D_p8RxRO.js',
      'constants.Bw8mBUAo.js',
      'useUnauthenticatedErrorModal.Dgap6hbC.js',
      'Section.DVUmF4Ga.js',
      'assets/Section.sQehCocD.css',
      'ShopPayLogo.qW-3ANH5.js',
      'assets/ShopPayLogo.D_HPU8Dh.css',
      'Rollup.D_DVU1MA.js',
      'assets/Rollup.o9Mx-fKL.css',
      'useShowShopPayOptin.CsUau2lX.js',
      'RageClickCapture.wW7TAQ18.js',
      'MarketsProDisclaimer.BPp3T8HM.js',
      'assets/RageClickCapture.DnkQ4tsk.css',
      'assets/ShopPayButtonContainer.B0ZxHYBW.css',
    ])
) => i.map((i) => d[i]);
import {
  e as b,
  b1 as X,
  dw as ee,
  c0 as k,
  at as te,
  aW as oe,
  dW as ne,
  bf as se,
  dO as R,
  a as o,
  a8 as w,
  d$ as re,
  ab as m,
  aa as f,
  d_ as ae,
  ei as ie,
  ej as ce,
  ek as ue,
  c as le,
  d as v,
  el as O,
  K as T,
  em as I,
  en as de,
  eo as pe,
  ep as he,
  eq as ye,
  er as Pe,
  y as g,
  es as me,
  et as V,
  by as W,
  eu as ge,
  ev as fe,
  ew as be,
  ex as _e,
  D as ve,
  bH as Se,
  bI as ke,
  _ as Ce,
  dz as Be,
  aG as Ee,
  ey as we,
  q as F,
  ez as Ae,
  bJ as Re,
  eA as Te,
  aB as z,
  eB as q,
  V as Ie,
  eC as Me,
  eD as Ne,
  J as xe,
  ah as De,
  af as Le,
  bc as Oe,
  ag as Ve,
  N as We,
  eE as Fe,
  eF as ze,
  eG as qe,
  n as He,
  eH as Ue,
  eI as Ke,
  eJ as Ye,
  eK as Je,
  aM as je,
  aN as Ge,
  eL as Qe,
  Y as Ze,
  a3 as $e,
  a4 as H,
  a7 as U,
  cc as Xe,
  eM as et,
  ce as tt,
  az as ot,
  bP as D,
  dm as K,
  c1 as nt,
  eN as st,
  cp as rt,
  h as at,
  an as it,
  eO as ct,
  ay as ut,
} from './app.js';
import { R as A } from './Rollup.D_DVU1MA.js';
import { u as lt, I as dt } from './useShowShopPayOptin.CsUau2lX.js';
import { u as pt, P as ht, R as yt } from './RageClickCapture.wW7TAQ18.js';
function Ut() {
  const e = b(),
    t = X(),
    { shippingRequired: n } = ee(),
    s = k(te().shippingAddress),
    { value: r } = oe(),
    i = ne(),
    a = i[0],
    { purchasingCompany: c } = se(),
    p = c?.location.name,
    l = R({ businessCustomer: !!p, default: !1 });
  if (!n && (!i.length || !a?.lines?.length)) return null;
  if (a.pickupAddress)
    return o(Pt, {
      address: a.pickupAddress ?? void 0,
      locationName: a.pickupAddressName,
    });
  const d = r?.status === 'unavailable' ? s : a.deliveryAddress,
    h = o(m, {
      children: [
        l ? o(w, { children: p }) : null,
        d
          ? o(re, { address: d })
          : o(w, {
              appearance: 'subdued',
              children: e('review.blocks.no_address', '(No address)'),
            }),
      ],
    }),
    P = a.lines.length
      ? a.lines
          .filter(({ deliveryChange: u }) => u !== 'REMOVED')
          .map(({ title: u, lineAmount: y }) => {
            const C =
                y.amount === 0
                  ? e('shipping.free_rate_label', 'Free')
                  : t(y.amount, { currency: y.currencyCode, form: 'short' }),
              B = y.amount === 0 ? 'uppercase' : void 0;
            return o(
              w,
              {
                children: [
                  o(f, { children: u }),
                  o(m, {
                    children: [
                      ' ',
                      '·',
                      ' ',
                      o(f, { emphasis: 'bold', letterCase: B, children: C }),
                    ],
                  }),
                ],
              },
              u
            );
          })
      : null;
  return o(m, {
    children: [
      o(A, {
        id: 'address',
        label: e('review.blocks.shipping_address_title', 'Ship to'),
        summary: h,
      }),
      P
        ? o(A, {
            id: 'shipping',
            label: e('review.blocks.shipping_method_title', 'Shipping method'),
            summary: P,
          })
        : null,
    ],
  });
}
function Pt({ address: e, locationName: t }) {
  const n = b(),
    s = ae(e, { hiddenFields: ['postalCode', 'countryCode', 'phone'] });
  return !t || !s
    ? null
    : o(A, {
        id: 'delivery',
        label: n(
          'review.blocks.pick_up_in_store_shipping_method_html',
          { location_name: t },
          'Pickup in store · %{location_name}'
        ),
        summary: o(f, { children: s }),
      });
}
class mt {
  listeners = new Set();
  listen(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  emit(t) {
    this.listeners.forEach((n) => n(t));
  }
}
const L = { billingAddress: 0, shippingAddress: 1, paymentMethod: 2 };
class Kt {
  interceptors = new Set();
  resultEmitter = new mt();
  async runInterceptors() {
    const t = [...this.interceptors];
    t.sort(({ name: s }, { name: r }) => L[s] - L[r]);
    const n = [];
    for (const { interceptor: s } of t) n.push(await s());
    return this.resultEmitter.emit(bt(n)), n;
  }
  intercept(t, n) {
    const s = { interceptor: n, name: t };
    return (
      this.interceptors.add(s),
      () => {
        this.interceptors.delete(s);
      }
    );
  }
  listenResult(t) {
    return this.resultEmitter.listen(t);
  }
}
const gt = ie(void 0);
function ft() {
  const e = ce(gt);
  if (e == null) throw new ue('Missing ProgressInterceptorContext');
  return e;
}
function bt(e) {
  return e.every((t) => t.success);
}
function Yt(e) {
  return e.filter((n) => !n.success).map((n) => n.location);
}
const _t = le(void 0);
function Jt() {
  const [e, t] = v(_t);
  return {
    returnTo(n) {
      return () => {
        t(n);
      };
    },
    currentReturnSection: e,
    reset() {
      t(void 0);
    },
  };
}
function Y() {
  const e = O();
  return R({ payPal: e, googlePay: e, buyWithPrime: e, amazonPay: e }) ?? !1;
}
function jt() {
  const e = R({
      payPal: !0,
      googlePay: !0,
      buyWithPrime: !0,
      amazonPay: !0,
      default: !1,
    }),
    t = O(),
    { nextPage: n } = T();
  return e || (t && n.id === 'thankYou');
}
function vt(e, t) {
  const s = I()?.type === 'PARTNER',
    { nextPage: r } = T(),
    i = r?.id,
    a = Y(),
    [, c] = v(de),
    [, p] = v(pe),
    [, l] = v(he),
    [, d] = v(ye),
    h = k(Pe);
  g(() => {
    if (s)
      return (
        l(!0),
        () => {
          l(!1);
        }
      );
  }, [l, s]),
    g(() => {
      s && p(() => t);
    }, [s, t, p]);
  const P = h !== me.None;
  g(() => {
    s && c(() => P || e);
  }, [s, P, e, c]),
    g(() => {
      if (!s) return;
      let u;
      i === 'review' && !a ? (u = 'review') : (u = 'pay'), d(() => u);
    }, [s, i, a, d]);
}
function J(e) {
  const t = document.getElementById(e);
  t && t.dispatchEvent(new Event('submit', { bubbles: !0, cancelable: !0 }));
}
function St({ disabled: e, loading: t, onPress: n, isSubmit: s }) {
  const r = V(),
    i = W(),
    a = s && r?.id;
  return (
    vt(t, e),
    ge((c) => {
      c === _e.Continue && (a && J(a), n?.());
    }),
    i ? o(kt, {}) : null
  );
}
function kt() {
  const e = ft(),
    {
      schema: { postMessageHandler: t },
    } = fe(),
    n = be();
  return (
    g(
      () =>
        e.listenResult((s) => {
          s || t({ type: 'journeyProgressionError', flowType: n });
        }),
      [e, t, n]
    ),
    null
  );
}
function Ct({ children: e, size: t = 'large', ignoreBranding: n = !1 }) {
  const {
    primaryButton: { typography: { size: s } = {} },
  } = ve();
  return (t && !s) || n
    ? o(f, { size: t, children: e })
    : o(m, { children: e });
}
const Bt = Se({
  load: () =>
    ke(() =>
      Ce(
        () => import('./ShopPayButtonContainer.BMgMd7oT.js'),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        ])
      )
    ),
});
function Gt() {
  const e = b(),
    { value: t } = Be();
  return o(Ee, {
    level: 1,
    autoFocus: !0,
    children:
      t?.amount === 0
        ? e(
            'review.blocks.review_title_free_order',
            'Review and complete your order'
          )
        : e('review.review_title', 'Review and pay'),
  });
}
function Et() {
  const e = I(),
    { client: t } = we(),
    n = e?.type === 'MERCHANT';
  return F(
    (s) => {
      t && n && Ae(t, s);
    },
    [t, n]
  );
}
const wt = 'zdTmQ',
  At = { Wrapper: wt },
  Rt = Re(function ({ label: t, loading: n, disabled: s, formId: r }, i) {
    const a = Te(),
      c = Et();
    return o(Tt, {
      isFullyVaulted: a,
      children: o(z, {
        onPress: () => {
          r && a && J(r),
            c({
              handlerId: '__internalValidateSubmit',
              body: { trigger: 'pay-button' },
            });
        },
        accessibilityRole: 'submit',
        inlineSize: 'fill',
        loading: n,
        disabled: s,
        id: q,
        ref: i,
        children: o(f, { size: 'large', children: t }),
      }),
    });
  }),
  Tt = (e) => {
    const t = (n) => {
      n.preventDefault();
    };
    return e.isFullyVaulted
      ? o(Me, {
          children: o('div', {
            onTouchMove: t,
            className: At.Wrapper,
            id: 'checkout-sdk-pay-button-container',
            children: o(Ie, {
              padding: ['large200', 'large200', 'large400', 'large200'],
              children: e.children,
            }),
          }),
        })
      : e.children;
  };
function It() {
  const e = b(),
    { walletPaymentMethods: t } = Ge(),
    n = Qe(),
    s = Ze(),
    i =
      (t.length === 0 && n
        ? e(
            'payment.no_working_method_error',
            'This store can’t accept payments right now. Refresh this page or come back later.'
          )
        : null) || s;
  return i
    ? o(m, {
        children: [
          o($e, { errorType: H.PaymentError, status: 'critical', children: i }),
          o(U, { spacing: 'large200' }),
        ],
      })
    : null;
}
function Mt() {
  const e = Ne(),
    t = V(),
    { progressing: n, blocked: s } = xe(),
    { nextPage: r } = T(),
    i = De(),
    a = pt(),
    [c] = Le(),
    [p] = Oe(),
    [l] = Ve({ isPayWithPayPalButton: !0 }),
    d = b(),
    h = We('simulated'),
    { loading: P } = Fe(),
    u = k(P),
    y = k(ze),
    [{ loading: C }] = qe(),
    B = He().searchParams.has(Ue),
    { displayedPaymentMethods: M } = Ke(),
    j = M != null && M.length !== 0,
    G = Ye(),
    E = n || C || B,
    S =
      !e ||
      (!j && G) ||
      s ||
      (h && r.id !== 'review') ||
      (i &&
        (c.status === 'error' ||
          p.status === 'error' ||
          l.status === 'error')) ||
      y,
    N = Y() ? d('general.pay_now_button_label', 'Pay now') : r.label,
    Q = I()?.payActionType === 'NATIVE',
    Z = Je(),
    x = je();
  let _;
  const $ = u.size > 0;
  switch (!0) {
    case a:
      _ = o(ht, {});
      break;
    case Z:
      _ = o(Rt, {
        formId: t?.id,
        loading: E,
        disabled: S,
        label: N,
        ref: x('pay_button'),
      });
      break;
    case Q:
      _ = o(St, { loading: E || $, disabled: S, isSubmit: !0 });
      break;
    default:
      _ = o(z, {
        accessibilityRole: 'submit',
        inlineSize: 'fill',
        loading: E,
        disabled: S,
        ref: x('pay_button'),
        id: q,
        children: o(Ct, { children: N }),
      });
      break;
  }
  return o(m, { children: [S && o(It, {}), _] });
}
const Nt = (e) => o(ut, { children: e });
function Qt() {
  const e = b(),
    t = W(),
    n = Xe('Checkout::Actions::RenderBefore'),
    s = lt(),
    { isOptedIn: r } = et();
  return o(K, {
    target: 'cart.paymentLines[0]',
    children: o(dt, {
      impressionType: 'pay_now_button',
      impressionFeatures: [],
      children: [
        n.length !== 0 &&
          o(m, {
            children: [
              o(tt, { extensions: n, render: Nt }),
              o(U, { spacing: 'base' }),
            ],
          }),
        o(ot, {
          children: [
            o(Dt, {}),
            o(yt, { children: t ? o(Bt, {}) : o(Mt, {}) }),
            s &&
              r &&
              o(f, {
                appearance: 'subdued',
                children: e(
                  'shop_pay.checkout.sign_up_footer.button_footer',
                  {
                    privacy_href: o(D, {
                      external: !0,
                      to: 'https://www.shopify.com/legal/privacy/app-users',
                      children: e(
                        'shop_pay.checkout.sign_up_footer.privacy_policy',
                        'Privacy Policy'
                      ),
                    }),
                    terms_href: o(D, {
                      external: !0,
                      to: 'https://shop.app/terms-of-service',
                      children: e(
                        'shop_pay.checkout.sign_up_footer.terms_of_service',
                        'Terms of Service'
                      ),
                    }),
                  },
                  'Your info will be saved to a Shop account. By continuing, you agree to Shop’s %{terms_href} and acknowledge the %{privacy_href}.'
                ),
              }),
          ],
        }),
      ],
    }),
  });
}
const xt = new Map([
  [
    'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
    { status: 'warning', priority: -1, negotiationStage: 'completion' },
  ],
]);
function Dt() {
  const e = nt(),
    t = Lt(e.value, xt);
  return o(K, {
    target: 'cart.paymentLines[0]',
    children: t.map((n) =>
      o(st, { notice: n, errorType: H.PaymentError }, n.code)
    ),
  });
}
function Lt(e, t) {
  const n = rt(),
    [s, r] = at([]),
    i = F(
      ({ violations: c, negotiationStage: p }) => {
        const l = [];
        for (const d of c)
          if (!Ot(d) && t.has(d.code)) {
            const h = t.get(d.code);
            p &&
              p === h?.negotiationStage &&
              l.push({ ...d, status: h?.status, priority: h?.priority });
          }
        if (l.length >= 1) {
          const h = l
            .map((u) => u.priority ?? 0)
            .reduce((u, y) => (u > y ? u : y));
          return l.filter((u) => (u.priority ?? 0) >= h);
        }
        return l;
      },
      [t]
    );
  return (
    g(() => {
      e && r(i({ violations: e }));
    }, [i]),
    it((c) => {
      c.type === 'complete' ||
        c.type === 'invalid' ||
        c.type === 'failed' ||
        !n.current ||
        r(
          i({ violations: c.violations, negotiationStage: c.negotiationStage })
        );
    }),
    s.filter(ct('localizedMessage'))
  );
}
function Ot(e) {
  return (
    e.__typename !== 'ConfirmChangeViolation' &&
    e.__typename !== 'UnprocessableTermViolation' &&
    e.__typename !== 'RemoveTermViolation'
  );
}
export {
  St as C,
  Ut as O,
  Qt as P,
  Gt as R,
  Kt as S,
  Jt as a,
  gt as b,
  Ct as c,
  Y as d,
  jt as e,
  Yt as g,
  bt as i,
  ft as u,
};
