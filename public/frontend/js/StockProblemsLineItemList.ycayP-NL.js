import {
  e as u,
  D as m,
  a as e,
  aa as o,
  az as b,
  a9 as g,
  aQ as f,
  b0 as l,
  b1 as k,
  b2 as s,
  G as S,
  E as _,
  b3 as P,
  b4 as h,
  b5 as L,
  S as d,
  b6 as I,
  b7 as c,
  b8 as C,
  b9 as T,
} from './app.js';
function z({ quantity: n, previousQuantity: t }) {
  const a = u(),
    {
      lineItems: {
        titleTypographyStyle: i,
        optionsTypographyStyle: r,
        optionsAppearance: p = 'subdued',
        optionsEmphasis: y,
      },
    } = m();
  return e(b, {
    spacing: 'none',
    inlineAlignment: 'end',
    children: [
      e(o, {
        ...{ size: 'small', appearance: p, emphasis: y, style: r },
        appearance: 'subdued',
        accessibilityRole: 'deletion',
        children: a(
          'stock.item_label',
          { count: t },
          { one: '{{count}} item', other: '{{count}} items' }
        ),
      }),
      e(o, {
        style: i,
        children: a(
          'stock.item_label',
          { count: n },
          { one: '{{count}} item', other: '{{count}} items' }
        ),
      }),
    ],
  });
}
const O = 'IDG1X',
  R = { OutOfStockLabel: O };
function v({ merchandiseIssueType: n }) {
  const t = u(),
    a = () => {
      switch (n) {
        case l.Unfulfillable:
        case l.Unavailable:
          return t('contextual_availability.unavailable_label', 'Unavailable');
        case l.Unpurchasable:
        case l.UnpurchasableB2B:
          return t(
            'stock.unpurchasable_product.status_column_header',
            'Not available'
          );
        case l.Unshippable:
          return t(
            'stock.unpurchasable_product_generic.status_column_header',
            'Not available'
          );
        default:
          return t('stock.sold_out_label', 'Sold out');
      }
    };
  return e(f, {
    columns: 'auto',
    spacing: 'small400',
    blockAlignment: 'center',
    children: [
      e(g, {
        size: 'small',
        source: 'disabled',
        appearance: 'critical',
        display: 'inline',
      }),
      ' ',
      e(o, {
        emphasis: 'bold',
        size: 'small',
        appearance: 'critical',
        children: e('span', { className: R.OutOfStockLabel, children: a() }),
      }),
    ],
  });
}
function A({ price: n, previousPrice: t }) {
  const a = k();
  return e(b, {
    spacing: 'none',
    inlineAlignment: 'end',
    children: [
      t &&
        e(o, {
          size: 'small',
          appearance: 'subdued',
          accessibilityRole: 'deletion',
          translate: !1,
          children: a(t.amount, { currency: t.currencyCode }),
        }),
      n &&
        e(o, {
          translate: !1,
          children: a(n.amount, { currency: n.currencyCode }),
        }),
    ],
  });
}
function Q(n) {
  const { line: t, problem: a } = n,
    { image: i, title: r } = n.line;
  return e(h, {
    ...n,
    children: [
      e(s, {
        children: e(S, {
          source: i
            ? _.default(i.one)
                .when({ resolution: 1 }, i.one)
                .when({ resolution: 2 }, i.two)
                .when({ resolution: 4 }, i.four)
            : void 0,
          accessibilityLabel: r,
        }),
      }),
      e(s, {
        primary: !0,
        children: e(P, {
          id: null,
          deferredAmount: t.deferredAmount,
          options: t.options,
          properties: t.properties,
          quantity: t.quantity,
          recurringTotal: t.recurringTotal,
          sellingPlan: t.sellingPlan,
          subtitle: t.subtitle,
          title: r,
          totalPrice: t.totalPrice,
        }),
      }),
      e(s, { children: e(U, { problem: a }) }),
    ],
  });
}
function x(n) {
  return n.type === l.PriceChange;
}
function D(n) {
  return n.type === l.QuantityChange;
}
function U(n) {
  const { problem: t } = n;
  return x(t)
    ? e(A, { price: t.negotiatedPrice, previousPrice: t.proposedPrice })
    : D(t)
    ? e(z, {
        quantity: t.negotiatedQuantity ?? 0,
        previousQuantity: t.proposedQuantity ?? 0,
      })
    : e(v, { merchandiseIssueType: t.type });
}
function w(n) {
  return e(h, {
    ...n,
    children: [
      e(s, { children: e(L, { inlineSize: 64, blockSize: 64 }) }),
      e(s, { primary: !0, children: e(d, { inlineSize: 'base' }) }),
      e(s, {
        inlineAlignment: 'center',
        children: e(d, { inlineSize: 'small' }),
      }),
    ],
  });
}
function N(n) {
  const {
      stockProblemsLineItems: { spacing: t },
    } = m(),
    a = u();
  return e(T, {
    spacing: t,
    children: [
      e(I, {
        hidden: !0,
        blockPadding: 'base',
        children: [
          e(c, {
            hidden: !0,
            children: a('order_summary.product_image_label', 'Product image'),
          }),
          e(c, {
            hidden: !0,
            children: a('order_summary.description_label', 'Description'),
          }),
          e(c, {
            hidden: !0,
            children: a('order_summary.quantity_label', 'Quantity'),
          }),
        ],
      }),
      e(C, {
        children: n.lineItems.map(({ line: i, problem: r }) =>
          n.loading
            ? e(w, {}, i.stableId)
            : e(Q, { problem: r, line: i }, `${r.type}-${i.stableId}`)
        ),
      }),
    ],
  });
}
export { N as S };
