import {
  eJ as M,
  lN as k,
  at as B,
  c0 as m,
  cx as c,
  p9 as A,
  hS as h,
  pa as T,
  pb as V,
  T as _,
  pc as N,
  pd as C,
  lW as O,
  lX as q,
  lP as U,
  hX as j,
  a as F,
  bt as x,
  jf as w,
  e as v,
  eQ as Y,
  dE as G,
  d3 as H,
  f4 as z,
  iM as R,
  hR as S,
  ms as L,
  pe as J,
  iP as W,
  dt as X,
  q as D,
  iK as $,
  dD as K,
  dO as Q,
  pf as Z,
  pg as ee,
  dw as te,
  hE as ne,
  dv as se,
  ib as ae,
  cK as re,
  d as y,
  J as ie,
  eW as oe,
  A as de,
  cM as I,
  y as E,
  mk as le,
  gj as ue,
} from './app.js';
const Ie = () => {
    const e = M(),
      t = k(),
      n = B().paymentLines.value,
      s = m(c.userStoredPaymentMethods),
      r = m(c.selectedPaymentMethod);
    if (e) return t?.payment ? pe(r, s) : ce(n);
  },
  ce = (e) => {
    if (e?.length) return A(e) ? 'IDEAL' : 'CREDIT_CARD';
  },
  pe = (e, t) => {
    if (!(!e && !t.length))
      return (e && h(e)) || T(t) ? 'IDEAL' : 'CREDIT_CARD';
  },
  Ee = () => {
    const e = V();
    return _(
      () => (e === N.ShopPayExternal ? C.ShopPayExternal : C.CheckoutOne),
      [e]
    );
  };
function ge() {
  const e = M(),
    t = O(),
    n = q(),
    s = U(['CUSTOM', 'STORE_CREDIT']);
  return !e || t || n || s;
}
function Me({ children: e, closeButton: t, ...n }) {
  const r = j() ? 'fill' : void 0;
  return F(x, { blockSize: r, size: 'auto', ...n, children: e });
}
function Ae(e) {
  return !!(e?.status === 'failed' && e.statusCode && e.statusCode >= 500);
}
function ve({
  idealPaymentMethod: e,
  billingAddress: t,
  selectedLPMBillingAddress: n,
}) {
  return {
    paymentMethod: 'IDEAL',
    paymentAttributes: JSON.stringify({
      ...e.additionalParameters,
      bank: e.additionalParameters?.bank.toLowerCase(),
    }),
    paymentMethodIdentifier: e.paymentMethodIdentifier,
    billingAddress: t,
    addressId: n?.id,
  };
}
function Re(e, t = []) {
  const n = t.find(w);
  if (!(!h(e) || !n))
    return {
      type: 'local',
      paymentMethodIdentifier: n.paymentMethodIdentifier,
      name: 'IDEAL',
      additionalParameters: e.paymentAttributes,
    };
}
function ye(e, t, n, s) {
  return (
    !e && !t && n && s?.some((r) => r.type === 'local' && r.name === 'IDEAL')
  );
}
const Le = (e, t) => {
  if (e) return e;
  const n = A(t);
  if (n?.additionalParameters)
    return {
      id: n.paymentMethodIdentifier,
      paymentMethod: 'IDEAL',
      paymentAttributes: { bank: n.additionalParameters.bank },
      lastUsedAt: new Date().toISOString(),
    };
};
function De() {
  const e = v(),
    { value: t } = Y(),
    n = G(),
    s = H(),
    { postPurchaseEnabled: r } = z(),
    a = m(c.selectedPaymentMethod),
    i = m(c.paymentMethodOption),
    { hasViolations: d } = R(W),
    p = a && S(a) ? L(a.paymentAttributes.brand) : void 0,
    l = _(() => {
      if (i?.name !== 'SHOPIFY_INSTALLMENTS') {
        if (!a) return !0;
        if (S(a)) {
          if (d) return !1;
          const f = t
            ?.filter((u) => u.type === 'direct')
            ?.flatMap((u) => u.paymentBrands);
          if (f) {
            const u = J(a.paymentAttributes);
            return u ? f.includes(u) : void 0;
          }
        }
        return h(a) ? ye(r, s, n, t) : !0;
      }
    }, [a, t, d, n, s, r, i]),
    o = _(() => {
      if (a && l === !1) {
        if (S(a))
          return p
            ? e(
                'payment.brand_not_available',
                { brand: p },
                "This store doesn't accept {{brand}}. Please use a different card to pay."
              )
            : e(
                'payment.generic_incorrect_card_info',
                'Your payment details couldn’t be verified. Check your card details and try again.'
              );
        if (h(a))
          return s
            ? e(
                'shop_pay.payment_method_unavailable_with_subscriptions',
                'Payment method not available for subscriptions. Choose another payment method'
              )
            : e(
                'payment.shop_pay_ideal_unavailable_error',
                'iDEAL is not available for this order. Choose another payment method.'
              );
      }
    }, [l, a, p, e, s]);
  return {
    paymentMethods: t,
    isSelectedPaymentMethodSupported: l,
    notSupportedError: o,
    label: p,
  };
}
function ke() {
  const e = X();
  return {
    creditCardDisabled: D(
      (n) => {
        if (!n) return !1;
        const {
            expired: s,
            supportsInstallmentsInterestLoan: r,
            supportsInstallmentsSplitPayLoan: a,
          } = n,
          i = $(e.config?.availableLoanTypes, a, r);
        return !!(
          s ||
          (e.supported && e.paymentMethodSelected && !i) ||
          (e.paymentMethodMustSupportInterestBearingLoans && !r)
        );
      },
      [
        e.paymentMethodSelected,
        e.supported,
        e.paymentMethodMustSupportInterestBearingLoans,
        e?.config?.availableLoanTypes,
      ]
    ),
  };
}
const me = new Set(['PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN']);
function Be() {
  const e = v(),
    t = m(c.selectedPaymentMethod),
    n = K(t),
    { hasViolations: s } = R(me),
    r = Q({ shopPay: !1, default: !0 });
  let a = '';
  if (!s || r) return { message: a };
  if (n) {
    const i = L(n.brand);
    a = e(
      'payment.billing_address_invalid_phone',
      { label: i, last_digits: n.lastDigits },
      'Update the phone number in your billing address for {{label}} {{last_digits}} to continue.'
    );
  } else
    a = e(
      'payment.billing_address_invalid_phone_no_card',
      'Update the phone number in your billing address to continue.'
    );
  return { message: a };
}
function Te() {
  const [e] = Z(),
    [t] = ee(),
    { shippingRequired: n } = te(),
    [s] = ne(),
    [r] = se(),
    a = !!s?.requiresVerification,
    i = _(() => (s ? !r.some((l) => ae(l.address, s.address)) : !1), [s, r]);
  return (!n || a || i) && (t === 'email' || !e);
}
var b = ((e) => (
    (e.InterestEligibility = 'interest_bearing_checkout_eligibility'),
    (e.SplitPayEligibility = 'split_pay_checkout_eligibility'),
    (e.UserEligibility = 'user_eligibility'),
    (e.CheckoutEligibility = 'checkout_eligibility'),
    (e.InstallmentsRetryError = 'installments_retryable_error'),
    (e.InstallmentsPermanentRejection = 'installments_permanent_rejection'),
    e
  ))(b || {}),
  fe = ((e) => (
    (e.PointOfSale = 'point_of_sale'),
    (e.SpiBanner = 'spi_banner'),
    (e.ReturningSpiBuyer = 'returning_spi_buyer'),
    (e.SelectedSpi = 'selected_spi'),
    e
  ))(fe || {}),
  P = ((e) => (
    (e.Unknown = 'unknown'),
    (e.Rejected = 'rejected'),
    (e.Errored = 'errored'),
    (e.InvalidTermsCount = 'invalid_terms_count'),
    (e.InvalidRepaymentsCount = 'invalid_repayments_count'),
    (e.UserUnsynchronized = 'user_unsynchronized'),
    (e.InvalidShippingAddress = 'invalid_shipping_address'),
    e
  ))(P || {});
const g = [
  'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT',
  'DELIVERY_DELIVERY_LINE_DETAIL_CHANGED',
  'CARD_DECLINED',
  P.InvalidShippingAddress,
];
function Ve() {
  const { recordImmediately: e } = re(),
    [, t] = y(c.installmentsRejected),
    [, n] = y(c.installmentsRetryable),
    [s, r] = y(c.installmentsPayment),
    [, a] = y(c.installmentsAgreementError),
    { progress: i } = ie(),
    d = oe(),
    p = de(s),
    l = D(
      (o) => {
        const f = he(o);
        let u;
        _e(o)
          ? ((u = b.InstallmentsRetryError), n(!0))
          : ((u = b.InstallmentsPermanentRejection), n(!1)),
          Pe(o) && a(P.InvalidShippingAddress),
          e({
            schemaId: I.PayPaymentPageInstallments,
            payload: { eventType: u, success: !1, errorMessage: f },
          }),
          t(!0);
      },
      [e, t, n, a]
    );
  return (
    E(() => {
      !s ||
        p.current === s ||
        (i((o) => {
          o.status !== 'success' &&
            o.status !== 'alreadyCompleted' &&
            (l(o), r(void 0));
        }),
        (p.current = s));
    }, [s, l, i, r]),
    E(() => {
      if (d?.status !== 'failed') return;
      s && (l(d), r(void 0));
      const o = d.failure.type === 'payment' ? d.failure.code : d.failure.type;
      e({ schemaId: I.PayCheckoutError, payload: { errorType: o } });
    }, [d]),
    { onInstallmentsError: l }
  );
}
function he(e) {
  if (!e) return 'no_result';
  if ('errors' in e && e.errors.length > 0) {
    const t = e.errors.map((n) => n.code).join(', ');
    if (t) return t;
  }
  if ('failure' in e && e.failure) return `failed_receipt_${e.failure.type}`;
  if ('status' in e && e.status)
    return e.status === 'invalid'
      ? `error_result_invalid__${e.reasons.join('__')}`
      : `error_result_${e.status}`;
}
function _e(e) {
  if (!e) return !1;
  if ('failure' in e && e.failure) {
    const t = e.failure;
    return 'code' in t ? g.includes(t.code) : !1;
  }
  return 'violations' in e
    ? e.violations.some(({ code: t }) => g.includes(t))
    : !1;
}
function Pe(e) {
  return (
    e?.status === 'agreement_invalid' &&
    e.violations.some(({ code: t }) => t === P.InvalidShippingAddress)
  );
}
const Se = le('ShopPayInstallmentsContext');
function be(e) {
  const t = ue(Se);
  return y(t[e]);
}
function Ne() {
  return be('financingPlans');
}
export {
  P as I,
  fe as P,
  b as S,
  Te as a,
  Ee as b,
  ge as c,
  Se as d,
  Me as e,
  ke as f,
  De as g,
  Be as h,
  ye as i,
  Ve as j,
  Ne as k,
  Le as l,
  Re as m,
  ve as n,
  Ae as o,
  Ie as u,
};
