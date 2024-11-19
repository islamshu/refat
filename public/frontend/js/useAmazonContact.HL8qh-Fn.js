const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'component-DeliveryMacros.CY8jUEmL.js',
      'app.YFeVIJ1k.js',
      'assets/app.whj6cDzT.css',
      'DeliveryMacro.DcQFe9i-.js',
      'SubscriptionGroupLine.G_tWFKH4.js',
      'SubscriptionPriceBreakdown.GhzR2flD.js',
      'assets/SubscriptionPriceBreakdown.Bqs0s4oM.css',
      'StackedMerchandisePreview.DNLssxMn.js',
      'assets/StackedMerchandisePreview._xnAOXmq.css',
    ])
) => i.map((i) => d[i]);
import {
  bH as Me,
  bI as be,
  _ as Re,
  aj as b,
  e as f,
  a as e,
  a7 as ee,
  a8 as h,
  ab as R,
  aB as xe,
  aO as x,
  ar as ne,
  mL as Ae,
  an as ie,
  q as _,
  au as ke,
  av as Fe,
  cP as He,
  cR as te,
  qN as Ve,
  m as Be,
  J as we,
  dS as Ue,
  h as Q,
  at as se,
  di as qe,
  aP as ze,
  cc as X,
  lE as Ge,
  cZ as $e,
  kV as We,
  y as K,
  T as Ye,
  D as je,
  p as Je,
  dp as Qe,
  e_ as Xe,
  qO as Ke,
  aT as Ze,
  dn as en,
  aV as nn,
  qP as tn,
  aU as sn,
  az as oe,
  ce as N,
  aS as on,
  ae as rn,
  hf as an,
  aQ as ln,
  V as C,
  ak as dn,
  jj as cn,
  d_ as pn,
  fL as un,
  jr as hn,
  cS as yn,
  c0 as vn,
} from './app.js';
const Cn = Me({
  displayName: 'DeliveryMacros',
  load: () =>
    be(() =>
      Re(
        () => import('./component-DeliveryMacros.CY8jUEmL.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
      )
    ),
  preload: !0,
  defer: 'render',
});
function gn() {
  const n = b(),
    i = f();
  return n
    ? null
    : e(R, {
        children: [
          e(ee, { spacing: 'small400' }),
          e(h, {
            children: i(
              'shipping.shipping_line_delivery_instructions',
              'Enter necessary information like door codes or drop-off instructions.'
            ),
          }),
        ],
      });
}
function mn({ displayAddInstructionsButton: n, onPress: i }) {
  const s = b(),
    r = f();
  return s
    ? n
      ? e(xe, {
          kind: 'plain',
          onPress: i,
          children: r(
            'shipping.add_delivery_instructions',
            'Add delivery instructions'
          ),
        })
      : null
    : e(h, {
        children: r(
          'shipping.shipping_line_delivery_phone',
          'You may be contacted with updates on your delivery.'
        ),
      });
}
const En = 'sqcDF',
  _n = 'z2IIo',
  fn = 'qi1py',
  Dn = 'pcf8k',
  M = {
    OnTop: En,
    LoadingOption: _n,
    LoadingOptionBorderNone: fn,
    LoadingOptionBorderFull: Dn,
  },
  Pn = new Set([
    'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED',
    'DELIVERY_OPTIONS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN',
  ]),
  On = new Set(['DELIVERY_OPTIONS_INSTRUCTIONS_INVALID']),
  re = (n, i) => {
    if (n.type === 'error') {
      for (const s of n.violations)
        if (!(s.__typename !== 'UnprocessableTermViolation' || !i.has(s.code)))
          return s.localizedMessage ?? s.nonLocalizedMessage;
    }
  };
function Ln(n, i = 'ONE_TIME_PURCHASE', s) {
  const r = f(),
    l = x(),
    d = ne(),
    a = Ae(i, s);
  return (
    ie(
      _(
        (c) => {
          const p = re(c, Pn);
          p && l.write(d, p);
        },
        [d, l]
      )
    ),
    ke(
      a,
      d,
      (c) => {
        const p = He(c);
        if (!(!n || !n.phoneRequired) && !p)
          return r(
            'field_errors.shipping_line_phone_invalid',
            'Enter a valid phone number'
          );
      },
      Fe.InvalidDeliveryMethodPhoneNumber
    ),
    { value: a, error: d, validated: te(a, d) }
  );
}
function In(n = 'ONE_TIME_PURCHASE', i) {
  const s = x(),
    r = ne(),
    l = Ve(n, i);
  return (
    ie(
      _(
        (d) => {
          const a = re(d, On);
          a && s.write(r, a);
        },
        [r, s]
      )
    ),
    { value: l, error: r, validated: te(l, r) }
  );
}
const Sn = 255;
function Mn({
  id: n,
  type: i = 'ONE_TIME_PURCHASE',
  methods: s,
  loadingAdditionalShippingRates: r = !1,
  isInSplitCartModal: l = !1,
}) {
  const { asyncDeliveryPromiseExperienceEnabled: d } = Be(),
    a = f(),
    { negotiate: c } = we(),
    { geolocation: p } = Ue(),
    [ae, le] = Q(p.country.code),
    { shippingAddress: D } = se(),
    P = x(),
    A = qe(),
    {
      deliveryExpectationLines: k,
      deliveryExpectationLinesLoading: de,
      status: ce,
    } = ze(),
    F = X('Checkout::ShippingMethodDetails::RenderAfter'),
    O = X('Checkout::ShippingMethodDetails::RenderExpanded'),
    [pe] = Ge(i, n),
    [L, H] = $e(i, n),
    {
      setInverseGroupDeliveryMethodHandle: V,
      getInverseGroupDeliveryMethodHandle: B,
    } = We(s, i),
    I = s.find((t) => t.handle === L),
    { validated: y, value: w, error: U } = Ln(I, i, n),
    { validated: g, value: q, error: z } = In(i, n),
    ue = b(),
    [G, he] = Q(!ue || g?.value !== void 0);
  let m = s;
  pe.includes('PICKUP_POINT') &&
    (m = m.filter(
      (t) =>
        t.pickupLocation?.type === 'PickupPointLocation' &&
        I?.pickupLocation?.type === 'PickupPointLocation' &&
        t.pickupLocation?.handle === I?.pickupLocation?.handle
    )),
    K(() => {
      const { phone: t } = D.fields,
        o = P.read(t).value;
      !y.value && o && y.onChange(o);
    }, []),
    K(() => {
      const { countryCode: t } = D.fields,
        o = P.read(t).value;
      o && le(o);
    }, [D, P]);
  const ye = Ye(
      () => ({
        state: { phone: w, instructions: q },
        errors: { phone: U, instructions: z },
      }),
      [w, U, q, z]
    ),
    $ = _(() => {
      y.clearError(), g.clearError();
    }, [y, g]),
    {
      optionList: { typographyStyle: W, border: ve = 'full' },
    } = je(),
    ge = _(
      ([t]) => {
        if (($(), H(t), A && n == null)) {
          const o = B(t);
          V(o);
        }
        l ||
          c({
            include: [
              'contactInfo',
              'shippingAddress',
              'merchandiseLines',
              'deliveryNext',
            ],
          });
      },
      [$, H, A, n, l, c, B, V]
    ),
    me = (t, o, u) => {
      const S = o || u,
        E = O.length > 0 && !l;
      return S
        ? e(Z, {
            children: [
              e(un, {
                children: [
                  o &&
                    e(C, {
                      children: [
                        e(hn, {
                          label: a(
                            'shipping.shipping_line_delivery_phone_label',
                            'Mobile phone number'
                          ),
                          countryCode: ae,
                          prefillCountryCode: !0,
                          ...y,
                        }),
                        e(ee, { spacing: 'small400' }),
                        e(mn, {
                          displayAddInstructionsButton: u && !G,
                          onPress: () => he(!0),
                        }),
                      ],
                    }),
                  u &&
                    G &&
                    e(C, {
                      children: [
                        e(yn, {
                          autoFocus: !0,
                          multiline: !0,
                          maxLength: Sn,
                          label: a(
                            'shipping.optional_shipping_line_delivery_instructions_label',
                            'Delivery instructions (optional)'
                          ),
                          ...g,
                        }),
                        e(gn, {}),
                      ],
                    }),
                ],
              }),
              E &&
                e(N, { extensions: O, options: { handle: t, isInModal: !1 } }),
            ],
          })
        : E
        ? e(N, {
            extensions: O,
            options: { handle: t, isInModal: !1 },
            render: (T) => e(Z, { children: T }),
          })
        : null;
    },
    Y = `${n ? `_${Je(n)}` : ''}`,
    Ee =
      i === 'ONE_TIME_PURCHASE'
        ? `shipping_methods${Y}`
        : `${i.toLowerCase()}_shipping_methods${Y}`,
    _e = F.length > 0,
    fe = m.length === 1;
  return e(cn, {
    ...ye,
    children: e('div', {
      className: M.OnTop,
      children: e(Qe, {
        id: Ee,
        title: a('general.choose_shipping_method', 'Choose a shipping method'),
        titleHidden: !0,
        selectedItems: L ? [L] : [],
        onChange: ge,
        hideRadioButton: fe,
        children: [
          m.map((t) => {
            const o = d || t.brandedPromise?.handle === Xe.BuyWithPrime,
              {
                showEstimatedDeliveryLabel: u,
                estimatedDeliveryLabelTitle: S,
                minDeliveryDate: E,
                maxDeliveryDate: T,
                brandedPromise: De,
              } = Ke(t, !!o, k, de, ce),
              {
                handle: v,
                description: j,
                cost: Pe,
                costAfterDiscounts: Oe,
                pickupLocation: J,
                estimatedTimeInTransit: Le,
                phoneRequired: Ie,
                acceptsInstructions: Se,
              } = t,
              Te = k?.find((Ce) => Ce.deliveryStrategyHandle === v),
              Ne = Ze({
                deliveryMethod: t,
                localDelivery:
                  t.methodType === 'LOCAL'
                    ? a('shipping.local_delivery', 'Local delivery')
                    : void 0,
              });
            return e(
              en,
              {
                id: v,
                renderDetailsWhenCollapsed: !0,
                details: me(v, Ie, Se) ?? void 0,
                primaryContent: e(R, {
                  children: [
                    o &&
                      e(nn, { deliveryMethod: t, deliveryExpectationLine: Te }),
                    !o &&
                      u &&
                      e(tn, {
                        timeInTransit: Le,
                        minDeliveryDateTime: E,
                        maxDeliveryDateTime: T,
                        title: S,
                      }),
                    j && !o && e(h, { appearance: 'subdued', children: j }),
                    J?.type === 'PickupInStoreLocation' &&
                      e(Tn, { pickupLocation: J }),
                  ],
                }),
                secondaryContent: e(sn, {
                  cost: Pe,
                  costAfterDiscounts: Oe,
                  styleOverrides: l
                    ? { textSize: 'small', freeTextLetterCase: 'uppercase' }
                    : {},
                }),
                tertiaryContent:
                  _e &&
                  e(oe, {
                    padding: ['small100', 'none', 'none', 'none'],
                    spacing: 'small100',
                    children: e(N, {
                      extensions: F,
                      options: { handle: v, isInModal: l },
                    }),
                  }),
                children: e(on, {
                  methodTitle: Ne,
                  brandedPromise: De,
                  typographyStyle: W,
                  asyncShopPromise: o,
                }),
              },
              v
            );
          }),
          r
            ? e('div', {
                className: rn([
                  M.LoadingOption,
                  M[an('LoadingOptionBorder', ve)],
                ]),
                children: e(ln, {
                  columns: ['auto', 'fill'],
                  blockAlignment: 'center',
                  spacing: 'base',
                  children: [
                    e(C, { children: e(dn, {}) }),
                    e(h, {
                      appearance: 'subdued',
                      size: 'small',
                      style: W,
                      children: a(
                        'shipping.loading_progressive_rates',
                        'Searching for more rates…'
                      ),
                    }),
                  ],
                }),
              })
            : null,
        ],
      }),
    }),
  });
}
function Tn({ pickupLocation: n }) {
  const i = pn(n.address, {
    hiddenFields: [
      'firstName',
      'lastName',
      'phone',
      'company',
      'countryCode',
      'postalCode',
    ],
  });
  return e(R, {
    children: [
      e(h, { appearance: 'subdued', size: 'small', children: i }),
      e(h, { appearance: 'subdued', size: 'small', children: n.instructions }),
    ],
  });
}
function Z({ children: n }) {
  return e(oe, { spacing: 'large200', children: n });
}
function bn() {
  const {
      email: n,
      shippingAddress: {
        fields: { firstName: i },
      },
    } = se(),
    s = n.value,
    r = vn(i);
  return s ? (r ? `${r} · ${s}` : s) : '';
}
export { Cn as D, Mn as S, bn as u };
