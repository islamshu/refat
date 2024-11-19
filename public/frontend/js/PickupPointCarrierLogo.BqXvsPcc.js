import {
  bJ as P,
  a as t,
  k as A,
  e as B,
  A as l,
  bK as E,
  q as U,
  y as M,
  ae as O,
  bL as z,
  ab as G,
  V as J,
  a8 as N,
  I as V,
} from './app.js';
const W = P(function (s, r) {
    return t('iframe', { ...s, ref: r });
  }),
  X = { Map: 'veGnT' },
  q =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/current-location-pin.BapvrdeV.svg',
  K =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/destination-location-pin.DwoZMqg_.svg',
  p = 'shopify_sandboxed_message:';
function H(e) {
  if (!(typeof e != 'string' || !e.startsWith(p)))
    try {
      return JSON.parse(e.replace(p, ''));
    } catch {}
}
function Q(e) {
  return `${p}${JSON.stringify(e)}`;
}
function x(e) {
  return e?.map((s) => {
    switch (s.type) {
      case 'current':
        return { ...s, image: q };
      case 'destination':
        return { ...s, image: K };
      default:
        return s;
    }
  });
}
const j = 200;
function ke({
  className: e,
  markers: s,
  options: r,
  title: _,
  mapId: F,
  blockSize: u = j,
  onMarkerSelect: f,
  handleBoundsChanged: m,
  handleCenterChanged: h,
  handleClick: d,
  handleDoubleClick: g,
  handleDrag: b,
  handleZoomChanged: T,
  handleDragEnd: R,
}) {
  const I = A(),
    C = B(),
    k = l(null),
    v = l(F ?? E()),
    w = l(!1),
    D = () => {
      a({ action: 'createMapAndMarkers', body: x(s), options: r }),
        (w.current = !0);
    },
    a = (n) => k.current?.contentWindow?.postMessage(Q(n), '*'),
    L = U(
      ({ data: n }) => {
        function o(S) {
          const i = S();
          i && i?.action && a(i);
        }
        const c = H(n);
        if (c?.id === v.current)
          switch (c?.action) {
            case 'ready':
              D();
              break;
            case 'marker':
              f?.(c?.body);
              break;
            case 'bounds_changed':
              o(() => m?.());
              break;
            case 'center_changed':
              o(() => h?.());
              break;
            case 'click':
              o(() => d?.(c?.body));
              break;
            case 'dblclick':
              o(() => g?.(c?.body));
              break;
            case 'drag':
              o(() => b?.());
              break;
            case 'zoom_changed':
              o(() => T?.());
              break;
            case 'dragend':
              o(() => R?.());
              break;
          }
      },
      [f, m, h, d, g, b, T]
    );
  return (
    M(
      () => (
        window.addEventListener('message', L),
        () => window.removeEventListener('message', L)
      )
    ),
    M(() => {
      w && a({ action: 'updateMarkers', body: x(s), options: r });
    }, [s, r]),
    t(W, {
      ref: k,
      title: _ ?? C('general.google_map_title', 'Google Map'),
      className: O(X.Map, e),
      src: I.sandboxGoogleMaps(v.current),
      style: u ? { blockSize: z(u) } : void 0,
    })
  );
}
const ve = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }],
    },
  ],
  Z =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-colissimo.1yFHbzUT.svg',
  $ =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-colissimo.CxWjVUu8.svg',
  Y =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-correos.B6JA4Sg_.svg',
  ee =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-correos.DHRxeQWp.svg',
  se =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-correos.BZokoSyh.svg',
  oe =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-mondial-relay.04frVi7X.svg',
  te =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-mondial-relay.CdTylaJx.svg',
  re =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-mondial-relay.DFe24aCF.svg',
  ce =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-colissimo.C-XQBcDy.svg',
  ae =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-chronopost.C1oiFajH.svg',
  ne =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-chronopost.TKRkq9_v.svg',
  ie =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-chronopost.DPQXXY3U.svg',
  le =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-evri.C4hOL_UU.svg',
  pe =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-evri.WlT4T36l.svg',
  ye =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-evri.DReFb6kT.svg',
  ue =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/carrier-poste-italiane.DThJRWBe.svg',
  fe =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/map-carrier-poste-italiane.DfqidTJc.svg',
  me =
    'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pin-carrier-poste-italiane.DvDScNXR.svg',
  y = {
    colissimo: { mapLogo: Z, fullLogo: $, pin: ce },
    correos: { mapLogo: ee, fullLogo: Y, pin: se },
    mondial_relay: { mapLogo: oe, fullLogo: te, pin: re },
    chronopost: { mapLogo: ne, fullLogo: ae, pin: ie },
    hermes_uk: { mapLogo: pe, fullLogo: le, pin: ye },
    poste_italiane: { mapLogo: fe, fullLogo: ue, pin: me },
  };
function he(e) {
  return !!de(e);
}
function de(e) {
  return y[e]?.mapLogo;
}
function we(e) {
  return y[e]?.pin;
}
function ge(e) {
  return y[e]?.fullLogo;
}
function be(e) {
  return !he(e.carrierCode) || e.fromDeliveryOptionGenerator
    ? e.carrierLogoUrl
    : ge(e.carrierCode);
}
function Le({ pickupLocation: e }) {
  const s = t('img', { src: be(e), alt: e.carrierName, height: '22' });
  return e.carrierCode
    ? t(V, {
        spacing: 'small400',
        blockAlignment: 'center',
        children: e.fromDeliveryOptionGenerator
          ? t(G, {
              children: [
                t(J, {
                  blockAlignment: 'center',
                  inlineAlignment: 'center',
                  minBlockSize: 22,
                  maxBlockSize: 22,
                  minInlineSize: 22,
                  maxInlineSize: 22,
                  border: 'base',
                  borderRadius: 'large',
                  overflow: 'hidden',
                  children: s,
                }),
                t(N, { size: 'small', children: e.carrierName }),
              ],
            })
          : s,
      })
    : null;
}
export { W as I, ke as M, Le as P, de as a, we as c, he as i, ve as m };
