import {
  af as m,
  ag as P,
  ah as h,
  ai as c,
  a as s,
  ab as f,
  aj as B,
  N as g,
  ae as x,
  V as y,
  ak as E,
  al as S,
  am as b,
  o as k,
  A as l,
  J as R,
  an as W,
} from './app.js';
import { a as L } from './MarketsProDisclaimer.BPp3T8HM.js';
function N() {
  const [n] = m(),
    [t] = P({ isPayWithPayPalButton: !0 }),
    a = h(),
    e = c();
  return n.status === 'error' || t.status === 'error' ? !1 : a || e;
}
const v = 'RTmkG',
  w = 'U4CmB',
  D = 'E4OHT',
  O = 'hLtvr',
  i = {
    PayPalExpressButtonContainer: v,
    PayPalExpressButtonContainerRedesign: w,
    PayPalExpressButtonContainerWhenLoading: D,
    PayPalExpressButtonContainerWhenSpinnerDisplayed: O,
  };
function T({ isLoading: n, isSpinnerDisplayed: t, children: a }) {
  const e = B(),
    r = g('simulated');
  return s(y, {
    className: x(i.PayPalExpressButtonContainer, {
      [i.PayPalExpressButtonContainerRedesign]: e,
      [i.PayPalExpressButtonContainerWhenLoading]: n,
      [i.PayPalExpressButtonContainerWhenSpinnerDisplayed]: t,
    }),
    inert: r || void 0,
    children: a,
  });
}
function V() {
  const n = c(),
    [t] = P({ isPayWithPayPalButton: !0 }),
    a = s(y, { inlineAlignment: 'center', children: s(E, { size: 'large' }) }),
    e = t.status !== 'rendered' && t.status !== 'error';
  return s(f, {
    children: [
      s(T, {
        isLoading: n,
        isSpinnerDisplayed: e,
        children: s(L, {
          buttonLabel: 'pay',
          isPayWithPayPalFlow: !0,
          progressToNextPage: !0,
          buttonColor: 'blue',
          isDisabled: n,
        }),
      }),
      e ? a : null,
    ],
  });
}
function J({ children: n }) {
  const t = S(),
    a = b(),
    e = k(),
    r = l(),
    u = l(),
    { blocked: p } = R();
  W((o) => {
    (r.current = void 0),
      (u.current = void 0),
      'violations' in o && (r.current = o.violations.map((C) => C.code)),
      'reasons' in o && (u.current = o.reasons);
  });
  function d(o) {
    o.detail > 2 &&
      t.counter({
        name: 'pay_now_rage_click',
        value: 1,
        attributes: {
          customerProfile: e?.__typename,
          numberOfErrors: a?.numberOfErrors() ?? 'unknown',
          lastInterceptionReasons: u.current,
          lastViolations: r.current,
          blocked: p,
        },
      });
  }
  return s('div', { onClickCapture: d, children: n });
}
export { V as P, J as R, N as u };
