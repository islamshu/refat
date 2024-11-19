const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'SubscriptionGroupLine.G_tWFKH4.js',
      'app.YFeVIJ1k.js',
      'assets/app.whj6cDzT.css',
      'StackedMerchandisePreview.DNLssxMn.js',
      'assets/StackedMerchandisePreview._xnAOXmq.css',
    ])
) => i.map((i) => d[i]);
import {
  fc as w,
  fh as R,
  q as x,
  bH as I,
  bI as T,
  _ as B,
  e as f,
  cb as L,
  a as _,
  aG as k,
  ce as b,
  ci as C,
  az as M,
  E as q,
  bK as N,
  a$ as E,
  b1 as $,
  dh as A,
  ab as G,
  lI as U,
  a8 as S,
} from './app.js';
function ie() {
  const e = w(),
    o = R();
  return x(
    (s, t, c) => {
      const p = o.value.defaultAttributes?.shopId || 1,
        r = {
          schemaId: 'checkout_display_shipping_methods/1.0',
          payload: {
            eventTimestamp: t,
            shopId: p,
            apiClientId: c,
            promiseRetrievalTime: s,
          },
        };
      e.record(r);
    },
    [e, o.value.defaultAttributes?.shopId]
  );
}
const z = I({
  load: () =>
    T(() =>
      B(
        () => import('./SubscriptionGroupLine.G_tWFKH4.js').then((e) => e.a),
        __vite__mapDeps([0, 1, 2, 3, 4])
      )
    ),
});
function re({ subscriptionLines: e }) {
  const o = f(),
    { extensionsBefore: u, extensionsAfter: s } = L({
      targeted: !0,
      hasMultipleDeliveryGroups: !0,
    }),
    t = e.length;
  return t === 0
    ? null
    : _(E, {
        spacing: 'small200',
        rows: 'auto',
        children: [
          _(k, {
            level: 3,
            children: o(
              'shipping.shipping_method_recurring_shipments_group_title.other',
              'Recurring shipments'
            ),
          }),
          _(b, {
            extensions: u,
            options: {
              groupType: C('SUBSCRIPTION'),
              includeDeliverySelectionGroups: !1,
            },
          }),
          _(M, {
            background: 'subdued',
            padding: 'base',
            cornerRadius: 'base',
            spacing: q
              .default('small200')
              .when({ viewportInlineSize: { min: 'extraSmall' } }, 'small100'),
            children: e.map((p, r) =>
              _(
                z,
                { subscriptionLine: p, subscriptionLinesLength: t, index: r },
                p.id || N()
              )
            ),
          }),
          _(b, {
            extensions: s,
            options: {
              groupType: C('SUBSCRIPTION'),
              includeDeliverySelectionGroups: !1,
            },
          }),
        ],
      });
}
const H = '·',
  j = 'hMn1U',
  K = { Container: j };
function V() {
  const e = f();
  function o(p) {
    const {
      formattedFields: { deliveryCycleDescription: r },
    } = p;
    return e(
      'shipping.subscription_delivery_description.subscription_free_with_frequency_label',
      { delivery_frequency: r },
      'Free shipping %{delivery_frequency}'
    );
  }
  function u(p) {
    const {
      sellingPlan: { deliveriesPerBillingCycle: r = 1 },
      priceBreakdown: { excludeFromDeliveryOptionPrice: d },
    } = p;
    return d
      ? e(
          'shipping.subscription_delivery_description.free_shipping_cycles',
          { count: r - 1 },
          {
            one: 'Free shipping for %{count} more delivery',
            other: 'Free shipping for %{count} more deliveries',
          }
        )
      : e(
          'shipping.subscription_delivery_description.free_shipping_cycles_delivery_not_included',
          { count: r },
          {
            one: 'Free shipping for %{count} delivery',
            other: 'Free shipping for %{count} deliveries',
          }
        );
  }
  function s(p) {
    const {
      formattedFields: {
        recurringOrderShippingPrice: r,
        recurringBillingInterval: d,
      },
      priceBreakdown: { discountRecurringCycleLimit: n = 1 },
      subscriptionDetails: { billingMaxCycles: i },
    } = p;
    return i && i < n
      ? o(p)
      : e(
          'shipping.subscription_delivery_description.prepaid_free_shipping_with_cycles',
          { cycle: d, count: n, recurring_order_shipping_price: r },
          {
            one: 'Free shipping for the first %{cycle}, followed by %{recurring_order_shipping_price}',
            other:
              'Free shipping for the first %{cycle}, followed by %{recurring_order_shipping_price}',
          }
        );
  }
  function t(p) {
    const {
      priceBreakdown: { excludeFromDeliveryOptionPrice: r },
      sellingPlan: { deliveriesPerBillingCycle: d = 1 },
      formattedFields: {
        recurringOrderShippingPrice: n,
        perDeliveryCost: i,
        firstOrderPriceFormatted: l,
        shippingPriceFormatted: h,
      },
    } = p;
    return r
      ? e(
          'shipping.subscription_delivery_description.prepaid_order_no_cycle',
          {
            count: d - 1,
            shipping_price: l,
            recurring_order_shipping_price: n,
            per_delivery_cost: i,
          },
          {
            one: '%{shipping_price} for %{count} more delivery, followed by %{recurring_order_shipping_price}',
            other:
              '%{shipping_price} for %{count} more deliveries (%{per_delivery_cost}), followed by %{recurring_order_shipping_price}',
          }
        )
      : e(
          'shipping.subscription_delivery_description.prepaid_order_no_cycle_delivery_not_included',
          {
            count: d,
            shipping_price: h,
            recurring_order_shipping_price: n,
            per_delivery_cost: i,
          },
          {
            one: '%{shipping_price} for %{count} delivery, followed by %{recurring_order_shipping_price}',
            other:
              '%{shipping_price} for %{count} deliveries (%{per_delivery_cost}), followed by %{recurring_order_shipping_price}',
          }
        );
  }
  function c(p) {
    const {
      priceBreakdown: { excludeFromDeliveryOptionPrice: r },
      sellingPlan: { deliveriesPerBillingCycle: d = 1 },
      formattedFields: {
        firstOrderPriceFormatted: n,
        shippingPriceFormatted: i,
        perDeliveryCost: l,
      },
    } = p;
    return r
      ? e(
          'shipping.subscription_delivery_description.prepaid_order_one_cycle',
          { count: d - 1, shipping_price: n, per_delivery_cost: l },
          {
            one: '%{shipping_price} for %{count} more delivery',
            other:
              '%{shipping_price} for %{count} more deliveries (%{per_delivery_cost})',
          }
        )
      : e(
          'shipping.subscription_delivery_description.prepaid_order_one_cycle_delivery_not_included',
          { count: d, shipping_price: i, per_delivery_cost: l },
          {
            one: '%{shipping_price} for %{count} delivery',
            other:
              '%{shipping_price} for %{count} deliveries (%{per_delivery_cost})',
          }
        );
  }
  return {
    freeShippingWithFrequency: o,
    freeShippingWithOneCycle: u,
    freeShippingDiscountWithMoreThanOneCycle: s,
    baseShippingWithMoreThanOneCycle: t,
    baseShippingWithOneCycle: c,
  };
}
function J() {
  const e = f();
  function o(n) {
    const {
      formattedFields: { deliveryCycleDescription: i },
    } = n;
    return e(
      'shipping.subscription_delivery_description.subscription_free_with_frequency_label',
      { delivery_frequency: i },
      'Free shipping %{delivery_frequency}'
    );
  }
  function u(n, i) {
    const {
      priceBreakdown: { excludeFromDeliveryOptionPrice: l },
    } = n;
    return l
      ? e(
          'shipping.subscription_delivery_description.free_shipping_cycles',
          { count: i - 1 },
          {
            one: 'Free shipping for %{count} more delivery',
            other: 'Free shipping for %{count} more deliveries',
          }
        )
      : e(
          'shipping.subscription_delivery_description.free_shipping_cycles_delivery_not_included',
          { count: i },
          {
            one: 'Free shipping for %{count} delivery',
            other: 'Free shipping for %{count} deliveries',
          }
        );
  }
  function s() {
    return e(
      'shipping.subscription_delivery_description.free_shipping_cycles_delivery_not_included',
      { count: 1 },
      {
        one: 'Free shipping for %{count} delivery',
        other: 'Free shipping for %{count} deliveries',
      }
    );
  }
  function t(n) {
    const {
      formattedFields: { recurringShippingFrequency: i },
      priceBreakdown: {
        discountRecurringCycleLimit: l = 1,
        excludeFromDeliveryOptionPrice: h,
      },
    } = n;
    return l === 1 && h
      ? p(n)
      : h
      ? e(
          'shipping.subscription_delivery_description.first_n_order_free_with_cycle',
          { count: l - 1, recurring_order_shipping_price: i },
          {
            one: 'Free shipping for %{count} more delivery, then %{recurring_order_shipping_price}',
            other:
              'Free shipping for %{count} more deliveries, then %{recurring_order_shipping_price}',
          }
        )
      : e(
          'shipping.subscription_delivery_description.first_n_order_free_with_cycle_delivery_not_included',
          { count: l, recurring_order_shipping_price: i },
          {
            one: 'Free shipping for %{count} delivery, then %{recurring_order_shipping_price}',
            other:
              'Free shipping for %{count} deliveries, then %{recurring_order_shipping_price}',
          }
        );
  }
  function c(n, i) {
    const {
        priceBreakdown: {
          discountRecurringCycleLimit: l = 1,
          excludeFromDeliveryOptionPrice: h,
        },
        formattedFields: { recurringShippingFrequency: a },
      } = n,
      y = Math.min(l, i);
    return i < l
      ? u(n, i)
      : l === 1 && h
      ? r(n, i)
      : h
      ? e(
          'shipping.subscription_delivery_description.first_n_order_free_with_cycle',
          { count: y - 1, recurring_order_shipping_price: a },
          {
            one: 'Free shipping for %{count} more delivery, then %{recurring_order_shipping_price}',
            other:
              'Free shipping for %{count} more deliveries, then %{recurring_order_shipping_price}',
          }
        )
      : e(
          'shipping.subscription_delivery_description.first_n_order_free_with_cycle_delivery_not_included',
          { count: y, recurring_order_shipping_price: a },
          {
            one: 'Free shipping for %{count} delivery, then %{recurring_order_shipping_price}',
            other:
              'Free shipping for %{count} deliveries, then %{recurring_order_shipping_price}',
          }
        );
  }
  function p(n) {
    const {
      formattedFields: { recurringShippingFrequency: i },
    } = n;
    return i;
  }
  function r(n, i) {
    const {
      formattedFields: { singleShippingPriceFormatted: l },
      priceBreakdown: { excludeFromDeliveryOptionPrice: h },
    } = n;
    return h
      ? e(
          'shipping.subscription_delivery_description.max_cycles_base_shipping',
          { count: i - 1, shipping_price: l },
          {
            one: '%{count} more delivery for %{shipping_price}',
            other: '%{count} more deliveries for %{shipping_price} each',
          }
        )
      : e(
          'shipping.subscription_delivery_description.max_cycles_base_shipping_delivery_not_included',
          { count: i, shipping_price: l },
          {
            one: '%{count} delivery for %{shipping_price}',
            other: '%{count} more deliveries for %{shipping_price} each',
          }
        );
  }
  function d(n) {
    const {
      formattedFields: { singleShippingPriceFormatted: i },
    } = n;
    return e(
      'shipping.subscription_delivery_description.max_cycles_base_shipping_delivery_not_included',
      { count: 1, shipping_price: i },
      {
        one: '%{count} delivery for %{shipping_price}',
        other: '%{count} more deliveries for %{shipping_price} each',
      }
    );
  }
  return {
    freeShippingWithFrequency: o,
    freeShippingWithNCycles: u,
    freeShippingWithOneCycle: s,
    freeShippingDiscountWithRecurringCycles: t,
    freeShippingDiscountWithNCycles: c,
    baseShippingWithRecurringCycles: p,
    baseShippingWithNCycles: r,
    baseShippingWithOneCycle: d,
  };
}
function Q({ priceBreakdown: e, discountedShippingPrice: o }) {
  const u = X(),
    s = V(),
    t = J(),
    c = e?.targetMerchandiseLines[0]?.sellingPlan,
    p = c?.subscriptionDetails;
  if (!e || !p || !o) return;
  const r = {
      priceBreakdown: e,
      subscriptionDetails: p,
      discountedShippingPrice: o,
      sellingPlan: c,
      formattedFields: u(e, p, c),
    },
    { amount: d, discountRecurringCycleLimit: n } = e,
    { prepaid: i } = c;
  return d.amount === 0 || n === 0
    ? i
      ? g(r, {
          recurring: s.freeShippingWithFrequency,
          nCycles: s.freeShippingWithFrequency,
          oneCycle: s.freeShippingWithOneCycle,
        })
      : g(r, {
          recurring: t.freeShippingWithFrequency,
          nCycles: t.freeShippingWithNCycles,
          oneCycle: t.freeShippingWithOneCycle,
        })
    : n !== void 0 && o.amount === 0
    ? i
      ? g(r, {
          recurring: s.freeShippingDiscountWithMoreThanOneCycle,
          nCycles: s.freeShippingDiscountWithMoreThanOneCycle,
          oneCycle: s.freeShippingWithOneCycle,
        })
      : g(r, {
          recurring: t.freeShippingDiscountWithRecurringCycles,
          nCycles: t.freeShippingDiscountWithNCycles,
          oneCycle: t.freeShippingWithOneCycle,
        })
    : i
    ? g(r, {
        recurring: s.baseShippingWithMoreThanOneCycle,
        nCycles: s.baseShippingWithMoreThanOneCycle,
        oneCycle: s.baseShippingWithOneCycle,
      })
    : g(r, {
        recurring: t.baseShippingWithRecurringCycles,
        nCycles: t.baseShippingWithNCycles,
        oneCycle: t.baseShippingWithOneCycle,
      });
}
function g(e, o) {
  const {
      subscriptionDetails: { billingMaxCycles: u },
    } = e,
    { recurring: s, oneCycle: t, nCycles: c } = o;
  return u ? (u === 1 ? t(e) : c(e, u)) : s(e);
}
function X() {
  const e = f(),
    o = $(),
    u = A();
  function s(t, c) {
    switch (t) {
      case 'month':
        return e(
          'subscriptions.recurring_total_intervals.month',
          { count: c },
          { one: 'month', other: '%{count} months' }
        );
      case 'week':
        return e(
          'subscriptions.recurring_total_intervals.week',
          { count: c },
          { one: 'week', other: '%{count} weeks' }
        );
      case 'day':
        return e(
          'subscriptions.recurring_total_intervals.day',
          { count: c },
          { one: 'day', other: '%{count} days' }
        );
      case 'year':
        return e(
          'subscriptions.recurring_total_intervals.year',
          { count: c },
          { one: 'year', other: '%{count} years' }
        );
      default:
        return '';
    }
  }
  return (t, c, p) => {
    const { amount: r, discountRecurringCycleLimit: d = 1 } = t,
      { deliveriesPerBillingCycle: n = 1 } = p,
      { billingMaxCycles: i } = c,
      l = Math.ceil((r.amount * 100) / n) / 100,
      h = o(r.amount, { currency: r.currencyCode }),
      a = o(l, { currency: r.currencyCode }),
      y = e(
        'shipping.subscription_delivery_description.multiple_subscriptions_shipping_price_label',
        { shipping_price: a },
        '%{shipping_price} per delivery'
      ),
      v = u(c.deliveryInterval, c.deliveryIntervalCount),
      m = u(c.deliveryInterval, c.billingIntervalCount),
      F = i ? Math.min(i, d) : d,
      P = s(c.billingInterval, c.billingIntervalCount * F),
      D = `${h} ${v}`,
      O = `${h} ${m}`,
      W = o(r.amount - l, { currency: r.currencyCode });
    return {
      perDeliveryCost: y,
      deliveryCycleDescription: v,
      singleShippingPriceFormatted: a,
      shippingPriceFormatted: h,
      recurringShippingFrequency: D,
      billingCycleDescription: m,
      recurringOrderShippingPrice: O,
      firstOrderPriceFormatted: W,
      recurringBillingInterval: P,
    };
  };
}
function ne({ deliveryMethod: e }) {
  return e.priceBreakdown
    ? _(G, {
        children: e.priceBreakdown.map((o, u, { length: s }) => {
          const t = o.targetMerchandiseLines[0]?.sellingPlan;
          return t?.subscriptionDetails
            ? _(
                Z,
                {
                  priceBreakdown: o,
                  showProductSubtitle: s > 1,
                  discountedShippingPrice: e.costAfterDiscounts,
                  methodTitle: e.title,
                  hideMerchandiseTitle: s === 1,
                },
                t.id
              )
            : null;
        }),
      })
    : null;
}
const Y = ({ title: e, deliveryDetail: o }) =>
    _('div', {
      className: K.Container,
      children: [
        _(S, { appearance: 'subdued', children: e }),
        _(S, { children: o }),
      ],
    }),
  Z = ({
    priceBreakdown: e,
    showProductSubtitle: o,
    discountedShippingPrice: u,
    methodTitle: s,
    hideMerchandiseTitle: t,
  }) => {
    const c = U(),
      { targetMerchandiseLines: p } = e,
      r = c(p.map(d));
    function d(l) {
      return [l.title, o && l.subtitle ? `(${l.subtitle})` : null]
        .filter(Boolean)
        .join(' ');
    }
    const n = Q({ priceBreakdown: e, discountedShippingPrice: u }),
      i = `${s} ${n ? H : ''} ${n}`.trimEnd();
    return _(Y, { title: t ? '' : r, deliveryDetail: i });
  };
export { ne as S, re as a, Q as b, ie as u };
