import {
  A as E,
  ba as J,
  aW as V,
  J as H,
  y as F,
  e as b,
  b1 as $,
  D as W,
  a as e,
  aU as Z,
  aa as K,
  dh as X,
  a8 as C,
  aP as Y,
  cc as O,
  cu as ee,
  d4 as ie,
  bj as ne,
  ab as M,
  aS as te,
  aV as re,
  ce as x,
  az as z,
  cb as se,
  di as oe,
  cZ as ae,
  T as pe,
  aG as ce,
  ci as B,
  dj as le,
  c9 as ue,
  u as de,
  dk as he,
  a4 as ge,
  a3 as ye,
  dl as fe,
  a_ as me,
  dm as Se,
  d as _e,
  at as ve,
  q as be,
  dn as I,
  dp as De,
} from './app.js';
import { S as Pe, a as k } from './SubscriptionPriceBreakdown.GhzR2flD.js';
import { S as Ce, D as Re } from './useAmazonContact.HL8qh-Fn.js';
const Le = {
    id: 'ca32d1a1360abc73acf9c215a92ce9283175d9aa48b70e909517b6ccfe9467a7',
    type: 'query',
    name: 'ShippingRatesStatusQuery',
    source:
      'query ShippingRatesStatusQuery($token:String!){shippingRatesStatus(token:$token)}',
  },
  Ie = (i) => {
    const t = E(!1),
      o = E(!1),
      r = E(0),
      a = J(),
      { value: n, loading: p } = V(),
      { negotiate: u } = H();
    return (
      F(() => {
        o.current = p;
      }, [p]),
      F(() => {
        let c;
        n &&
        n.status === 'filled' &&
        n.intermediateRates &&
        n.shippingRatesStatusToken &&
        n.progressiveRatesEstimatedTimeUntilCompletion
          ? ((t.current = !0),
            (r.current = n.progressiveRatesEstimatedTimeUntilCompletion))
          : ((t.current = !1), (r.current = 0));
        const g = async () => {
          o.current ||
            ((
              await a.query(Le, {
                variables: { token: n.shippingRatesStatusToken },
                cache: !1,
              })
            )?.data?.shippingRatesStatus === 'COMPLETED'
              ? u({
                  include: ['shippingAddress'],
                  silenceViolations: ['non-stock'],
                  customizeNegotiation: (l) => (
                    (l.delivery.useProgressiveRates = !1), l
                  ),
                })
                  .finally(() => {
                    typeof i == 'function' && i();
                  })
                  .catch((l) => {
                    throw l;
                  })
              : t.current && (c = setTimeout(g, r.current)));
        };
        return (
          t.current && (c = setTimeout(g, r.current)),
          () => c && clearTimeout(c)
        );
      }, [i, a, u, n]),
      n?.status === 'filled' && n.intermediateRates
    );
  },
  xe = ({ deliveryMethod: i }) => {
    const t = b(),
      o = $(),
      {
        optionList: { typographyStyle: r },
      } = W(),
      { cost: a, costAfterDiscounts: n, priceBreakdown: p } = i;
    if (!p?.length || p.length > 1) return null;
    const u = o(n.amount, { currency: n.currencyCode }),
      [c] = p,
      g = c.excludeFromDeliveryOptionPrice,
      s = !c.targetMerchandiseLines[0]?.sellingPlan?.prepaid,
      { amount: l } = a,
      { amount: d } = n,
      y =
        s && g
          ? t(
              'shipping.subscription_delivery_description.shipping_price_included',
              'Included'
            )
          : u;
    return l > d
      ? e(Z, { cost: a, costAfterDiscounts: n })
      : e(K, { style: r, children: y });
  },
  N = (i) => (i === '' ? '' : `${i[0].toUpperCase() + i.substring(1)}`),
  Te = ({
    priceBreakdown: i,
    discountedShippingPrice: t,
    sellingPlan: o,
    subscriptionDetails: r,
  }) => {
    const a = b(),
      n = $(),
      p = X(),
      { deliveryInterval: u, billingIntervalCount: c, billingMaxCycles: g } = r,
      s = p(u, c),
      {
        amount: l,
        discountRecurringCycleLimit: d,
        excludeFromDeliveryOptionPrice: y,
      } = i,
      m = n(l.amount, { currency: l.currencyCode }),
      _ = o.prepaid ? D() : f();
    function D() {
      return !g || g > 1 ? S() : R();
    }
    function f() {
      const h = `${m} ${s}`;
      return o.subscriptionDetails.billingMaxCycles === 1
        ? R()
        : v() || Q()
        ? P(d, h)
        : y
        ? T(h)
        : s;
    }
    function S() {
      const h = `${m} ${s}`;
      return v()
        ? P(d, h)
        : y
        ? T(h)
        : `${w(o.deliveriesPerBillingCycle)} ${s}`;
    }
    function R() {
      const h = L();
      return h > 0 ? N(w(h)) : '';
    }
    function P(h = 0, A) {
      return [
        a(
          'shipping.subscription_delivery_description.free_for_first_n_order',
          { count: h },
          { one: 'For first order', other: 'For first %{count} orders' }
        ),
        T(A),
      ]
        .filter((j) => j.trim() !== '')
        .join(', ');
    }
    function L() {
      return y && !v()
        ? o.deliveriesPerBillingCycle - 1
        : o.deliveriesPerBillingCycle;
    }
    function v() {
      return t.amount === 0 && d !== void 0;
    }
    function Q() {
      return t.amount !== 0 && t.amount < l.amount;
    }
    function w(h) {
      return a(
        'shipping.subscription_delivery_description.prepaid_delivery_frequency',
        { count: h },
        { one: 'for %{count} delivery', other: 'for %{count} deliveries' }
      );
    }
    function T(h) {
      return a(
        'shipping.subscription_delivery_description.recurring_order_shipping_price',
        { recurring_order_shipping_price: h },
        'followed by %{recurring_order_shipping_price}'
      );
    }
    return e(C, { appearance: 'subdued', size: 'small', children: N(_) });
  },
  Ee = 'LkR2o',
  Me = { SecondaryContentAligner: Ee },
  we = ({ deliveryMethod: i }) => {
    const t = b(),
      { deliveryExpectationLines: o } = Y(),
      r = O('Checkout::ShippingMethodDetails::RenderAfter'),
      a = O('Checkout::ShippingMethodDetails::RenderExpanded');
    if (i == null) return null;
    const {
      title: n,
      handle: p,
      priceBreakdown: u,
      costAfterDiscounts: c,
      brandedPromise: g,
    } = i;
    if (!u) return null;
    const s = u.every((f) => f.discountRecurringCycleLimit === 0),
      l = !s && u.length === 1;
    function d(f) {
      const S = f.targetMerchandiseLines[0]?.sellingPlan;
      if (S?.subscriptionDetails)
        return e(Te, {
          priceBreakdown: f,
          discountedShippingPrice: c,
          sellingPlan: S,
          subscriptionDetails: S.subscriptionDetails,
        });
    }
    const y = (f, S, R, P) => {
        const L = !S && R.length > 1,
          v = P.length > 0;
        return !L && !v
          ? null
          : e(z, {
              spacing: 'large200',
              children: [
                L && e(Pe, { deliveryMethod: i }),
                v &&
                  e(x, {
                    extensions: P,
                    options: { handle: f, isInModal: !1 },
                  }),
              ],
            });
      },
      m = (() => {
        switch (i.methodType) {
          case 'LOCAL':
            return t('shipping.local_delivery', 'Local delivery');
          default:
            return n;
        }
      })(),
      _ = r.length > 0,
      D = o?.find((f) => f.deliveryStrategyHandle === i.handle);
    return e('fieldset', {
      children: [
        e('legend', {
          className: ee({ screenReaders: 'only' }),
          children: t(
            'general.choose_shipping_method',
            'Choose a shipping method'
          ),
        }),
        e(ie, {
          name: 'subscription_shipping_method',
          variant: 'group',
          value: p,
          onChange: () => {},
          hideRadioButton: !0,
          children: e(ne, {
            id: p,
            primaryContent: e(M, {
              children: [
                e(te, { methodTitle: m, brandedPromise: g }),
                e(re, { deliveryMethod: i, deliveryExpectationLine: D }),
              ],
            }),
            secondaryContent: e('div', {
              className: Me.SecondaryContentAligner,
              children: [e(xe, { deliveryMethod: i }), l && d(u[0])],
            }),
            tertiaryContent:
              _ &&
              e(x, { extensions: r, options: { handle: p, isInModal: !1 } }),
            renderDetailsWhenCollapsed: !0,
            details: y(p, s, u, a),
            children: m,
          }),
        }),
      ],
    });
  },
  G = ({
    line: i,
    showHeader: t,
    loadingAdditionalShippingRates: o,
    hasMultipleShippingLines: r,
  }) => {
    const a = b(),
      { extensionsBefore: n, extensionsAfter: p } = se({
        targeted: !0,
        hasMultipleDeliveryGroups: !!r,
      }),
      u = oe(),
      [c, g] = ae(i.type),
      { methods: s, type: l } = i,
      d = pe(() => {
        const _ = s.find((D) => D.handle === c);
        return _ || (s.length > 0 ? s[0] : void 0);
      }, [s, c]),
      y = t
        ? e(ce, {
            level: 3,
            children:
              l === 'ONE_TIME_PURCHASE'
                ? a(
                    'shipping.shipping_method_first_shipment_group_title',
                    { count: 1 },
                    { one: 'First shipment', other: 'First shipments' }
                  )
                : a(
                    'shipping.shipping_method_recurring_shipments_group_title.other',
                    'Recurring shipments'
                  ),
          })
        : null,
      m =
        l === 'ONE_TIME_PURCHASE' || !u
          ? e(Ce, { type: l, methods: s, loadingAdditionalShippingRates: o })
          : e(we, { deliveryMethod: d });
    return e(z, {
      spacing: 'small200',
      children: [
        y,
        e(x, {
          extensions: n,
          options: { groupType: B(i.type), includeDeliverySelectionGroups: !1 },
        }),
        m,
        e(x, {
          extensions: p,
          options: { groupType: B(i.type), includeDeliverySelectionGroups: !1 },
        }),
      ],
    });
  };
function ke({ lines: i, loading: t }) {
  const o = le(i),
    r = b(),
    a = ue(),
    p =
      de(he) &&
      i.some((d) =>
        d.targetMerchandiseLines?.some((y) =>
          y.properties.some((m) => m.name === '_shopify_non_subscription_item')
        )
      ),
    u = e(ye, {
      status: 'warning',
      errorType: ge.DeliveryError,
      children: r(
        'shipping_errors.shipping_method',
        'The shipping options have changed for your order. Review your selection and try again.'
      ),
    }),
    c = i.length > 1 || fe(i),
    { subscriptionLines: g, oneTimePurchaseLines: s } = me(i);
  return e(Se, {
    target: 'cart.deliveryGroups[0].deliveryAddress',
    children: [
      o && u,
      a
        ? e(M, {
            children: [
              e(Re, { deliveryLines: s }),
              e(k, { subscriptionLines: g }),
            ],
          })
        : (() => {
            if (g.length > 0 && s.length === 1) {
              const [d] = s;
              return e(M, {
                children: [
                  e(G, {
                    line: d,
                    showHeader: c && !p,
                    loadingAdditionalShippingRates: t,
                    hasMultipleShippingLines: !0,
                  }),
                  !p && e(k, { subscriptionLines: g }),
                ],
              });
            }
            return i.map((d) =>
              e(
                G,
                {
                  line: d,
                  showHeader: c,
                  loadingAdditionalShippingRates: t,
                  hasMultipleShippingLines: i.length > 1,
                },
                `${d.type}`
              )
            );
          })(),
    ],
  });
}
const q = 'pay_now',
  U = 'pay_on_delivery',
  Ne = () => {
    const {
        optionList: { typographyStyle: i },
      } = W(),
      t = b(),
      { negotiate: o } = H(),
      [r, a] = _e(ve().optionalDuties),
      n = be(() => {
        a({
          buyerRefusesDuties: !r?.buyerRefusesDuties,
          refuseDutiesPermitted: !!r?.refuseDutiesPermitted,
        }),
          o({ include: ['merchandiseLines', 'deliveryNext', 'paymentLines'] });
      }, [a, r, o]);
    return e(De, {
      id: 'duty_options',
      selectedItems: [r?.buyerRefusesDuties ? U : q],
      onChange: n,
      children: [
        e(I, {
          id: q,
          primaryContent: e(C, {
            appearance: 'subdued',
            children: t(
              'shipping.duties_and_taxes_options.ddp_caption',
              'No additional fees on delivery'
            ),
          }),
          children: e(C, {
            style: i,
            children: t(
              'shipping.duties_and_taxes_options.ddp_title',
              'Pay now'
            ),
          }),
        }),
        e(I, {
          id: U,
          primaryContent: e(C, {
            appearance: 'subdued',
            children: t(
              'shipping.duties_and_taxes_options.ddu_caption',
              'Additional fees may apply'
            ),
          }),
          children: e(C, {
            style: i,
            children: t(
              'shipping.duties_and_taxes_options.ddu_title',
              'Pay on delivery'
            ),
          }),
        }),
      ],
    });
  };
export { Ne as D, ke as S, Ie as u };
