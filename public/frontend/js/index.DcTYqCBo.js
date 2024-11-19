const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'component-Captcha.CAHs51sT.js',
      'app.YFeVIJ1k.js',
      'assets/app.whj6cDzT.css',
      'ShopPayCaptcha.CoLvlF5Y.js',
      'assets/Captcha.BHCCpQV5.css',
    ])
) => i.map((i) => d[i]);
import {
  e as t,
  T as n,
  bG as o,
  bH as s,
  bI as i,
  _ as d,
} from './app.js';
const _ = new Map([
    ['INSUFFICIENT_FUNDS', 'insufficient_funds'],
    ['INVALID_PAYMENT_METHOD', 'cannot_verify'],
    ['FUNDING_ERROR', 'processing_error'],
    ['CANCELED_PAYPAL_BILLING_AGREEMENT', 'processing_error'],
    ['TOKEN_EXPIRED', 'processing_error'],
    ['INVALID_TOKEN', 'processing_error'],
    ['UNILATERAL_AUTH_ERROR', 'processing_error'],
    ['THIRD_PARTY_INTERNAL_ERROR', 'processing_error'],
    ['AUTHORIZATION_ERROR', 'processing_error'],
    ['INVALID_CURRENCY', 'processing_error'],
    ['INVALID_ITEM_TOTAL', 'processing_error'],
    ['UNPROCESSABLE_TRANSACTION', 'processing_error'],
    ['INVOICE_ALREADY_PAID', 'processing_error'],
    ['INCORRECT_NUMBER', 'cannot_verify'],
    ['INCORRECT_CVC', 'cannot_verify'],
    ['INCORRECT_ZIP', 'cannot_verify'],
    ['INCORRECT_ADDRESS', 'cannot_verify'],
    ['INCORRECT_PIN', 'cannot_verify'],
    ['AUTHENTICATION_ERROR', 'three_d_secure_failed'],
    ['INVALID_NUMBER', 'invalid_number'],
    ['INVALID_EXPIRY_DATE', 'invalid_expiry_date'],
    ['INVALID_CVC', 'invalid_cvc'],
    ['EXPIRED_CARD', 'expired_card'],
    ['CARD_DECLINED', 'card_declined'],
    ['CALL_ISSUER', 'call_issuer'],
    ['PICK_UP_CARD', 'pick_up_card'],
    ['TEST_MODE_LIVE_CARD', 'test_mode_live_card'],
    ['TRANSIENT_ERROR', 'transient_error'],
    ['AMOUNT_TOO_SMALL', 'amount_too_small'],
    ['INVALID_SHIPPING_ADDRESS', 'invalid_shipping_address'],
    ['MISSING_SHIPPING_ADDRESS', 'missing_shipping_address'],
    ['PUBLIC_PAYMENT_ERROR', 'generic_error'],
    ['SHOP_PAY_DECLINED', 'processing_error_checkout_as_guest'],
    [
      'SUCCESSFUL_OFFSITE_WITH_GIFT_CARD_ERROR',
      'successful_offsite_with_gift_card_error',
    ],
    ['PAYMENT_ABOVE_THRESHOLD', 'payment_above_threshold'],
    ['RISKY', 'risky'],
  ]),
  c = ['SHOP_PAY_DECLINED'];
function p(e) {
  const r = t();
  return n(() => {
    let a = 'generic_error';
    return (
      e && (a = _.get(e.code) || 'generic_error'),
      r(
        'payment_errors',
        {
          scope: a,
          ...(e && c.includes(e.code) && { checkout_as_guest_link: o() }),
        },
        {
          amount_too_small:
            'The minimum payment amount must be higher than $0.50 USD. Please try again with a higher amount.',
          available_methods_updated:
            'Available payment methods have been updated.',
          call_issuer:
            'Your card was declined. Use a different payment method or contact your bank for more information.',
          cannot_verify:
            'Your payment details couldn’t be verified. Check your card details and try again.',
          card_declined:
            'Your card was declined. Try again or use a different payment method.',
          checkout_amount_changed:
            "Your payment couldn't be processed because the amount due at checkout has changed. Please check your order and try again.",
          credit_card_processing:
            'Your payment can’t be processed for technical reasons. Try again in a few minutes or use a different payment method.',
          decision_rule_block:
            'There was an issue processing your payment. Please contact the store owner.',
          deferred_amount_changed:
            "Your payment couldn't be processed because the deferred payment amount has changed. Please check your order and try again.",
          deferred_date_changed:
            "Your payment couldn't be processed because the deferred payment date has changed. Please check your order and try again.",
          deferred_payment_not_allowed:
            'Deferred payments are not allowed. Please check your order and try again.',
          deferred_payment_required:
            'This order requires a deferred payment. Please check your order and try again.',
          development_store_order_limit_reached:
            'You’ve reached the limit for development store orders with this payment processor. To place another order, you’ll need to use a test payment gateway. Learn more about %{development_store_order_testing_docs_link}.',
          development_store_order_testing_docs_link:
            'testing orders in development stores',
          development_store_with_order_limit:
            'To place a test order, you’ll need to use a test payment gateway. Learn more about %{development_store_order_testing_docs_link}.',
          expired_card:
            'Your card has expired. Use a different payment method.',
          generic_error:
            'There was an issue processing your payment. Try again or use a different payment method.',
          insufficient_funds:
            'Your payment was declined due to insufficient funds. Try again or use a different payment method.',
          invalid_cvc: 'Enter a valid security code',
          invalid_expiry_date: 'Enter a valid expiration date',
          invalid_number: 'Enter a valid card number',
          invalid_shipping_address:
            'Your payment couldn’t be processed because we couldn’t find your shipping address. Check your shipping address and try again.',
          method_not_available:
            'The requested payment method is not available. Choose another payment method and try again.',
          missing_shipping_address:
            'Your payment couldn’t be processed because your shipping address is missing. Add a shipping address and try again.',
          multiple_deferred_payment_not_allowed:
            'Only one deferred payment allowed per request. Please check your request and try again.',
          order_total_changed:
            'Your order total has changed. Review and try again.',
          pay_later_failed:
            'There was an error processing your payment with Pay later. Choose another payment method and try again.',
          payment_above_threshold:
            'The payment amount is above the monetary limit for this region. Reduce the total and try again',
          payment_method_billing_address:
            "There was an issue with your selected payment method's billing address and you haven't been charged. Check the address and try again or use a different payment method.",
          payment_processing:
            'Your payment can’t be processed for technical reasons. Try again or use a different payment method.',
          payment_processing_no_retry:
            'Your payment can’t be processed for technical reasons. Please try a different payment method.',
          paypal_invalid_token:
            "PayPal wasn't available. Try again or use a different checkout option.",
          paypal_zero_amount:
            'You can’t use PayPal for %{amount} orders. Confirm your order is correct and check out without PayPal.',
          pick_up_card:
            'Your card was declined. Try again or use a different payment method.',
          processing_error:
            'There was an issue processing your payment. Try again or use a different payment method.',
          processing_error_checkout_as_guest:
            'There was an issue processing your payment. Try again with a different payment method or {{checkout_as_guest_link}}.',
          rejected_transaction:
            'Your payment was declined. Try again or use a different payment method.',
          risky:
            'There was an issue processing your payment. Try again or use a different payment method.',
          selected_payment_method:
            "There was an issue with your selected payment method and you haven't been charged. Try again or use a different payment method.",
          shipping_must_match_billing:
            'Billing address must match shipping address. Please use a different payment method.',
          subscription_agreement_blank:
            'To buy a subscription your payment details need to be saved. To continue, confirm that you agree or remove subscription items from you order.',
          successful_offsite_with_gift_card_error:
            'There was an issue processing your gift card payment. Try again or use a different payment method.',
          test_mode_live_card:
            'This store can’t accept real orders or real payments.',
          three_d_secure_failed:
            'Your payment couldn’t be verified. Try again or use a different payment method.',
          three_d_secure_failed_duplicate:
            "The credit card's 3D Secure authentication failed because another is already in progress.",
          three_d_secure_throttled:
            'Too many attempts; please wait before trying again',
          transient_error:
            'There was a problem processing your payment. Try refreshing this page or check your internet connection.',
        }
      )
    );
  }, [r, e]);
}
const y = s({
  load: () =>
    i(() =>
      d(
        () => import('./component-Captcha.CAHs51sT.js'),
        __vite__mapDeps([0, 1, 2, 3, 4])
      )
    ),
});
export { y as C, p as u };
