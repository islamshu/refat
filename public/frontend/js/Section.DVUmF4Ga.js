import {
  A as T,
  y as _,
  e as E,
  cq as B,
  oT as A,
  mp as L,
  E as c,
  h as R,
  eD as x,
  bO as C,
  q as H,
  oU as V,
  a as e,
  az as P,
  aG as k,
  oV as w,
  a7 as u,
  V as h,
  bS as U,
  aQ as I,
  aa as q,
  a9 as Q,
  bT as F,
  oW as N,
  cs as f,
  ay as G,
  ab as d,
  kE as J,
  aI as $,
  kF as j,
  D as K,
} from './app.js';
const X = 6e4;
function ie({ enabled: n, onTimeout: i, timeout: r = X }) {
  const s = T(null),
    a = T(i);
  (a.current = i),
    _(() => {
      if (n)
        return (
          (s.current = setTimeout(() => a.current(r), r)),
          () => {
            s.current && clearTimeout(s.current);
          }
        );
    }, [n, r]);
}
const Y = 'WPQk2',
  Z = 'qReyn',
  D = { IconText: Y, Button: Z };
function re() {
  const n = E(),
    { currentDetour: i } = B(),
    r = i?.type === 'shopPayLogin',
    s = A('bottom'),
    a = L(s),
    o = c
      .default('block')
      .when({ viewportInlineSize: { min: 'medium' } }, 'none'),
    l = r || a,
    [t, m] = R(l),
    S = x(),
    b = C({ base: !0, medium: !1 }),
    v = n('order_summary.title', 'Order summary'),
    z = H(() => m((M) => !M), []),
    { merchandiseLinesWithCount: O } = V();
  if (!b && S) return null;
  if (O <= 1)
    return e(h, {
      display: o,
      children: [
        e(P, {
          spacing: 'large200',
          children: [
            e(k, { level: 1, children: v }),
            e(w, { skipWrappingSection: !0, hideAccessibilityTitle: !0 }),
          ],
        }),
        e(u, { spacing: 'large200' }),
      ],
    });
  const W = t
    ? n('order_summary.collapse_order_summary_short', 'Hide')
    : n('order_summary.expand_order_summary_short', 'Show');
  return e(h, {
    className: D.Button,
    display: o,
    children: [
      e(U, {
        padding: ['none', 'none', 'large200', 'none'],
        display: 'block',
        expanded: t,
        onPress: z,
        children: e(I, {
          columns: ['fill', 'auto'],
          spacing: 'base',
          blockAlignment: 'center',
          inlineAlignment: 'start',
          children: [
            e(k, { level: 1, children: v }),
            e('div', {
              className: D.IconText,
              children: e(I, {
                columns: ['fill', 'auto'],
                blockAlignment: 'center',
                spacing: 'small200',
                children: [
                  e(q, { children: W }),
                  e(Q, {
                    size: 'extraSmall',
                    source: t ? 'chevronUp' : 'chevronDown',
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e(F, {
        open: t,
        id: 'mobileOrderSummary',
        children: [
          e(u, { spacing: 'small100' }),
          e(N, {}),
          e(u, { spacing: 'large200' }),
        ],
      }),
      e(w, {
        hideMerchandiseLines: !0,
        skipWrappingSection: !0,
        hideAccessibilityTitle: !0,
      }),
      e(u, { spacing: 'large200' }),
    ],
  });
}
function y({
  children: n,
  hideDivider: i,
  padding: r,
  dividerDisplay: s,
  ...a
}) {
  const {
      shell: { backgroundImage: o, colorScheme: l },
      main: { section: t, backgroundImage: m, colorScheme: S },
    } = f(),
    b = m || o ? void 0 : S ?? l;
  return e(d, {
    children: [
      e(G, {
        padding:
          r ??
          c
            .default(['base', 'large200'])
            .when({ viewportInlineSize: { min: 'extraSmall' } }, 'none'),
        borderRadius: t?.cornerRadius,
        colorScheme: t?.colorScheme ?? b,
        ...a,
        children: n,
      }),
      e(ee, { hideDivider: i, dividerDisplay: s }),
    ],
  });
}
function se({ condition: n, children: i, ...r }) {
  return n ? e(y, { ...r, children: i }) : e(d, { children: i });
}
function te({ min: n, max: i, children: r, ...s }) {
  const a = x(),
    o = p(n ? { min: n } : { max: i }),
    l = p(n ? { max: n } : { min: i }),
    t = p(n ? { min: n } : { max: i }),
    m = C(i ? { base: !0, [i]: !1 } : { base: !1, [n]: !0 });
  return a
    ? m
      ? e(y, { ...s, children: r })
      : e(h, { children: r })
    : e(d, {
        children: [
          e(y, { ...s, display: o, dividerDisplay: t, children: r }),
          e(h, { display: l, children: r }),
        ],
      });
}
function ae({ condition: n, ...i }) {
  const { hideDivider: r, children: s } = i;
  return n ? e(y, { ...i }) : e(d, { children: [s, !r && e(g, {})] });
}
function g({ spacing: n, showDivider: i, style: r, width: s }) {
  const {
      main: { section: a },
    } = f(),
    l = J(a) ? 'base' : 'small400',
    t = c
      .default(n ?? l)
      .when({ viewportInlineSize: { min: 'extraSmall' } }, n ?? 'large400');
  return e(d, {
    children: [
      e(u, { spacing: t }),
      i &&
        e(d, {
          children: [
            e($, { borderStyle: r, size: j(s) }),
            e(u, { spacing: t }),
          ],
        }),
    ],
  });
}
function p(n) {
  if (n.min)
    switch (n.min) {
      case 'base':
        return c.default('none');
      default:
        return c
          .default('none')
          .when({ viewportInlineSize: { min: n.min } }, 'block');
    }
  if (n.max)
    switch (n.max) {
      case 'base':
        return c.default('block');
      default:
        return c
          .default('block')
          .when({ viewportInlineSize: { min: n.max } }, 'none');
    }
  return c.default('none');
}
function ee({ hideDivider: n, dividerDisplay: i }) {
  const {
      divider: { borderStyle: r, borderWidth: s },
    } = K(),
    {
      main: {
        spacing: a,
        divider: { visibility: o, borderStyle: l = r, borderWidth: t = s } = {},
      },
    } = f();
  return n
    ? null
    : i
    ? e(h, {
        display: i,
        children: e(g, {
          spacing: a,
          showDivider: o === 'visible',
          style: l,
          width: t,
        }),
      })
    : e(d, {
        children: e(g, {
          spacing: a,
          showDivider: o === 'visible',
          style: l,
          width: t,
        }),
      });
}
export { se as M, y as S, ae as a, re as b, te as c, ie as u };
