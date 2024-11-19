import {
  bM as G,
  a as n,
  bN as P,
  bO as V,
  e as M,
  D as B,
  ae as I,
  aQ as A,
  bP as Q,
  V as p,
  aa as v,
  bQ as X,
  bR as j,
  h as _,
  A as F,
  q as J,
  w,
  bS as K,
  E as Y,
  a9 as Z,
  az as nn,
  bT as en,
  a$ as ln,
  ab as $,
} from './app.js';
const tn = '_7Vwjr',
  an = 'tq3Uk',
  sn = 'oNgGT',
  on = 'n5gP0',
  cn = 'wSTmt',
  rn = '_7tqW8',
  dn = 'gxa2t',
  m = {
    Summary: tn,
    SummaryTextContainer: an,
    CollapsibleContainer: sn,
    Button: on,
    Label: cn,
    Logo: rn,
    Icon: dn,
  },
  C = ['base', 'none'],
  k = ['base', 'none', 'large200', 'none'];
function fn({
  id: e,
  label: l,
  logo: c,
  summary: i,
  error: r,
  to: h,
  action: d,
  ...t
}) {
  const o = 'children' in t && G.count(t.children) > 0;
  return 'onToggle' in t && o && t.onToggle !== void 0 && !h && !d
    ? n(P.Provider, {
        value: !0,
        children: n(gn, {
          id: e,
          label: l,
          logo: c,
          summary: i,
          error: r,
          disabled: t.disabled,
          renderChildrenWhenCollapsed: t.renderChildrenWhenCollapsed,
          ...t,
        }),
      })
    : n(P.Provider, {
        value: !0,
        children: n(mn, {
          id: e,
          label: l,
          logo: c,
          summary: i,
          to: h,
          action: d,
        }),
      });
}
function un({ layoutStyle: e, ...l }) {
  return e === 'inline'
    ? n(A, {
        blockAlignment: 'start',
        columns: ['1fr', '3fr', 'auto'],
        spacing: 'base',
        ...l,
      })
    : n(ln, {
        blockAlignment: 'center',
        rows: ['fill', 'auto'],
        spacing: 'small400',
        padding: 'none',
        ...l,
      });
}
function mn({ label: e, logo: l, summary: c, to: i, action: r }) {
  const h = V({ base: !1, medium: !0 }),
    d = M(),
    {
      rollup: { layoutStyle: t },
    } = B(),
    o = typeof e == 'string' ? n(v, { appearance: 'subdued', children: e }) : e,
    f = l && n('span', { className: I({ [m.Logo]: h }), children: l }),
    g = l && t === 'inline',
    S = n($, { children: [(!l || g) && o, !g && f] });
  return n(p, {
    padding: C,
    children: n('h2', {
      className: m.Button,
      children: n(un, {
        layoutStyle: t,
        inlineAlignment: i ? void 0 : 'start',
        children: [
          i
            ? n(A, {
                columns: ['fill', 'auto'],
                children: [
                  o,
                  n(Q, {
                    to: i,
                    children: d('vaulted.change_button', 'Change'),
                  }),
                ],
              })
            : n(p, {
                minInlineSize: 'fill',
                children: n(A, {
                  columns: ['fill', 'auto'],
                  spacing: 'base',
                  blockAlignment: 'center',
                  inlineAlignment: 'start',
                  children: [S, r],
                }),
              }),
          n(p, {
            minInlineSize: 'fill',
            maxInlineSize: 'fill',
            children: [
              g && f,
              typeof c == 'string' ? n(v, { children: c }) : c,
            ],
          }),
        ],
      }),
    }),
  });
}
function hn({
  layoutStyle: e,
  icon: l,
  label: c,
  logo: i,
  children: r,
  transition: h,
  ...d
}) {
  const t = !i || e === 'inline';
  let o = [];
  return (
    e === 'inline'
      ? h === 'exited'
        ? (o = ['fill', '1fr', 'auto'])
        : (o = ['1fr', '3fr', 'auto'])
      : (o = ['fill', 'auto']),
    n($, {
      children: [
        n(A, {
          columns: o,
          spacing: 'base',
          blockAlignment: e === 'inline' ? 'start' : 'center',
          inlineAlignment: 'start',
          ...d,
          children: [
            t && c,
            e === 'inline'
              ? n(p, { minInlineSize: 'fill', children: [i, r] })
              : i,
            l,
          ],
        }),
        e !== 'inline' && r,
      ],
    })
  );
}
const y = ['exit', 'exiting', 'exited'],
  pn = ['enter', 'entering', 'entered'],
  D = [...pn, ...y],
  N = ['exited', 'enter'];
function gn({
  id: e,
  label: l,
  logo: c,
  summary: i,
  error: r,
  open: h,
  onToggle: d,
  children: t,
  disabled: o,
  renderChildrenWhenCollapsed: f,
}) {
  const L = !!r,
    g = X(r),
    R = `${e}-collapsible`,
    S = `${R}-control`,
    u = h || L || !!o,
    z = L || !!o,
    a = j(!u, 'fast'),
    [T, O] = _(0),
    x = F(null),
    H = V({ base: !1, medium: !0 }),
    {
      rollup: { layoutStyle: s },
    } = B(),
    W = u ? k : C,
    [U, E] = _(W),
    q = J(() => {
      d?.(u);
    }, [d, u]);
  w(() => {
    x?.current && x?.current?.clientHeight > 0 && O(x?.current?.clientHeight);
  }, [x, a]),
    w(() => {
      s === 'inline' && ((a !== 'exited' && a !== 'entered') || E(u ? k : C));
    }, [u, a, s]);
  const b = a === 'exit' || a === 'exiting' || a === 'exited';
  return n(p, {
    padding: U,
    children: [
      n('h2', {
        className: m.Button,
        children: [
          n(K, {
            padding: 'none',
            display: 'block',
            expanded: u,
            id: R,
            disabled: z,
            controlId: S,
            accessibilityRole: 'expandableControl',
            minInlineSize: 'fill',
            onPress: q,
            children: n(hn, {
              layoutStyle: s,
              label: n('span', {
                className: m.Label,
                children: n(v, { appearance: 'subdued', children: l }),
              }),
              transition: a,
              logo:
                c && n('span', { className: I({ [m.Logo]: H }), children: c }),
              icon: n(p, {
                padding: Y.default('none').when(
                  { viewportInlineSize: { min: 'medium' } },
                  'small300'
                ),
                className: m.Icon,
                children: n(Z, {
                  size: 'extraSmall',
                  appearance: 'accent',
                  source: u ? 'chevronUp' : 'chevronDown',
                }),
              }),
              children: i
                ? n(nn, {
                    spacing: 'none',
                    inlineAlignment: 'start',
                    children: n('div', {
                      className: I(m.Summary),
                      style: {
                        opacity: b ? 0 : 1,
                        transitionDelay:
                          s === 'block' || s === void 0 || a === 'exited'
                            ? '0ms'
                            : '250ms',
                        height: (s === 'inline' ? N : y).includes(a)
                          ? 0
                          : 'auto',
                      },
                      children: n('div', {
                        className: I(m.SummaryTextContainer),
                        ref: x,
                        style: { paddingTop: s === 'inline' ? 0 : void 0 },
                        children:
                          typeof i == 'string' ? n(v, { children: i }) : i,
                      }),
                    }),
                  })
                : null,
            }),
          }),
          n('div', {
            style: {
              height: (s === 'inline' ? N : y).includes(a) ? `${T}px` : '0px',
              transitionDuration:
                s === 'block' || s === void 0 || b ? '0ms' : '250ms',
            },
          }),
        ],
      }),
      g &&
        n('div', {
          style: { marginTop: `calc(-${T}px + var(--x-spacing-small-100)` },
          children: r,
        }),
      n('div', {
        className: I(m.CollapsibleContainer),
        style: {
          marginTop: g ? 0 : `-${T}px`,
          paddingBottom: (s === 'inline' ? N : D).includes(a)
            ? '0px'
            : `${T}px`,
          minHeight: (s === 'inline' ? N : D).includes(a) ? `${T}px` : '0px',
          opacity: b ? 1 : 0,
          pointerEvents: b ? 'auto' : 'none',
          transitionDelay: s === 'inline' && b ? '75ms' : '0ms',
        },
        children: n(en, {
          id: S,
          open: b,
          renderChildrenWhenCollapsed: f,
          duration: 'fast',
          children: n(p, {
            padding: ['small400', 'none', 'none', 'none'],
            children: t,
          }),
        }),
      }),
    ],
  });
}
export { fn as R };
