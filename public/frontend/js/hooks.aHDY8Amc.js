import {
  al as $e,
  dS as ue,
  q as k,
  fo as b,
  fp as we,
  fq as xe,
  fr as Ie,
  fs as ce,
  ft as de,
  T as q,
  fu as j,
  cc as G,
  r as ke,
  h as I,
  l as qe,
  v as Te,
  fv as Fe,
  cp as Ce,
  fc as Pe,
  m as ze,
  fw as Le,
  fh as De,
  u as Me,
  fx as Oe,
  cM as oe,
  p as M,
  fy as Re,
  y as O,
} from './app.js';
function Ue(e) {
  const t = $e(),
    { geolocation: s } = ue();
  return k(
    async (n, u, d) => {
      const o = await e(n, u, d);
      return (
        t.histogram({
          name: 'prediction_duration',
          value: o.duration.end - o.duration.start,
          attributes: { buyerCountry: s.country.code },
        }),
        o.data
      );
    },
    [e, t, s.country.code]
  );
}
function Ne(e) {
  if (typeof e != 'object')
    throw new b(
      `formattedAddress must be an object: received type ${typeof e}`
    );
  const t = ae(e);
  if (t.length) throw new b(t.join('; '));
  return e;
}
function _e(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new b('An array of address suggestions must be defined');
  const s = e.slice(0, 5);
  for (const [
    n,
    { id: u, label: d, matchedSubstrings: o, formattedAddress: i },
  ] of s.entries()) {
    if (
      (S(d) ||
        t.push(
          `label is required and must be a non-empty string: received ${typeof d} in suggestions[${n}]`
        ),
      u &&
        !S(u) &&
        t.push(
          `id must be a non-empty string: received ${typeof u} in suggestions[${n}]`
        ),
      o)
    )
      if (Array.isArray(o))
        for (const [f, { offset: c, length: y }] of o.entries())
          typeof c != 'number' &&
            t.push(
              `offset must be a number: received type ${typeof c} in matchedSubstrings[${f}] for suggestions[${n}]`
            ),
            typeof y != 'number' &&
              t.push(
                `length must be a number: received type ${typeof y} in matchedSubstrings[${f}] for suggestions[${n}]`
              );
      else
        t.push(
          `matchedSubstrings must be an array: received type ${typeof o} in suggestions[${n}]`
        );
    if (i)
      if (typeof i == 'object') {
        const f = ae(i);
        for (const c of f) t.push(`${c} for suggestions[${n}]`);
      } else
        t.push(
          `formattedAddress must be an object: received type ${typeof i} in suggestions[${n}]`
        );
    if (t.length) throw new b(t.join('; '));
  }
  return s;
}
function ae(e) {
  const t = [],
    {
      address1: s,
      address2: n,
      city: u,
      company: d,
      provinceCode: o,
      zip: i,
      countryCode: f,
      latitude: c,
      longitude: y,
    } = e;
  return (
    s &&
      !S(s) &&
      t.push(
        `address1 must be a non-empty string: received type ${typeof s} in formattedAddress`
      ),
    n &&
      !S(n) &&
      t.push(
        `address2 must be a non-empty string: received type ${typeof n} in formattedAddress`
      ),
    u &&
      !S(u) &&
      t.push(
        `city must be a non-empty string: received type ${typeof u} in formattedAddress`
      ),
    d &&
      !S(d) &&
      t.push(
        `company must be a non-empty string: received type ${typeof d} in formattedAddress`
      ),
    o &&
      !S(o) &&
      t.push(
        `provinceCode must be a non-empty string: received type ${typeof o} in formattedAddress`
      ),
    i &&
      !S(i) &&
      t.push(
        `zip must be a non-empty string: received type ${typeof i} in formattedAddress`
      ),
    f &&
      !we(f) &&
      t.push(
        `countryCode must be a valid alpha-2 country code: received "${f}" in formattedAddress`
      ),
    c &&
      (typeof c != 'number'
        ? t.push(
            `latitude must be a number: received type ${typeof c} in formattedAddress`
          )
        : (c < -90 || c > 90) &&
          t.push(
            `latitude must be between -90 and 90: received ${c} in formattedAddress`
          )),
    y &&
      (typeof y != 'number'
        ? t.push(
            `longitude must be a number: received type ${typeof y} in formattedAddress`
          )
        : (y < -180 || y > 180) &&
          t.push(
            `longitude must be between -180 and 180: received ${y} in formattedAddress`
          )),
    t
  );
}
function S(e) {
  return typeof e == 'string' || e instanceof String ? e.trim().length > 0 : !1;
}
function le(e) {
  return new Promise((t, s) => {
    xe(e.approvalScopes, Ie.CustomerPersonalData) ||
      s(
        new ce(
          `Extension ${e.id} at target \`${e.extensionPoint.target}\` is missing required access to read customer personal data.`
        )
      ),
      t();
  });
}
function fe(e, t, s) {
  switch (!0) {
    case e instanceof ce:
      ne(e, t);
      break;
    case e instanceof b:
      if (t.type === 'persisted') ne(e, t);
      else {
        const {
          extensionPoint: { target: n },
        } = t;
        s(new b(`[${n}] ${e.message}`));
      }
      break;
    default:
      s(e);
  }
}
function ne(e, t) {
  const s = `[${t.extensionPoint.target}] ${e.name}: ${e.message}`;
  console.error(s);
}
function Be(e) {
  return e.map((t, s) => {
    const { id: n, label: u, matchedSubstrings: d, formattedAddress: o } = t;
    return {
      internalId: `extension-suggestion-${s}`,
      matchedSubstrings: je(d),
      label: u,
      ...(n && { id: n }),
      ...(o && { formattedAddress: o }),
    };
  });
}
function je(e) {
  return e?.length ? e.sort(Ge) : [{ offset: 0, length: 0 }];
}
function Ge(e, t) {
  return e.offset - t.offset;
}
function Ve(e) {
  const t = de(e),
    s = q(() => e[0], [e]);
  return k(
    (n, u) =>
      s
        ? new Promise((d, o) => {
            u.aborted && o(new j(u.reason)),
              le(s)
                .then(() => t({ signal: u, target: { ...n } }))
                .then((i) => i?.suggestions || [])
                .then((i) => _e(i))
                .then((i) => Be(i))
                .then((i) => d(i))
                .catch((i) => {
                  fe(i, s, o), d([]);
                }),
              u.addEventListener('abort', () => {
                o(new j(u.reason));
              });
          })
        : Promise.resolve([]),
    [t, s]
  );
}
function Xe(e) {
  const t = de(e),
    s = q(() => e[0], [e]),
    n = G('purchase.address-autocomplete.suggest'),
    u = q(() => n.length > 0, [n]);
  return k(
    (d) =>
      s
        ? new Promise((o, i) => {
            Qe(u)
              .then(() => le(s))
              .then(() => {
                const { internalId: f, ...c } = d;
                return t({ target: { selectedSuggestion: c } });
              })
              .then((f) => {
                const c = f?.formattedAddress || {};
                o({ formattedAddress: Ne(c) });
              })
              .catch((f) => {
                fe(f, s, i), o({ formattedAddress: {} });
              });
          })
        : Promise.resolve({ formattedAddress: {} }),
    [t, s, u]
  );
}
function Qe(e) {
  return new Promise((t, s) => {
    if (e) t();
    else {
      const n =
        'A purchase.address-autocomplete.suggest extension is required for a purchase.address-autocomplete.format-suggestion extension';
      s(new b(n));
    }
  });
}
const Ye = 300,
  re = class extends Error {
    name = 'AddressAutocompleteError';
  };
function Ke({
  addressType: e,
  countryCode: t,
  field: s,
  initialAddressQuery: n = '',
  provider: u = 'autocomplete-service',
  allowAllCountries: d,
}) {
  const o = ke(),
    [i, f] = I(n),
    [c, y] = I(i),
    [ge, pe] = I(!1),
    [R, T] = I([]),
    [V, X] = I([]),
    [Q, me] = I(!1),
    A = qe(),
    [C, he] = I(ie(A.sourceId)),
    Y = Te(),
    { geolocation: p } = ue(),
    { search: ye, fetchAddress: H } = Fe(),
    v = Ce(),
    P = Pe(),
    { id: E } = ze(),
    { details: z } = Le(t),
    L = De(),
    J = Me(Oe),
    K = void 0,
    D = G('purchase.address-autocomplete.suggest'),
    Ae = Ve(D),
    W = q(() => D.length > 0, [D]),
    U = G('purchase.address-autocomplete.format-suggestion'),
    Z = Xe(U),
    ee = q(() => U.length > 0, [U]),
    te = k(
      (m, a, g, h) => {
        const $ = L.value.defaultAttributes?.uniqToken || '',
          w = {
            schemaId: oe.AutocompleteSuggestion,
            payload: {
              shopId: parseInt(M(E), 10),
              checkoutToken: A.checkoutSessionIdentifier || '',
              uniqueToken: $,
              provider: a[0]?.completionService,
              context:
                m === 'shipping' ? 'Shipping address' : 'Billing address',
              territoryCode: t ?? p.country.code,
              locale: o,
              query: g,
              requestProvider: h,
              requestLatitude: p.coordinates?.latitude,
              requestLongitude: p.coordinates?.longitude,
              addressIds: a.map((x) => x.addressId),
            },
          };
        P?.record(w);
      },
      [
        t,
        p.country.code,
        o,
        E,
        A.checkoutSessionIdentifier,
        L.value.defaultAttributes?.uniqToken,
        P,
        p.coordinates,
      ]
    ),
    N = q(() => W && s && B(e), [s, e, W]),
    _ = q(() => N || d || Re(t || p.country.code), [d, t, p.country.code, N]);
  O(() => {
    const m = setTimeout(() => {
      v && y(i);
    }, Ye);
    return () => {
      clearTimeout(m);
    };
  }, [v, i]),
    O(() => {
      f(n);
    }, [n]),
    O(() => {
      _ || T([]);
    }, [_]);
  const be = Ue(ye);
  O(() => {
    async function m(g) {
      try {
        if (g.length <= 1) {
          T([]);
          return;
        }
        const h = await be(
          g,
          {
            locale: o,
            countryCode: t ?? p.country.code,
            location: p.coordinates,
            requestToken: C,
            shopId: M(E),
            sourceId: A.sourceId || '',
          },
          K
        );
        v.current &&
          (T(h), h?.length > 0 && !Q && B(e) && (te(e, h, g, K), me(!0)));
      } catch (h) {
        console.warn(`Unable to fetch predictions: ${h}`), T([]);
      }
    }
    async function a({ query: g, field: h, signal: $ }) {
      function w(r) {
        return r.map(({ label: l, matchedSubstrings: F, internalId: Ee }) => ({
          addressId: Ee,
          completionService: 'AUTOCOMPLETE_EXTENSION',
          description: l,
          matchedSubstrings: F,
        }));
      }
      function x(r) {
        switch (r) {
          case 'address1':
            return 'address1';
          case 'postalCode':
            return 'zip';
          default:
            throw new re(`Unsupported Address Autocomplete field: ${r}`);
        }
      }
      if (g.length <= 1) {
        X([]), T([]);
        return;
      }
      try {
        const r = await Ae(
          { value: g, field: x(h), selectedCountryCode: t },
          $
        );
        v.current && (X(r), T(w(r)));
      } catch (r) {
        if (D[0].type === 'local')
          if (r instanceof j)
            console.warn('AddressAutocompleteSignalAbortedError: ', r.message);
          else throw r;
      }
    }
    if (_ && ge)
      if (N) {
        const g = new AbortController();
        return (
          a({ query: c, field: s, addressType: e, signal: g.signal }),
          () => g.abort('The query was debounced')
        );
      } else m(c);
  }, [c, o, C, te, Q]);
  const se = k(
      (m, a, g, h) => {
        const $ = z?.zones.find((l) => l.code === a.zoneCode)?.name || void 0,
          w = L.value.defaultAttributes?.uniqToken,
          x = g.findIndex((l) => l.addressId === m) + 1,
          r = {
            shopId: parseInt(M(E), 10),
            checkoutToken: A.checkoutSessionIdentifier || '',
            uniqueToken: w,
            address1: a.address1,
            address2: a.address2,
            city: a.city,
            zone: $,
            latitude: a.coordinates?.latitude,
            longitude: a.coordinates?.longitude,
            zip: a.postalCode,
            territoryCode: t ?? p.country.code,
            position: x,
            query: c,
            context: h === 'shipping' ? 'Shipping address' : 'Billing address',
            locale: o,
            requestLatitude: p.coordinates?.latitude,
            requestLongitude: p.coordinates?.longitude,
          };
        P?.record({ schemaId: oe.AutocompleteSelection, payload: r });
      },
      [
        z,
        L.value.defaultAttributes?.uniqToken,
        E,
        A.checkoutSessionIdentifier,
        t,
        p.country.code,
        p.coordinates,
        c,
        o,
        P,
      ]
    ),
    Se = k(
      async (m, a, g, h) => {
        function $(r) {
          const l = V.find((F) => F.internalId === r);
          return (
            l ||
              Y.notify(
                new re(
                  'Could not find selected suggestion in extension suggestions.'
                )
              ),
            l
          );
        }
        async function w(r) {
          if (ee && r) return (await Z(r)).formattedAddress;
          const l = new b(
            'The address fields could not be auto-populated. Please provide a `formattedAddress` for the selected suggestion or implement the `purchase.address-autocomplete.format-suggestion` extension.'
          );
          console.error(`${l.name}: ${l.message}`);
        }
        async function x(r) {
          const l = $(r),
            F = l?.formattedAddress || (await w(l));
          return He(F);
        }
        try {
          let r;
          if (a === 'AUTOCOMPLETE_EXTENSION') r = await x(m);
          else {
            const l = J && !!z?.extendedFormatting?.edit;
            (r = await H(m, {
              locale: o,
              requestToken: C,
              completionService: a,
              shopId: M(E),
              sourceId: A.sourceId || '',
              extendedFields: !g && l,
            })),
              v.current && (he(ie(A.sourceId)), B(e) && se(m, r, R, e));
          }
          v.current && h(r);
        } catch (r) {
          if (r instanceof b) throw r;
          console.warn(`Unable to select prediction: ${r}`);
        }
      },
      [
        o,
        C,
        E,
        A.sourceId,
        H,
        v,
        e,
        se,
        R,
        ee,
        V,
        Z,
        Y,
        J,
        z?.extendedFormatting,
      ]
    ),
    ve = k((m, a = !0) => {
      f(m), pe(a);
    }, []);
  return {
    value: i,
    debouncedValue: c,
    setValue: ve,
    predictions: R,
    selectPrediction: Se,
    provider: u,
  };
}
function ie(e) {
  return `${e}-${Date.now()}`;
}
function He(e) {
  return {
    address1: e?.address1,
    address2: e?.address2,
    city: e?.city,
    company: e?.company,
    zoneCode: e?.provinceCode,
    postalCode: e?.zip,
    coordinates:
      e?.latitude && e?.longitude
        ? { latitude: e.latitude, longitude: e.longitude }
        : void 0,
  };
}
function B(e) {
  return e === 'billing' || e === 'shipping';
}
export { Ke as u };
