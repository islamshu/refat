import {
  aO as m,
  at as o,
  q as l,
  kR as c,
  nn as p,
  bR as y,
  bk as v,
  d as f,
  br as g,
  y as b,
  a as w,
  bt as E,
  bo as h,
  j as M,
} from './app.js';
function I() {
  const e = m(),
    { directPaymentErrors: t, paymentLines: n } = o();
  return l(
    (i, a) => {
      if (Object.values(i).every((r) => r == null) && !a) return;
      const s = n.peek().find(({ method: r }) => r.type === 'direct');
      if (s) {
        const d = s.method.paymentMethodIdentifier;
        e.write(t.paymentMethodIdentifier, d);
      }
      e.write(
        t.number,
        i.number ? { message: i.number, origin: 'client' } : void 0
      ),
        e.write(
          t.name,
          i.name ? { message: i.name, origin: 'client' } : void 0
        ),
        e.write(
          t.expiry,
          i.expiry ? { message: i.expiry, origin: 'client' } : void 0
        ),
        e.write(
          t.issueDate,
          i.issue_date ? { message: i.issue_date, origin: 'client' } : void 0
        ),
        e.write(
          t.issueNumber,
          i.issue_number
            ? { message: i.issue_number, origin: 'client' }
            : void 0
        ),
        e.write(
          t.verificationValue,
          i.verification_value
            ? { message: i.verification_value, origin: 'client' }
            : void 0
        ),
        e.write(t.general, void 0);
    },
    [t, e, n]
  );
}
function N() {
  const e = m(),
    { directPaymentErrors: t } = o();
  return l(() => {
    e.write(t.paymentMethodIdentifier, void 0),
      e.write(t.number, void 0),
      e.write(t.name, void 0),
      e.write(t.expiry, void 0),
      e.write(t.issueDate, void 0),
      e.write(t.issueNumber, void 0),
      e.write(t.verificationValue, void 0),
      e.write(t.general, void 0);
  }, [t, e]);
}
function O() {
  const { directPaymentErrors: e } = o();
  return c((t) =>
    Object.keys(e)
      .filter((n) => n !== 'paymentMethodIdentifier')
      .some((n) => t(e[n]) != null)
  );
}
function k() {
  const { directPaymentErrors: e } = o();
  return c((t) =>
    Object.keys(e)
      .filter((n) => n !== 'paymentMethodIdentifier')
      .some((n) => t(e[n])?.origin === 'server')
  );
}
function C() {
  const { directPaymentErrors: e } = o();
  return c((t) =>
    Object.keys(e).reduce((n, i) => ({ ...n, [i]: t(e[i]) }), {})
  );
}
const _ = p.get('base') ?? 0;
function D({ children: e, open: t, ...n }) {
  const a = y(t, 'slow') === 'entered',
    u = v(),
    [, s] = f(g);
  return (
    b(() => {
      const r = (d) => {
        s(d === 'modal_open' ? 'redesign' : 'none'),
          h.notify({ checkout_ui: { type: d, payload: { duration: _ } } });
      };
      if (!(!a || !u))
        return (
          r('modal_open'),
          () => {
            r('modal_close');
          }
        );
    }, [a, u, s]),
    w(E, { size: 'large', open: t, padding: !0, ...n, children: e })
  );
}
const P = [3890849, 3850711, 5198245];
function S() {
  const e = M('api-client-id');
  return e ? P.includes(e) : !1;
}
export { D as O, O as a, I as b, k as c, N as d, C as e, S as u };
