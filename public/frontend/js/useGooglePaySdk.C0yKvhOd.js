import {
  c5 as fe,
  gB as b,
  gC as Ie,
  gD as Re,
  gE as Q,
  gF as ve,
  gG as be,
  aZ as De,
  gH as Ne,
  gI as Oe,
  gJ as Ce,
  e as q,
  T as D,
  m as Te,
  fZ as T,
  f_ as G,
  fd as te,
  gK as Ge,
  dw as z,
  f$ as we,
  gL as Le,
  v as w,
  gM as ne,
  gN as Me,
  g6 as He,
  aO as O,
  aN as se,
  g5 as Ve,
  g3 as C,
  c7 as ke,
  gO as Ue,
  ga as Ye,
  q as R,
  gb as k,
  gP as ae,
  gQ as oe,
  at as B,
  gR as xe,
  J as re,
  gS as W,
  gT as F,
  gU as qe,
  gV as $,
  gW as ze,
  gX as Z,
  gY as Be,
  gZ as X,
  g_ as We,
  g$ as Fe,
  h0 as $e,
  h1 as ie,
  h2 as Ze,
  h3 as le,
  h4 as Je,
  h5 as je,
  h6 as Ke,
  h7 as Qe,
  h8 as Xe,
  aj as de,
  h9 as et,
  Z as tt,
  g9 as nt,
  ha as st,
  g4 as at,
  g0 as ot,
  A as rt,
  hb as it,
  y as ee,
} from './app.js';
class U extends Error {
  name = 'GooglePayGenericError';
}
class Ct extends Error {
  name = 'GooglePayCreateButtonError';
}
class lt extends Error {
  name = 'GooglePayDeveloperError';
}
class dt extends Error {
  name = 'GooglePayPaymentClientError';
}
class Y extends Error {
  name = 'GooglePaySubmissionError';
}
function ce() {
  return fe().currency;
}
const ct = 'https://pay.google.com/gp/p/js/pay.js',
  ut = 2,
  pt = 0,
  gt = { apiVersion: ut, apiVersionMinor: pt },
  J = '%',
  ht = {
    'أبو ظبي': 'AZ',
    'إمارة الشارقةّ': 'SH',
    الفجيرة: 'FU',
    عجمان: 'AJ',
    'رأس الخيمة': 'RK',
    'أم القيوين': 'UQ',
    دبي: 'DU',
  };
function mt(t, e) {
  const n = t.find((l) => l.deliveryLine.type === 'ONE_TIME_PURCHASE'),
    s = t.find((l) => l.deliveryLine.type === 'SUBSCRIPTION');
  let a = '';
  if (s) {
    if (s.methodType === 'PICK_UP' || s.methodType === 'LOCAL') return s.title;
    a = s.title;
  }
  const r = [n?.title ?? '', a].filter(Boolean);
  switch (r.length) {
    case 0:
    case 1:
      return r.join('');
    case 2:
      return e.combineTwoShippingTitles(r[0], r[1]);
    default:
      return e.combineMultipleShippingTitles(r);
  }
}
function yt(t) {
  return Ce(t).replace(/["']/g, J);
}
function Pt(t) {
  const e = new RegExp(`[${J}]`, 'g');
  return t.replace(e, '"');
}
function St(t, e) {
  const n = be(t).filter(De).map(Ne);
  return Oe(n)
    .filter((a) => a.length)
    .map((a) => ({
      id: yt(a),
      label: mt(a, e),
      description: a.map(pe).join(', '),
    }));
}
function Et({
  paymentDue: t,
  subtotal: e,
  duties: n,
  taxes: s,
  deliveryNext: a,
  discountLines: o,
  tipLines: r,
  paymentLines: l,
  labels: d,
  i18nCurrency: y,
  translations: P,
  selectedShippingId: u,
  deliveryMacros: g,
}) {
  const c = g?.length ? At(g) : St(a, P),
    v = ue({
      paymentDue: t,
      subtotal: e,
      duties: n,
      taxes: s,
      deliveryNext: a,
      discountLines: o,
      tipLines: r,
      paymentLines: l,
      labels: d,
      i18nCurrency: y,
    }),
    i = c.find((p) => p.id === u)?.id ?? c[0]?.id;
  return {
    newShippingOptionParameters: {
      shippingOptions: c,
      defaultSelectedOptionId: i,
    },
    newTransactionInfo: v,
  };
}
function ue({
  paymentDue: t,
  subtotal: e,
  duties: n,
  taxes: s,
  deliveryNext: a,
  discountLines: o,
  tipLines: r,
  paymentLines: l,
  labels: d,
  i18nCurrency: y,
}) {
  const P = t ? b(t.amount) : '0',
    u = [];
  e && u.push({ label: d.subtotal, type: 'SUBTOTAL', price: b(e.amount) });
  const g = Ie(a).reduce((c, v) => c + v.method.costAfterDiscounts.amount, 0);
  return (
    u.push({ label: d.shipping, type: 'LINE_ITEM', price: b(g) }),
    n &&
      n?.status === 'available_total' &&
      n?.totalDuty.amount !== 0 &&
      u.push({
        label: d.duties,
        type: 'LINE_ITEM',
        price: b(n.totalDuty.amount),
      }),
    s &&
      s.status === 'available_total' &&
      s.totalTax.amount !== 0 &&
      u.push({
        label: d.taxes,
        type: 'LINE_ITEM',
        price: b(s.totalTax.amount),
      }),
    o?.lines.forEach((c) => {
      Re(c) &&
        u.push({
          label: c.title,
          type: 'LINE_ITEM',
          price: Q(b(c.amount.amount)),
        });
    }),
    l?.lines
      .filter((c) => c.method.type === 'giftCard')
      .forEach((c) => {
        c.cost &&
          u.push({
            label: `${d.giftCard} ${c.method.code.slice(-4).toUpperCase()}`,
            type: 'LINE_ITEM',
            price: Q(b(c.cost.amount)),
          });
      }),
    r?.forEach((c) => {
      u.push({ label: d.tip, type: 'LINE_ITEM', price: b(c.amount.amount) });
    }),
    {
      totalPrice: P,
      currencyCode: e?.currencyCode || y,
      totalPriceStatus: 'ESTIMATED',
      totalPriceLabel: d.total,
      displayItems: u,
    }
  );
}
function x(t) {
  let e = t.administrativeArea || void 0,
    n = t.locality || void 0;
  t.countryCode === 'AE' && ((n = t.administrativeArea), e && (e = ht[e] || e));
  const s = {
    city: n,
    postalCode: t.postalCode || void 0,
    zoneCode: e,
    countryCode: t.countryCode,
  };
  if ('name' in t) {
    const [a, ...o] = (t.name || '').split(' ');
    o.length === 0
      ? (s.lastName = a)
      : ((s.firstName = a), (s.lastName = o.join(' ')));
  }
  return (
    'address1' in t && (s.address1 = t.address1),
    'address2' in t && (s.address2 = t.address2),
    'phoneNumber' in t && (s.phone = t.phoneNumber),
    s
  );
}
function _t(t) {
  return ve(x(t));
}
function pe({ costAfterDiscounts: t, deliveryPromisePresentmentTitle: e }) {
  const { short: n } = e || {},
    s = b(t.amount);
  return `${n ? `(${n}) ` : ''}${s} ${t.currencyCode}`;
}
function At(t) {
  return t.map(
    ({
      totalTitle: e,
      totalCostAfterDiscounts: n,
      deliveryPromisePresentmentTitle: s,
      deliveryMethodHandles: a,
    }) => ({
      id: JSON.stringify(a).replace(/["']/g, J),
      label: e,
      description: pe({
        costAfterDiscounts: n,
        deliveryPromisePresentmentTitle: s,
      }),
    })
  );
}
function ge() {
  const t = q();
  return D(
    () => ({
      total: t('order_summary.total_label', 'Total'),
      subtotal: t('order_summary.subtotal_label', 'Subtotal'),
      shipping: t('order_summary.shipping_label', 'Shipping'),
      duties: t('order_summary.duties_label', 'Duties'),
      taxes: t('order_summary.taxes_label', 'Taxes'),
      giftCard: t('order_summary.gift_card_label', 'Gift card'),
      tip: t('order_summary.tip_label', 'Tip'),
    }),
    [t]
  );
}
function he() {
  const { name: t, myshopifyDomain: e } = Te(),
    n = T('GOOGLE_PAY'),
    s = n === void 0;
  return D(
    () =>
      s
        ? void 0
        : {
            merchantName: t,
            merchantId: n.merchantId,
            merchantOrigin: e,
            authJwt: n.authJwt,
          },
    [s, t, n?.merchantId, n?.authJwt, e]
  );
}
function ft() {
  const t = G(),
    e = T('GOOGLE_PAY'),
    {
      allowedAuthMethods: n,
      allowedCardNetworks: s,
      gateway: a,
      gatewayMerchantId: o,
    } = e || {},
    r = D(
      () => [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: n,
            allowedCardNetworks: s,
            billingAddressRequired: !0,
            billingAddressParameters: {
              format: 'FULL',
              phoneNumberRequired: t.isRequired('phone'),
            },
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: { gateway: a ?? '', gatewayMerchantId: o ?? '' },
          },
        },
      ],
      [t, n, s, a, o]
    );
  return e === void 0 ? [] : r;
}
function It() {
  const t = te(),
    e = he(),
    n = ft(),
    { shippingCountries: s } = Ge(),
    a = G(),
    { shippingRequired: o } = z(),
    r = we(),
    l = ge(),
    d = ce(),
    y = D(
      () => [
        'PAYMENT_AUTHORIZATION',
        ...(o ? ['SHIPPING_ADDRESS', 'SHIPPING_OPTION'] : []),
      ],
      [o]
    );
  return D(() => {
    const u = Le(t);
    if (
      n.length === 0 ||
      !e ||
      !s ||
      (s?.length === 0 && o) ||
      u.paymentDue == null ||
      u.subtotal == null
    )
      return null;
    const g = s.map((c) => c.value);
    return {
      ...gt,
      allowedPaymentMethods: n,
      merchantInfo: e,
      callbackIntents: y,
      emailRequired: r,
      shippingAddressParameters: {
        allowedCountryCodes: g,
        phoneNumberRequired: a.isRequired('phone'),
      },
      shippingAddressRequired: o,
      shippingOptionRequired: o,
      transactionInfo: ue({ labels: l, i18nCurrency: d, ...u }),
    };
  }, [a, n, y, r, o, d, l, e, t, s]);
}
function Tt(t = !0) {
  const e = w(),
    [n] = ne(),
    [, s] = Me(),
    [, a] = He(),
    o = O(),
    { activeWalletSessionAtom: r } = se(),
    l = It(),
    d = Ve(C.GooglePay),
    y = ke(),
    P = Ue(C.GooglePay),
    u = Ye(C.GooglePay),
    g = n.status === 'available' ? n?.client ?? null : null;
  return R(() => {
    o.write(r, !0);
    try {
      if (
        (a('GOOGLE_PAY'),
        P(),
        g === null ||
          l === null ||
          l.callbackIntents == null ||
          l.callbackIntents.length === 0)
      ) {
        o.write(r, !1), s({ type: 'config_missing_required_fields' });
        return;
      }
      t &&
        y('acceleratedCheckoutStarted', {
          walletName: C.GooglePay,
          timestamp: new Date(),
        }),
        u(),
        d(k.Success);
    } catch (c) {
      throw (o.write(r, !1), c);
    }
    return g
      .loadPaymentData(l)
      .catch((c) => {
        switch (c.statusCode) {
          case 'CANCELED':
            d(k.Cancelled);
            break;
          case 'DEVELOPER_ERROR':
            d(k.Failure),
              s({ type: 'invalid_config' }),
              e.notify(new lt(`loadPaymentData failed: ${c.statusMessage}`));
            break;
        }
      })
      .finally(() => {
        o.write(r, !1);
      });
  }, [o, r, t, g, l, u, d, a, P, s, y, e]);
}
function me() {
  const t = O(),
    [e, n] = ae(),
    [, s] = oe(),
    a = G(),
    { email: o, shippingAddress: r, paymentLines: l } = B();
  return R(() => {
    const d = xe(l.peek());
    (l.value = d),
      (o.value = ''),
      n({ ...e, description: void 0 }),
      s(void 0),
      t.write(r, {
        city: void 0,
        address1: void 0,
        address2: void 0,
        company: void 0,
        firstName: void 0,
        lastName: void 0,
        name: void 0,
        phone: void 0,
        postalCode: void 0,
        coordinates: void 0,
        countryCode: a.defaultShippingDetails.country.code,
        zoneCode: a.defaultShippingDetails.zone.code,
      });
  }, [a.defaultShippingDetails, e, o, l, r, s, n, t]);
}
function Rt() {
  const t = ce(),
    e = q(),
    n = O(),
    { shippingAddress: s } = B(),
    [, a] = oe(),
    { negotiate: o } = re(),
    r = ge(),
    l = w(),
    d = me(),
    y = R(
      (i) =>
        i.reduce(
          (p, h, E) =>
            E === i.length - 1
              ? e(
                  'shipping.shipping_method_combinations.combination',
                  { rest: p, current: h },
                  '%{rest} and %{current}'
                )
              : e(
                  'shipping.shipping_method_combinations.with_separator',
                  { rest: p, current: h },
                  '%{rest}, %{current},'
                ),
          ''
        ),
      [e]
    ),
    P = D(
      () => ({
        businessDays: (i) =>
          e(
            'shipping.estimated_delivery_date',
            { count: i },
            { one: '%{count} business day', other: '%{count} business days' }
          ),
        businessDaysRange: (i, p) =>
          e(
            'shipping.estimated_delivery_date_range',
            { minimum: i, maximum: p },
            '%{minimum} to %{maximum} business days'
          ),
        subscriptionsOnlyShippingTitle: e(
          'shipping.subscription_shipping',
          'Subscription shipping'
        ),
        combineTwoShippingTitles: (i, p) =>
          e(
            'shipping.shipping_method_combinations.combination',
            { rest: i, current: p },
            '%{rest} and %{current}'
          ),
        combineMultipleShippingTitles: y,
      }),
      [e, y]
    ),
    u = R(
      ({ intent: i, trigger: p, result: h }) => {
        if (h.errors.some((f) => W.has(f.code)))
          return {
            reason: 'OTHER_ERROR',
            intent: i,
            message: e(
              'wallets.errors.detour.stock_problems',
              { walletName: e('brand.google_pay', 'Google Pay') },
              'Some items are no longer available. Close {{walletName}} and try again.'
            ),
          };
        if (h.errors.some((f) => f.code === F))
          return {
            reason: 'OTHER_ERROR',
            intent: i,
            message: e(
              'wallets.errors.detour.price_change',
              { walletName: e('brand.google_pay', 'Google Pay') },
              'Some item prices have changed. Close {{walletName}} to review your order and try again.'
            ),
          };
        if (h.errors.some((f) => qe.has(f.code)))
          return {
            reason: 'SHIPPING_ADDRESS_INVALID',
            intent: i,
            message: e(
              'wallets.errors.invalid.zone',
              'Enter a valid state / province'
            ),
          };
        if (h.errors.some((f) => $.includes(f.code)))
          return {
            reason: 'SHIPPING_ADDRESS_UNSERVICEABLE',
            intent: i,
            message: e(
              'wallets.errors.unsupported.address',
              'The merchant can’t deliver to this address'
            ),
          };
        if (!ze(h.negotiated.paymentMethods, 'GOOGLE_PAY'))
          return {
            reason: 'SHIPPING_ADDRESS_UNSERVICEABLE',
            intent: i,
            message: e(
              'wallets.errors.unsupported.wallet_is_unavailable',
              { walletName: e('brand.google_pay', 'Google Pay') },
              '{{walletName}} cannot be used with this address. Select a different address or close {{walletName}} to complete your purchase'
            ),
          };
        const N = p === 'INITIALIZE';
        if (h.errors.some((f) => Z.includes(f.code)) && !N)
          return {
            reason: 'SHIPPING_OPTION_INVALID',
            intent: i,
            message: e(
              'wallets.errors.outdated.shipping_method',
              'The shipping options have changed for your order. Review your selection.'
            ),
          };
      },
      [e]
    ),
    g = R(
      ({
        result: i,
        intent: p,
        trigger: h,
        resolve: E,
        reject: S,
        shippingOptionId: m,
      }) => {
        function _() {
          return S({
            reason: 'OTHER_ERROR',
            message: e(
              'wallets.errors.generic',
              { walletName: e('brand.google_pay', 'Google Pay') },
              'There was an issue with {{walletName}}. Try again or use a different payment method.'
            ),
            intent: p,
          });
        }
        switch (i.status) {
          case 'success': {
            if (i.negotiated.paymentDue == null)
              return l.notify(new U('Missing negotiated paymentDue')), _();
            const A = Be(i.negotiated.deliveryNext),
              N = Et({
                ...i.negotiated,
                labels: r,
                i18nCurrency: t,
                translations: P,
                selectedShippingId: m,
                deliveryMacros: A,
              });
            return (N.error = u({ intent: p, trigger: h, result: i })), E(N);
          }
          case 'throttled':
            return (
              d(),
              S({
                reason: 'OTHER_ERROR',
                message: e(
                  'wallets.errors.detour.queue',
                  { walletName: e('brand.google_pay', 'Google Pay') },
                  'You have been placed in a queue to checkout. Close {{walletName}} to continue.'
                ),
                intent: p,
              })
            );
          case 'denied':
          case 'alreadyCompleted':
            return d(), _();
          default:
            return (
              l.notify(new U(`Unhandled negotiation status: ${i.status}`)), _()
            );
        }
      },
      [d, u, t, r, l, e, P]
    ),
    c = R(
      (i, p) =>
        new Promise((h, E) => {
          a(void 0);
          const S = _t(i);
          n.write(s, S),
            o({
              silenceViolations: ['all'],
              fieldsToResolve: ['deliveryNext', 'taxes'],
              progression: !1,
              customizeNegotiation: (m) => X(m, S, 'GOOGLE_PAY'),
              onComplete: (m) =>
                g({
                  result: m,
                  intent: 'SHIPPING_ADDRESS',
                  trigger: p,
                  resolve: h,
                  reject: E,
                }),
            });
        }),
      [g, o, s, a, n]
    ),
    v = R(
      (i, p) =>
        new Promise((h, E) => {
          const S = We(Pt(i));
          a(S);
          const m = n.read(s).value;
          o({
            silenceViolations: ['all'],
            fieldsToResolve: ['deliveryNext', 'taxes'],
            progression: !1,
            customizeNegotiation: (_) => X(_, m, 'GOOGLE_PAY'),
            onComplete: (_) =>
              g({
                result: _,
                intent: 'SHIPPING_OPTION',
                trigger: p,
                resolve: h,
                reject: E,
                shippingOptionId: i,
              }),
          });
        }),
      [g, o, s, a, n]
    );
  return R(
    async (i) => {
      function p(m, _, A) {
        return { error: { reason: m, message: _, intent: A } };
      }
      const {
        shippingAddress: h,
        shippingOptionData: E,
        callbackTrigger: S,
      } = i;
      switch (S) {
        case 'INITIALIZE':
        case 'SHIPPING_ADDRESS':
          return c(h, S);
        case 'SHIPPING_OPTION':
          return E?.id
            ? v(E.id, S)
            : p(
                'SHIPPING_OPTION_INVALID',
                e(
                  'general.choose_delivery_strategy',
                  'Choose a delivery method'
                ),
                'SHIPPING_OPTION'
              );
        default:
          return (
            l.notify(new U(`Could not recognize the intent: ${S}`)),
            p(
              'OTHER_ERROR',
              e(
                'wallets.errors.generic',
                { walletName: e('brand.google_pay', 'Google Pay') },
                'There was an issue with {{walletName}}. Try again or use a different payment method.'
              ),
              'SHIPPING_ADDRESS'
            )
          );
      }
    },
    [c, v, l, e]
  );
}
class ye extends Fe {
  constructor(e, n) {
    super(), (this.logger = e), (this.translated = n);
  }
  get negotiationResultMapper() {
    return null;
  }
  get completionResultMapper() {
    return new $e(
      {
        success: ({ result: e }) =>
          'receipt' in e ? { action: 'submit' } : { action: 'abort' },
        rejected: ({ result: e, violationActions: n }) => {
          const a =
            'violations' in e && e.violations.length ? e.violations : [];
          this.getUnhandledErrors(a, n).forEach((r) => {
            this.logger.notify(
              new Y(
                `submitForCompletion in ${
                  this.isRedesign() ? 'redesign' : '3-page'
                } Google Pay failed due to unhandled error ${r.code}`
              ),
              { severity: 'error' }
            );
          });
          const { firstPaymentSheetAction: o } =
            this.getMergedPaymentSheetAction({
              resultViolations: a,
              violationActions: n,
            });
          return o || { action: 'abort' };
        },
        invalid: () => (
          this.logger.notify(
            new Y('Intercepted negotiation returned invalid'),
            { severity: 'error' }
          ),
          { action: 'abort' }
        ),
        denied: () => ({ action: 'abort' }),
        throttled: () => ({ action: 'abort' }),
        alreadyCompleted: () => ({ action: 'abort' }),
      },
      (e) => this.mapUnhandledStatus(e),
      () => this.getCompletionViolationActions()
    );
  }
  mapUnhandledStatus(e) {
    return (
      this.logger.notify(new Y(`Unhandled completion status: ${e.status}}`)),
      {
        action: 'show_error',
        errors: [
          {
            reason: 'OTHER_ERROR',
            intent: 'PAYMENT_AUTHORIZATION',
            message: this.translated.genericError,
          },
        ],
      }
    );
  }
}
class vt extends ye {
  constructor(e, n, s, a) {
    super(e, n), (this.state = s), (this.inMemoryGooglePayParts = a);
  }
  completionViolationActions = [
    { violations: [...W], generateAction: () => ({ action: 'abort' }) },
    { violations: [F], generateAction: () => ({ action: 'abort' }) },
    {
      violations: Z,
      generateAction: () => ({
        action: 'abort',
        effects: [
          () => {
            this.state.write(this.inMemoryGooglePayParts.paymentSheetError, {
              type: 'unusable_partial_address',
            });
          },
        ],
      }),
    },
    { violations: ie, generateAction: () => ({ action: 'abort' }) },
    {
      violations: $,
      generateAction: () => ({
        action: 'show_error',
        errors: [
          {
            reason: 'SHIPPING_ADDRESS_UNSERVICEABLE',
            intent: 'SHIPPING_ADDRESS',
            message: this.translated.addressUnserviceableError,
          },
        ],
      }),
    },
    {
      violations: Ze,
      generateAction: () => ({
        action: 'show_error',
        errors: [
          {
            reason: 'SHIPPING_ADDRESS_INVALID',
            intent: 'SHIPPING_ADDRESS',
            message: this.translated.addressLine2Error,
          },
        ],
      }),
    },
    {
      violations: le,
      generateAction: () => ({
        action: 'show_error',
        errors: [
          {
            reason: 'OTHER_ERROR',
            intent: 'SHIPPING_ADDRESS',
            message: this.translated.emailInvalidError,
          },
        ],
      }),
    },
  ];
  validateBilling(e) {
    return e.paymentMethodData.info?.billingAddress
      ? { shouldPersist: !0 }
      : {
          shouldPersist: !1,
          paymentSheetAction: {
            action: 'show_error',
            errors: [
              {
                reason: 'OTHER_ERROR',
                intent: 'PAYMENT_METHOD',
                message: this.translated.genericError,
              },
            ],
          },
        };
  }
  validateShipping(e, n, s) {
    const a = e.shippingAddress;
    return n
      ? a
        ? s && !a.address2
          ? {
              shouldPersist: !1,
              paymentSheetAction: {
                action: 'show_error',
                errors: [
                  {
                    reason: 'SHIPPING_ADDRESS_INVALID',
                    intent: 'SHIPPING_ADDRESS',
                    message: this.translated.addressLine2Error,
                  },
                ],
              },
            }
          : { shouldPersist: !0 }
        : {
            shouldPersist: !1,
            paymentSheetAction: {
              action: 'show_error',
              errors: [
                {
                  reason: 'OTHER_ERROR',
                  intent: 'PAYMENT_METHOD',
                  message: this.translated.genericError,
                },
              ],
            },
          }
      : { shouldPersist: !1 };
  }
  getCompletionViolationActions() {
    return this.completionViolationActions;
  }
  isRedesign() {
    return !1;
  }
}
class bt extends ye {
  completionViolationActions = [
    { violations: [...W], generateAction: () => ({ action: 'abort' }) },
    { violations: [F], generateAction: () => ({ action: 'abort' }) },
    { violations: ie, generateAction: () => ({ action: 'abort' }) },
    { violations: Z, generateAction: () => ({ action: 'abort' }) },
    { violations: $, generateAction: () => ({ action: 'abort' }) },
    { violations: Je, generateAction: () => ({ action: 'abort' }) },
    { violations: je, generateAction: () => ({ action: 'abort' }) },
    { violations: Ke, generateAction: () => ({ action: 'abort' }) },
    { violations: Qe, generateAction: () => ({ action: 'abort' }) },
    { violations: le, generateAction: () => ({ action: 'abort' }) },
    { violations: Xe, generateAction: () => ({ action: 'abort' }) },
  ];
  constructor(e, n) {
    super(e, n);
  }
  validateBilling(e) {
    return e.paymentMethodData.info?.billingAddress
      ? { shouldPersist: !0 }
      : {
          shouldPersist: !1,
          paymentSheetAction: {
            action: 'show_error',
            errors: [
              {
                reason: 'OTHER_ERROR',
                intent: 'PAYMENT_METHOD',
                message: this.translated.genericError,
              },
            ],
          },
        };
  }
  validateShipping(e, n) {
    const s = e.shippingAddress;
    return n
      ? s
        ? { shouldPersist: !0 }
        : {
            shouldPersist: !1,
            paymentSheetAction: {
              action: 'show_error',
              errors: [
                {
                  reason: 'OTHER_ERROR',
                  intent: 'PAYMENT_METHOD',
                  message: this.translated.genericError,
                },
              ],
            },
          }
      : { shouldPersist: !1 };
  }
  getCompletionViolationActions() {
    return this.completionViolationActions;
  }
  isRedesign() {
    return !0;
  }
}
function Dt() {
  const t = de(),
    e = q(),
    n = w(),
    s = O(),
    { inMemoryGooglePayParts: a } = se(),
    o = D(
      () => ({
        genericError: e(
          'wallets.errors.generic',
          { walletName: e('brand.google_pay', 'Google Pay') },
          'There was an issue with {{walletName}}. Try again or use a different payment method.'
        ),
        shippingMethodError: e(
          'wallets.errors.outdated.shipping_method',
          'The shipping options have changed for your order. Review your selection.'
        ),
        addressUnserviceableError: e(
          'wallets.errors.unsupported.address',
          'The merchant can’t deliver to this address'
        ),
        addressLine2Error: e(
          'wallets.errors.missing.address2',
          'Enter an apartment, suite, etc.'
        ),
        emailInvalidError: e(
          'wallets.errors.invalid.email',
          'Enter a valid email'
        ),
      }),
      [e]
    );
  return D(() => (t ? new bt(n, o) : new vt(n, o, s, a)), [n, t, o, s, a]);
}
function Nt() {
  const t = O(),
    { email: e, shippingAddress: n, billingAddress: s, paymentLines: a } = B(),
    [o, r] = ae(),
    [, l] = et(),
    { progress: d } = re(),
    y = G(),
    { shippingRequired: P } = z(),
    u = tt(),
    g = te(),
    c = de(),
    v = nt('googlePay'),
    i = T('GOOGLE_PAY'),
    p = Dt(),
    h = me(),
    E = st(),
    S = at();
  return R(
    (m) =>
      new Promise((_) => {
        const A = m.shippingAddress,
          N = m.paymentMethodData.info?.billingAddress,
          j = m.paymentMethodData,
          f = y.isRequired('address2'),
          L = p.validateBilling(m),
          M = p.validateShipping(m, P, f);
        if (L.paymentSheetAction) {
          H(L.paymentSheetAction);
          return;
        }
        if (M.paymentSheetAction) {
          H(M.paymentSheetAction);
          return;
        }
        L.shouldPersist && N && t.write(s, x(N)),
          M.shouldPersist &&
            A &&
            (E(
              {
                postalCode: A.postalCode,
                countryCode: A.countryCode,
                city: A.locality,
                zoneCode: A.administrativeArea,
              },
              'GOOGLE_PAY'
            ),
            t.write(n, x(A))),
          m.email && (e.value = m.email),
          r({ ...o, description: j.description });
        const Pe = a.peek(),
          {
            signature: Se,
            signedMessage: Ee,
            protocolVersion: _e,
          } = JSON.parse(m.paymentMethodData.tokenizationData.token),
          K = g.current.fields.paymentDue.peek();
        ((K && K.amount > 0) || u) &&
          (a.value = ot(Pe, {
            method: {
              type: 'wallet',
              name: 'GOOGLE_PAY',
              walletContent: {
                signature: Se,
                signedMessage: Ee,
                protocolVersion: _e,
                paymentMethodIdentifier: i?.paymentMethodIdentifier,
              },
            },
          })),
          d(
            (I) => {
              I.status === 'success' && l('GOOGLE_PAY'),
                (I.status === 'denied' || I.status === 'throttled') && h(),
                c &&
                  (I.status === 'rejected' || I.status === 'invalid') &&
                  (S?.dispatch('addressReplaced'), v());
              const V = I,
                Ae = p.completionResultMapper.mapResultToPaymentSheetAction(V);
              H(Ae);
            },
            { skipToCompletion: !0 }
          );
        function H(I) {
          switch ((I.effects?.forEach((V) => V()), I.action)) {
            case 'show_error':
              _({ transactionState: 'ERROR', error: I.errors?.[0] });
              return;
            default:
              _({ transactionState: 'SUCCESS' });
          }
        }
      }),
    [
      y,
      h,
      i?.paymentMethodIdentifier,
      P,
      u,
      c,
      g,
      p,
      o,
      d,
      s,
      e,
      a,
      n,
      r,
      l,
      S,
      t,
      v,
      E,
    ]
  );
}
function Gt() {
  const t = Rt(),
    e = Nt(),
    n = T('GOOGLE_PAY'),
    { shippingRequired: s } = z(),
    a = he(),
    [o, r] = ne(),
    l = rt(o.status),
    d = w(),
    y = it(),
    P = R(() => {
      try {
        const u = {
            environment: n?.environment,
            merchantInfo: a,
            paymentDataCallbacks: {
              onPaymentAuthorized: e,
              onPaymentDataChanged: s ? t : void 0,
            },
          },
          g = new google.payments.api.PaymentsClient(u);
        r({ status: 'available', client: g });
      } catch (u) {
        r({ status: 'error' }),
          d.notify(
            new dt(
              `Error initializing a PaymentsClient. Details: ${JSON.stringify(
                u,
                ['statusCode', 'statusMessage']
              )}`,
              { cause: u }
            )
          );
      }
    }, [n?.environment, d, s, a, e, t, r]);
  ee(() => {
    o.status === 'available' && l.current === 'available' && P(),
      (l.current = o.status);
  }, [P, o.status]),
    ee(() => {
      (async () => {
        if (!(o.status !== 'idle' || n == null)) {
          r({ status: 'loading' });
          try {
            await y({ wallet: 'GOOGLE_PAY', script: ct });
          } catch {
            r({ status: 'error' });
            return;
          }
          P();
        }
      })();
    }, [o, r, a, e, t, n, d, s, y, P]);
}
export { U as G, Gt as a, Ct as b, Tt as u };
