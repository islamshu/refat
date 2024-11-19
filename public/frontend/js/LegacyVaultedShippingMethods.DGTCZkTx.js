import {
  c as E,
  u as y,
  C as T,
  b as P,
  d as f,
  q as v,
  h as I,
  e as _,
  f as M,
  g as b,
  i as C,
  y as m,
  p as L,
  a as o,
  I as S,
  P as k,
  S as A,
} from './app.js';
import { R as x } from './Rollup.D_DVU1MA.js';
import { u as D } from './SubscriptionPriceBreakdown.GhzR2flD.js';
const N = E(null);
function B() {
  const e = y(T),
    i = P(),
    [t] = f(N),
    s = v((a) => t?.setShopPay(a), [t]);
  return { setEditorShopPay: i && e && t ? s : void 0 };
}
function R() {
  const [e, i] = I(void 0),
    t = _(),
    { promiseText: s, loading: a } = M(),
    r = D(),
    p = b(),
    { loading: d, value: n } = C();
  m(() => {
    i(Date.now());
  }, []),
    m(() => {
      if (!(d || !n) && e) {
        const l = Date.now(),
          c = l - e,
          u = n[0]?.promiseProviderApiClientId;
        if (u) {
          const h = L(u);
          r(c, l, Number(h)), p(c, Number(h)), i(void 0);
        }
      }
    }, [d, n, e, r, p]);
  const g = o(S, { children: [k, o(A, {})] });
  return o(S, {
    children: o(x, {
      id: 'buyWithPrimeShippingMethods',
      label: t('shipping.shipping_method_title', 'Shipping method'),
      summary: a ? g : s,
    }),
  });
}
const V = Object.freeze(
  Object.defineProperty({ __proto__: null, default: R }, Symbol.toStringTag, {
    value: 'Module',
  })
);
export { V as L, N as e, B as u };
