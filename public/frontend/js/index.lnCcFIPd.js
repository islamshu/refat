import {
  ei as _t,
  ej as Et,
  q as B,
  kW as Oe,
  T as X,
  y as z,
  A as Y,
  ae as st,
  a as x,
  ab as kt,
  h as et,
  bJ as Le,
  w as te,
  kX as Pe,
  kY as rn,
  dJ as sn,
  kZ as an,
  k_ as he,
  k$ as cn,
  l0 as ln,
  l1 as un,
  _ as I,
  l2 as dn,
  l3 as fn,
  l4 as me,
  l5 as Yt,
  ac as Dt,
} from './app.js';
const Ie = _t({
    autoOpened: !1,
    dispatch: () => {
      throw new Error(
        'Invalid attempt to call dispatch outside of AuthorizeStateProvider'
      );
    },
    loaded: !1,
    modalDismissable: !1,
    modalVisible: !1,
    sessionDetected: !1,
  }),
  se = () => Et(Ie),
  Me = _t({
    client: void 0,
    leaveBreadcrumb: () => {
      throw new Error(
        'Invalid attempt to call leaveBreadcrumb outside of context.'
      );
    },
    notify: () => {
      throw new Error('Invalid attempt to call notify outside of context.');
    },
  }),
  St = () => {
    const t = Et(Me);
    if (!t)
      throw new Error(
        'Invalid attempt to use useBugsnag outside of BugsnagProvider.'
      );
    return t;
  },
  pn = {
    analyticsData: { analyticsTraceId: '' },
    getTrekkieAttributes: async () => Promise.resolve({}),
    produceMonorailEvent: () => {
      throw new Error(
        'Invalid attempt to call produceMonorailEvent outside of context.'
      );
    },
    trackModalStateChange: () => {
      throw new Error(
        'Invalid attempt to call trackModalStateChange outside of context.'
      );
    },
    trackPageImpression: async () => {
      throw new Error(
        'Invalid attempt to call trackPageImpression outside of context.'
      );
    },
    trackUserAction: () => {
      throw new Error(
        'Invalid attempt to call trackUserAction outside of context.'
      );
    },
  },
  De = _t(pn),
  hn = () => Et(De),
  mn = {
    recordCounter: () => {
      throw new Error(
        'Invalid attempt to call recordCounter outside of context.'
      );
    },
    recordGauge: () => {
      throw new Error(
        'Invalid attempt to call recordGauge outside of context.'
      );
    },
    recordHistogram: () => {
      throw new Error(
        'Invalid attempt to call recordHistogram outside of context.'
      );
    },
    client: void 0,
  },
  ze = _t(mn),
  Ne = () => Et(ze),
  gn = {
    addEventListener: () => {},
    analytics: {},
    btoa: () => '',
    clearTimeout: () => {},
    CSS: { supports: (t, e) => !1 },
    customElements: {},
    devicePixelRatio: 1,
    getComputedStyle: (t) => ({}),
    HTMLElement: {},
    innerHeight: 0,
    innerWidth: 0,
    localStorage: {
      getItem() {
        throw new Error('localStorage is not available');
      },
      setItem() {
        throw new Error('localStorage is not available');
      },
      removeItem() {
        throw new Error('localStorage is not available');
      },
    },
    sessionStorage: {
      getItem() {
        throw new Error('sessionStorage is not available');
      },
      setItem() {
        throw new Error('sessionStorage is not available');
      },
      removeItem() {
        throw new Error('sessionStorage is not available');
      },
    },
    location: {
      assign: () => {},
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      search: '',
    },
    matchMedia: () => ({ matches: !1 }),
    open: () => {},
    PublicKeyCredential: {
      isConditionalMediationAvailable() {
        return Promise.resolve(!1);
      },
    },
    removeEventListener: () => {},
    screen: { availWidth: 0, height: 0, orientation: { type: '' }, width: 0 },
    screenLeft: 0,
    screenTop: 0,
    screenX: 0,
    screenY: 0,
    scrollTo: () => {},
    setTimeout: () => 0,
    Shopify: {},
    ShopifyAnalytics: {},
    top: { addEventListener: () => {}, removeEventListener: () => {} },
    trekkie: {},
    URL,
    visualViewport: {},
  },
  A = typeof window > 'u' ? gn : window,
  Xt = A?.location?.hostname?.match(/([a-z,-]*[.]){2}(eu|us|asia).spin.dev/),
  Rt = Xt && Xt.length > 0 ? Xt[0] : null,
  wn = A.location.origin,
  Ve = Rt ? `https://shop-server.${Rt}` : 'https://shop.app',
  Fe = Rt ? `https://pay-shopify-com.${Rt}` : 'https://pay.shopify.com',
  yn = {
    activeElement: null,
    addEventListener: () => {},
    body: {},
    cookie: '',
    createElement: () => {},
    createTextNode: () => {},
    documentElement: {
      clientHeight: 0,
      clientWidth: 0,
      lang: '',
      style: { overflow: '', removeProperty: () => {} },
    },
    getElementById: () => null,
    head: { appendChild: () => {} },
    location: void 0,
    querySelector: () => {},
    querySelectorAll: () => [],
    removeEventListener: () => {},
  },
  K = typeof document > 'u' ? yn : document,
  bn = A.HTMLElement,
  ae = (t) => {
    const e = A.HTMLElement;
    A.HTMLElement = bn;
    const n = t();
    return (A.HTMLElement = e), n;
  },
  vn = (t) => ae(() => K.createElement(t)),
  xn = (t, e) => {
    ae(() => {
      customElements.define(t, e);
    });
  },
  _n = (t) => ae(() => Reflect.construct(HTMLElement, [], t)),
  je = _t({ devMode: !1, element: null, instanceId: '' }),
  Ct = () => Et(je);
function ce() {
  const { notify: t } = St(),
    { element: e } = Ct();
  return B(
    (o, r, i = !1) => {
      if (!e) {
        t(
          new Error(
            'dispatchEvent called without a reference to the custom element.'
          )
        );
        return;
      }
      e.dispatchEvent(
        new CustomEvent(o, {
          bubbles: i,
          cancelable: !1,
          composed: !0,
          detail: r,
        })
      );
    },
    [e, t]
  );
}
function En(t) {
  return t
    .replace(/([a-z0-9])([A-Z])/g, (e, n, o) => `${n}-${o.toLowerCase()}`)
    .replace(/[\s_]+/g, '-');
}
function kn(t) {
  return t.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`).replace(/^_/, '');
}
class Lt extends Error {
  constructor(e, n, o = Oe()) {
    super(e), (this.name = n), (this.analyticsTraceId = o);
    const r = kn(n);
    (this.analyticsTraceId = o), (this.code = r), (this.name = n);
  }
}
function Sn(t, e) {
  try {
    const n = new A.URL(t).host.split('.').reverse(),
      o = new A.URL(e).host.split('.').reverse();
    for (let r = 0; r < Math.min(n.length, o.length); r++)
      if (n[r] !== o[r]) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function ur(t) {
  return typeof t != 'string' || !t
    ? !1
    : RegExp(/^[^@]+@[^@]+\.[^@]{2,}$/i).test(t);
}
function Cn(t, e) {
  return t.source === e;
}
function Tn({ allowedOrigins: t, destination: e = A, handler: n, source: o }) {
  const r = X(() => new Set(), []);
  z(
    () => (
      r.add(n),
      () => {
        r.delete(n);
      }
    ),
    [n, r]
  );
  const i = B(
      (d) => {
        r.forEach((h) => h(d));
      },
      [r]
    ),
    s = B(
      (d) => {
        if (Cn(d, o.current?.contentWindow || null)) {
          if (!t.some((h) => Sn(h, d.origin))) {
            console.error('Origin mismatch for message event', d);
            return;
          }
          i(d.data);
        }
      },
      [t, i, o]
    ),
    c = B(() => {
      e.removeEventListener('message', s, !1);
    }, [e, s]);
  z(
    () => (
      e.addEventListener('message', s, !1),
      () => {
        c();
      }
    ),
    [e, c, s]
  );
  const a = B(
    async (d, h) => {
      let p;
      return new Promise((f, w) => {
        function m() {
          w(new Lt('Abort signal received', 'AbortSignalReceivedError'));
        }
        h?.aborted && m(),
          (p = (y) => {
            y.type === d && (h?.removeEventListener('abort', m), f(y));
          }),
          r.add(p),
          h?.addEventListener('abort', m);
      }).finally(() => {
        r.delete(p);
      });
    },
    [r]
  );
  return { destroy: c, waitForMessage: a };
}
function Rn({ includeCore: t, source: e, storefrontOrigin: n, ...o }) {
  const r = ce(),
    i = B(
      async (a) => {
        const {
          onAuthorizeStepChanged: d,
          onClose: h,
          onComplete: p,
          onConfirmSuccess: l,
          onCustomFlowSideEffect: f,
          onDiscountSaved: w,
          onEmailChangeRequested: m,
          onError: y,
          onLeadCaptureLoaded: k,
          onLoaded: b,
          onPopUpOpened: _,
          onProcessingStatusUpdated: E,
          onResizeIframe: v,
          onRestarted: O,
          onShopUserMatched: T,
          onShopUserNotMatched: W,
          onUserVerified: F,
          onVerificationStepChanged: j,
          onPromptContinue: M,
        } = o;
        switch (a.type) {
          case 'authorize_step_changed':
            d?.(a);
            break;
          case 'close_requested':
            h?.();
            break;
          case 'completed': {
            const {
              avatar: D,
              email: H,
              givenNameFirstInitial: P,
              loggedIn: L,
              shouldFinalizeLogin: $,
            } = a;
            p && (await p(a)),
              r('completed', a),
              L &&
                $ &&
                r(
                  'storefront:signincompleted',
                  {
                    avatar: (() => {
                      const S = vn('shop-user-avatar'),
                        N = P || H?.[0] || '';
                      return (
                        S.setAttribute('src', D || ''),
                        S.setAttribute('initial', N),
                        S
                      );
                    })(),
                  },
                  !0
                );
            break;
          }
          case 'confirm_success':
            l?.();
            break;
          case 'custom_flow_side_effect':
            f?.();
            break;
          case 'discount_saved':
            w?.();
            break;
          case 'email_change_requested':
            m?.();
            break;
          case 'error':
            y?.(a),
              r('error', { code: a.code, message: a.message, email: a.email });
            break;
          case 'loaded':
            r('loaded', a), 'loginTitle' in a ? k?.(a) : b?.(a);
            break;
          case 'pop_up_opened':
            _?.(a), r('popuploading', a);
            break;
          case 'processing_status_updated':
            E?.();
            break;
          case 'resize_iframe':
            v?.(a);
            break;
          case 'restarted':
            O?.(), r('restarted');
            break;
          case 'shop_user_matched':
            T?.(a);
            break;
          case 'shop_user_not_matched':
            W?.(a);
            break;
          case 'user_verified':
            F?.(a);
            break;
          case 'verification_step_changed':
            j?.(a);
            break;
          case 'prompt_continue':
            M?.();
            break;
        }
      },
      [r, o]
    ),
    s = X(() => [Ve, Fe, ...(t ? [wn] : []), ...(n ? [n] : [])], [t, n]);
  return Tn({ allowedOrigins: s, handler: i, source: e });
}
const ge = {
    code: 'temporarily_unavailable',
    message: 'Shop login is temporarily unavailable',
  },
  An = 1e4;
function On() {
  const t = ce(),
    e = Y(null),
    n = B(() => {
      e.current && (clearTimeout(e.current), (e.current = null));
    }, []);
  return {
    initLoadTimeout: B(() => {
      n(),
        (e.current = setTimeout(() => {
          t('error', { message: ge.message, code: ge.code }), n();
        }, An));
    }, [n, t]),
    clearLoadTimeout: n,
  };
}
function Ln(t) {
  const e = Y(t);
  return (
    z(() => {
      e.current = t;
    }),
    e.current
  );
}
function Kt({ contentWindow: t, event: e }) {
  if (!t) return;
  [Ve, Fe].forEach((o) => {
    t.postMessage(e, o);
  });
}
const we = ({ iframe: t, src: e }) => {
    const n = t?.parentNode;
    !n ||
      !t ||
      (n.removeChild(t),
      t.setAttribute('src', ''),
      t.setAttribute('src', e),
      n.appendChild(t));
  },
  bt = Math.min,
  ft = Math.max,
  $t = Math.round,
  zt = Math.floor,
  ct = (t) => ({ x: t, y: t }),
  Pn = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  In = { start: 'end', end: 'start' };
function ee(t, e, n) {
  return ft(t, bt(e, n));
}
function Pt(t, e) {
  return typeof t == 'function' ? t(e) : t;
}
function pt(t) {
  return t.split('-')[0];
}
function It(t) {
  return t.split('-')[1];
}
function $e(t) {
  return t === 'x' ? 'y' : 'x';
}
function le(t) {
  return t === 'y' ? 'height' : 'width';
}
function vt(t) {
  return ['top', 'bottom'].includes(pt(t)) ? 'y' : 'x';
}
function ue(t) {
  return $e(vt(t));
}
function Mn(t, e, n) {
  n === void 0 && (n = !1);
  const o = It(t),
    r = ue(t),
    i = le(r);
  let s =
    r === 'x'
      ? o === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : o === 'start'
      ? 'bottom'
      : 'top';
  return e.reference[i] > e.floating[i] && (s = Wt(s)), [s, Wt(s)];
}
function Dn(t) {
  const e = Wt(t);
  return [ne(t), e, ne(e)];
}
function ne(t) {
  return t.replace(/start|end/g, (e) => In[e]);
}
function zn(t, e, n) {
  const o = ['left', 'right'],
    r = ['right', 'left'],
    i = ['top', 'bottom'],
    s = ['bottom', 'top'];
  switch (t) {
    case 'top':
    case 'bottom':
      return n ? (e ? r : o) : e ? o : r;
    case 'left':
    case 'right':
      return e ? i : s;
    default:
      return [];
  }
}
function Nn(t, e, n, o) {
  const r = It(t);
  let i = zn(pt(t), n === 'start', o);
  return (
    r && ((i = i.map((s) => s + '-' + r)), e && (i = i.concat(i.map(ne)))), i
  );
}
function Wt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Pn[e]);
}
function Vn(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function We(t) {
  return typeof t != 'number'
    ? Vn(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Ht(t) {
  const { x: e, y: n, width: o, height: r } = t;
  return {
    width: o,
    height: r,
    top: n,
    left: e,
    right: e + o,
    bottom: n + r,
    x: e,
    y: n,
  };
}
function ye(t, e, n) {
  let { reference: o, floating: r } = t;
  const i = vt(e),
    s = ue(e),
    c = le(s),
    a = pt(e),
    d = i === 'y',
    h = o.x + o.width / 2 - r.width / 2,
    p = o.y + o.height / 2 - r.height / 2,
    l = o[c] / 2 - r[c] / 2;
  let f;
  switch (a) {
    case 'top':
      f = { x: h, y: o.y - r.height };
      break;
    case 'bottom':
      f = { x: h, y: o.y + o.height };
      break;
    case 'right':
      f = { x: o.x + o.width, y: p };
      break;
    case 'left':
      f = { x: o.x - r.width, y: p };
      break;
    default:
      f = { x: o.x, y: o.y };
  }
  switch (It(e)) {
    case 'start':
      f[s] -= l * (n && d ? -1 : 1);
      break;
    case 'end':
      f[s] += l * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Fn = async (t, e, n) => {
  const {
      placement: o = 'bottom',
      strategy: r = 'absolute',
      middleware: i = [],
      platform: s,
    } = n,
    c = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let d = await s.getElementRects({ reference: t, floating: e, strategy: r }),
    { x: h, y: p } = ye(d, o, a),
    l = o,
    f = {},
    w = 0;
  for (let m = 0; m < c.length; m++) {
    const { name: y, fn: k } = c[m],
      {
        x: b,
        y: _,
        data: E,
        reset: v,
      } = await k({
        x: h,
        y: p,
        initialPlacement: o,
        placement: l,
        strategy: r,
        middlewareData: f,
        rects: d,
        platform: s,
        elements: { reference: t, floating: e },
      });
    (h = b ?? h),
      (p = _ ?? p),
      (f = { ...f, [y]: { ...f[y], ...E } }),
      v &&
        w <= 50 &&
        (w++,
        typeof v == 'object' &&
          (v.placement && (l = v.placement),
          v.rects &&
            (d =
              v.rects === !0
                ? await s.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: r,
                  })
                : v.rects),
          ({ x: h, y: p } = ye(d, l, a))),
        (m = -1));
  }
  return { x: h, y: p, placement: l, strategy: r, middlewareData: f };
};
async function He(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: r, platform: i, rects: s, elements: c, strategy: a } = t,
    {
      boundary: d = 'clippingAncestors',
      rootBoundary: h = 'viewport',
      elementContext: p = 'floating',
      altBoundary: l = !1,
      padding: f = 0,
    } = Pt(e, t),
    w = We(f),
    y = c[l ? (p === 'floating' ? 'reference' : 'floating') : p],
    k = Ht(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(c.floating))),
        boundary: d,
        rootBoundary: h,
        strategy: a,
      })
    ),
    b =
      p === 'floating'
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(c.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(_)))
      ? (await (i.getScale == null ? void 0 : i.getScale(_))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    v = Ht(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: b,
            offsetParent: _,
            strategy: a,
          })
        : b
    );
  return {
    top: (k.top - v.top + w.top) / E.y,
    bottom: (v.bottom - k.bottom + w.bottom) / E.y,
    left: (k.left - v.left + w.left) / E.x,
    right: (v.right - k.right + w.right) / E.x,
  };
}
const jn = (t) => ({
    name: 'arrow',
    options: t,
    async fn(e) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: i,
          platform: s,
          elements: c,
          middlewareData: a,
        } = e,
        { element: d, padding: h = 0 } = Pt(t, e) || {};
      if (d == null) return {};
      const p = We(h),
        l = { x: n, y: o },
        f = ue(r),
        w = le(f),
        m = await s.getDimensions(d),
        y = f === 'y',
        k = y ? 'top' : 'left',
        b = y ? 'bottom' : 'right',
        _ = y ? 'clientHeight' : 'clientWidth',
        E = i.reference[w] + i.reference[f] - l[f] - i.floating[w],
        v = l[f] - i.reference[f],
        O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
      let T = O ? O[_] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(O)))) &&
        (T = c.floating[_] || i.floating[w]);
      const W = E / 2 - v / 2,
        F = T / 2 - m[w] / 2 - 1,
        j = bt(p[k], F),
        M = bt(p[b], F),
        D = j,
        H = T - m[w] - M,
        P = T / 2 - m[w] / 2 + W,
        L = ee(D, P, H),
        $ =
          !a.arrow &&
          It(r) != null &&
          P !== L &&
          i.reference[w] / 2 - (P < D ? j : M) - m[w] / 2 < 0,
        S = $ ? (P < D ? P - D : P - H) : 0;
      return {
        [f]: l[f] + S,
        data: {
          [f]: L,
          centerOffset: P - L - S,
          ...($ && { alignmentOffset: S }),
        },
        reset: $,
      };
    },
  }),
  $n = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'flip',
        options: t,
        async fn(e) {
          var n, o;
          const {
              placement: r,
              middlewareData: i,
              rects: s,
              initialPlacement: c,
              platform: a,
              elements: d,
            } = e,
            {
              mainAxis: h = !0,
              crossAxis: p = !0,
              fallbackPlacements: l,
              fallbackStrategy: f = 'bestFit',
              fallbackAxisSideDirection: w = 'none',
              flipAlignment: m = !0,
              ...y
            } = Pt(t, e);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const k = pt(r),
            b = vt(c),
            _ = pt(c) === c,
            E = await (a.isRTL == null ? void 0 : a.isRTL(d.floating)),
            v = l || (_ || !m ? [Wt(c)] : Dn(c)),
            O = w !== 'none';
          !l && O && v.push(...Nn(c, m, w, E));
          const T = [c, ...v],
            W = await He(e, y),
            F = [];
          let j = ((o = i.flip) == null ? void 0 : o.overflows) || [];
          if ((h && F.push(W[k]), p)) {
            const P = Mn(r, s, E);
            F.push(W[P[0]], W[P[1]]);
          }
          if (
            ((j = [...j, { placement: r, overflows: F }]),
            !F.every((P) => P <= 0))
          ) {
            var M, D;
            const P = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
              L = T[P];
            if (L)
              return {
                data: { index: P, overflows: j },
                reset: { placement: L },
              };
            let $ =
              (D = j
                .filter((S) => S.overflows[0] <= 0)
                .sort((S, N) => S.overflows[1] - N.overflows[1])[0]) == null
                ? void 0
                : D.placement;
            if (!$)
              switch (f) {
                case 'bestFit': {
                  var H;
                  const S =
                    (H = j
                      .filter((N) => {
                        if (O) {
                          const V = vt(N.placement);
                          return V === b || V === 'y';
                        }
                        return !0;
                      })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((V) => V > 0)
                          .reduce((V, G) => V + G, 0),
                      ])
                      .sort((N, V) => N[1] - V[1])[0]) == null
                      ? void 0
                      : H[0];
                  S && ($ = S);
                  break;
                }
                case 'initialPlacement':
                  $ = c;
                  break;
              }
            if (r !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
async function Wn(t, e) {
  const { placement: n, platform: o, elements: r } = t,
    i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = pt(n),
    c = It(n),
    a = vt(n) === 'y',
    d = ['left', 'top'].includes(s) ? -1 : 1,
    h = i && a ? -1 : 1,
    p = Pt(e, t);
  let {
    mainAxis: l,
    crossAxis: f,
    alignmentAxis: w,
  } = typeof p == 'number'
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
  return (
    c && typeof w == 'number' && (f = c === 'end' ? w * -1 : w),
    a ? { x: f * h, y: l * d } : { x: l * d, y: f * h }
  );
}
const Hn = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: 'offset',
        options: t,
        async fn(e) {
          var n, o;
          const { x: r, y: i, placement: s, middlewareData: c } = e,
            a = await Wn(e, t);
          return s === ((n = c.offset) == null ? void 0 : n.placement) &&
            (o = c.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Bn = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'shift',
        options: t,
        async fn(e) {
          const { x: n, y: o, placement: r } = e,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (y) => {
                  let { x: k, y: b } = y;
                  return { x: k, y: b };
                },
              },
              ...a
            } = Pt(t, e),
            d = { x: n, y: o },
            h = await He(e, a),
            p = vt(pt(r)),
            l = $e(p);
          let f = d[l],
            w = d[p];
          if (i) {
            const y = l === 'y' ? 'top' : 'left',
              k = l === 'y' ? 'bottom' : 'right',
              b = f + h[y],
              _ = f - h[k];
            f = ee(b, f, _);
          }
          if (s) {
            const y = p === 'y' ? 'top' : 'left',
              k = p === 'y' ? 'bottom' : 'right',
              b = w + h[y],
              _ = w - h[k];
            w = ee(b, w, _);
          }
          const m = c.fn({ ...e, [l]: f, [p]: w });
          return { ...m, data: { x: m.x - n, y: m.y - o } };
        },
      }
    );
  };
function Bt() {
  return typeof window < 'u';
}
function Tt(t) {
  return Be(t) ? (t.nodeName || '').toLowerCase() : '#document';
}
function J(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function ot(t) {
  var e;
  return (e = (Be(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Be(t) {
  return Bt() ? t instanceof Node || t instanceof J(t).Node : !1;
}
function Q(t) {
  return Bt() ? t instanceof Element || t instanceof J(t).Element : !1;
}
function nt(t) {
  return Bt() ? t instanceof HTMLElement || t instanceof J(t).HTMLElement : !1;
}
function be(t) {
  return !Bt() || typeof ShadowRoot > 'u'
    ? !1
    : t instanceof ShadowRoot || t instanceof J(t).ShadowRoot;
}
function Mt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: r } = tt(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
    !['inline', 'contents'].includes(r)
  );
}
function Un(t) {
  return ['table', 'td', 'th'].includes(Tt(t));
}
function Ut(t) {
  return [':popover-open', ':modal'].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function de(t) {
  const e = fe(),
    n = Q(t) ? tt(t) : t;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!e && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((o) =>
      (n.willChange || '').includes(o)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((o) =>
      (n.contain || '').includes(o)
    )
  );
}
function qn(t) {
  let e = lt(t);
  for (; nt(e) && !xt(e); ) {
    if (de(e)) return e;
    if (Ut(e)) return null;
    e = lt(e);
  }
  return null;
}
function fe() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function xt(t) {
  return ['html', 'body', '#document'].includes(Tt(t));
}
function tt(t) {
  return J(t).getComputedStyle(t);
}
function qt(t) {
  return Q(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function lt(t) {
  if (Tt(t) === 'html') return t;
  const e = t.assignedSlot || t.parentNode || (be(t) && t.host) || ot(t);
  return be(e) ? e.host : e;
}
function Ue(t) {
  const e = lt(t);
  return xt(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : nt(e) && Mt(e)
    ? e
    : Ue(e);
}
function At(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = Ue(t),
    i = r === ((o = t.ownerDocument) == null ? void 0 : o.body),
    s = J(r);
  if (i) {
    const c = oe(s);
    return e.concat(
      s,
      s.visualViewport || [],
      Mt(r) ? r : [],
      c && n ? At(c) : []
    );
  }
  return e.concat(r, At(r, [], n));
}
function oe(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function qe(t) {
  const e = tt(t);
  let n = parseFloat(e.width) || 0,
    o = parseFloat(e.height) || 0;
  const r = nt(t),
    i = r ? t.offsetWidth : n,
    s = r ? t.offsetHeight : o,
    c = $t(n) !== i || $t(o) !== s;
  return c && ((n = i), (o = s)), { width: n, height: o, $: c };
}
function pe(t) {
  return Q(t) ? t : t.contextElement;
}
function yt(t) {
  const e = pe(t);
  if (!nt(e)) return ct(1);
  const n = e.getBoundingClientRect(),
    { width: o, height: r, $: i } = qe(e);
  let s = (i ? $t(n.width) : n.width) / o,
    c = (i ? $t(n.height) : n.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: s, y: c }
  );
}
const Yn = ct(0);
function Ye(t) {
  const e = J(t);
  return !fe() || !e.visualViewport
    ? Yn
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Xn(t, e, n) {
  return e === void 0 && (e = !1), !n || (e && n !== J(t)) ? !1 : e;
}
function ht(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(),
    i = pe(t);
  let s = ct(1);
  e && (o ? Q(o) && (s = yt(o)) : (s = yt(t)));
  const c = Xn(i, n, o) ? Ye(i) : ct(0);
  let a = (r.left + c.x) / s.x,
    d = (r.top + c.y) / s.y,
    h = r.width / s.x,
    p = r.height / s.y;
  if (i) {
    const l = J(i),
      f = o && Q(o) ? J(o) : o;
    let w = l,
      m = oe(w);
    for (; m && o && f !== w; ) {
      const y = yt(m),
        k = m.getBoundingClientRect(),
        b = tt(m),
        _ = k.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x,
        E = k.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      (a *= y.x),
        (d *= y.y),
        (h *= y.x),
        (p *= y.y),
        (a += _),
        (d += E),
        (w = J(m)),
        (m = oe(w));
    }
  }
  return Ht({ width: h, height: p, x: a, y: d });
}
function Kn(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: r } = t;
  const i = r === 'fixed',
    s = ot(o),
    c = e ? Ut(e.floating) : !1;
  if (o === s || (c && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    d = ct(1);
  const h = ct(0),
    p = nt(o);
  if (
    (p || (!p && !i)) &&
    ((Tt(o) !== 'body' || Mt(s)) && (a = qt(o)), nt(o))
  ) {
    const l = ht(o);
    (d = yt(o)), (h.x = l.x + o.clientLeft), (h.y = l.y + o.clientTop);
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - a.scrollLeft * d.x + h.x,
    y: n.y * d.y - a.scrollTop * d.y + h.y,
  };
}
function Gn(t) {
  return Array.from(t.getClientRects());
}
function re(t, e) {
  const n = qt(t).scrollLeft;
  return e ? e.left + n : ht(ot(t)).left + n;
}
function Zn(t) {
  const e = ot(t),
    n = qt(t),
    o = t.ownerDocument.body,
    r = ft(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
    i = ft(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + re(t);
  const c = -n.scrollTop;
  return (
    tt(o).direction === 'rtl' && (s += ft(e.clientWidth, o.clientWidth) - r),
    { width: r, height: i, x: s, y: c }
  );
}
function Jn(t, e) {
  const n = J(t),
    o = ot(t),
    r = n.visualViewport;
  let i = o.clientWidth,
    s = o.clientHeight,
    c = 0,
    a = 0;
  if (r) {
    (i = r.width), (s = r.height);
    const d = fe();
    (!d || (d && e === 'fixed')) && ((c = r.offsetLeft), (a = r.offsetTop));
  }
  return { width: i, height: s, x: c, y: a };
}
function Qn(t, e) {
  const n = ht(t, !0, e === 'fixed'),
    o = n.top + t.clientTop,
    r = n.left + t.clientLeft,
    i = nt(t) ? yt(t) : ct(1),
    s = t.clientWidth * i.x,
    c = t.clientHeight * i.y,
    a = r * i.x,
    d = o * i.y;
  return { width: s, height: c, x: a, y: d };
}
function ve(t, e, n) {
  let o;
  if (e === 'viewport') o = Jn(t, n);
  else if (e === 'document') o = Zn(ot(t));
  else if (Q(e)) o = Qn(e, n);
  else {
    const r = Ye(t);
    o = { ...e, x: e.x - r.x, y: e.y - r.y };
  }
  return Ht(o);
}
function Xe(t, e) {
  const n = lt(t);
  return n === e || !Q(n) || xt(n)
    ? !1
    : tt(n).position === 'fixed' || Xe(n, e);
}
function to(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = At(t, [], !1).filter((c) => Q(c) && Tt(c) !== 'body'),
    r = null;
  const i = tt(t).position === 'fixed';
  let s = i ? lt(t) : t;
  for (; Q(s) && !xt(s); ) {
    const c = tt(s),
      a = de(s);
    !a && c.position === 'fixed' && (r = null),
      (
        i
          ? !a && !r
          : (!a &&
              c.position === 'static' &&
              !!r &&
              ['absolute', 'fixed'].includes(r.position)) ||
            (Mt(s) && !a && Xe(t, s))
      )
        ? (o = o.filter((h) => h !== s))
        : (r = c),
      (s = lt(s));
  }
  return e.set(t, o), o;
}
function eo(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: r } = t;
  const s = [
      ...(n === 'clippingAncestors'
        ? Ut(e)
          ? []
          : to(e, this._c)
        : [].concat(n)),
      o,
    ],
    c = s[0],
    a = s.reduce((d, h) => {
      const p = ve(e, h, r);
      return (
        (d.top = ft(p.top, d.top)),
        (d.right = bt(p.right, d.right)),
        (d.bottom = bt(p.bottom, d.bottom)),
        (d.left = ft(p.left, d.left)),
        d
      );
    }, ve(e, c, r));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function no(t) {
  const { width: e, height: n } = qe(t);
  return { width: e, height: n };
}
function oo(t, e, n) {
  const o = nt(e),
    r = ot(e),
    i = n === 'fixed',
    s = ht(t, !0, i, e);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const a = ct(0);
  if (o || (!o && !i))
    if (((Tt(e) !== 'body' || Mt(r)) && (c = qt(e)), o)) {
      const f = ht(e, !0, i, e);
      (a.x = f.x + e.clientLeft), (a.y = f.y + e.clientTop);
    } else r && (a.x = re(r));
  let d = 0,
    h = 0;
  if (r && !o && !i) {
    const f = r.getBoundingClientRect();
    (h = f.top + c.scrollTop), (d = f.left + c.scrollLeft - re(r, f));
  }
  const p = s.left + c.scrollLeft - a.x - d,
    l = s.top + c.scrollTop - a.y - h;
  return { x: p, y: l, width: s.width, height: s.height };
}
function Gt(t) {
  return tt(t).position === 'static';
}
function xe(t, e) {
  if (!nt(t) || tt(t).position === 'fixed') return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return ot(t) === n && (n = n.ownerDocument.body), n;
}
function Ke(t, e) {
  const n = J(t);
  if (Ut(t)) return n;
  if (!nt(t)) {
    let r = lt(t);
    for (; r && !xt(r); ) {
      if (Q(r) && !Gt(r)) return r;
      r = lt(r);
    }
    return n;
  }
  let o = xe(t, e);
  for (; o && Un(o) && Gt(o); ) o = xe(o, e);
  return o && xt(o) && Gt(o) && !de(o) ? n : o || qn(t) || n;
}
const ro = async function (t) {
  const e = this.getOffsetParent || Ke,
    n = this.getDimensions,
    o = await n(t.floating);
  return {
    reference: oo(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function io(t) {
  return tt(t).direction === 'rtl';
}
const so = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kn,
  getDocumentElement: ot,
  getClippingRect: eo,
  getOffsetParent: Ke,
  getElementRects: ro,
  getClientRects: Gn,
  getDimensions: no,
  getScale: yt,
  isElement: Q,
  isRTL: io,
};
function ao(t, e) {
  let n = null,
    o;
  const r = ot(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), (n = null);
  }
  function s(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), i();
    const { left: d, top: h, width: p, height: l } = t.getBoundingClientRect();
    if ((c || e(), !p || !l)) return;
    const f = zt(h),
      w = zt(r.clientWidth - (d + p)),
      m = zt(r.clientHeight - (h + l)),
      y = zt(d),
      b = {
        rootMargin: -f + 'px ' + -w + 'px ' + -m + 'px ' + -y + 'px',
        threshold: ft(0, bt(1, a)) || 1,
      };
    let _ = !0;
    function E(v) {
      const O = v[0].intersectionRatio;
      if (O !== a) {
        if (!_) return s();
        O
          ? s(!1, O)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      _ = !1;
    }
    try {
      n = new IntersectionObserver(E, { ...b, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function co(t, e, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = o,
    d = pe(t),
    h = r || i ? [...(d ? At(d) : []), ...At(e)] : [];
  h.forEach((k) => {
    r && k.addEventListener('scroll', n, { passive: !0 }),
      i && k.addEventListener('resize', n);
  });
  const p = d && c ? ao(d, n) : null;
  let l = -1,
    f = null;
  s &&
    ((f = new ResizeObserver((k) => {
      let [b] = k;
      b &&
        b.target === d &&
        f &&
        (f.unobserve(e),
        cancelAnimationFrame(l),
        (l = requestAnimationFrame(() => {
          var _;
          (_ = f) == null || _.observe(e);
        }))),
        n();
    })),
    d && !a && f.observe(d),
    f.observe(e));
  let w,
    m = a ? ht(t) : null;
  a && y();
  function y() {
    const k = ht(t);
    m &&
      (k.x !== m.x ||
        k.y !== m.y ||
        k.width !== m.width ||
        k.height !== m.height) &&
      n(),
      (m = k),
      (w = requestAnimationFrame(y));
  }
  return (
    n(),
    () => {
      var k;
      h.forEach((b) => {
        r && b.removeEventListener('scroll', n),
          i && b.removeEventListener('resize', n);
      }),
        p?.(),
        (k = f) == null || k.disconnect(),
        (f = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const lo = Hn,
  uo = Bn,
  fo = $n,
  _e = jn,
  po = (t, e, n) => {
    const o = new Map(),
      r = { platform: so, ...n },
      i = { ...r.platform, _c: o };
    return Fn(t, e, { ...r, platform: i });
  };
function ho({ className: t }) {
  const e = st('text-inherit', t);
  return x('svg', {
    className: e,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 50 50',
    children: [
      x('path', {
        fill: 'currentColor',
        d: 'M50 12.5C50 5.597 44.403 0 37.5 0h-25C5.597 0 0 5.597 0 12.5v25C0 44.403 5.597 50 12.5 50h25C44.403 50 50 44.403 50 37.5v-25z',
      }),
      x('path', {
        fill: '#fff',
        d: 'M14.551 17.49v12.2a.09.09 0 0 0 .092.092h2.249a.091.091 0 0 0 .091-.091v-5.203c0-1.007.676-1.726 1.761-1.726 1.189 0 1.484.969 1.484 1.96v4.969a.09.09 0 0 0 .027.065.09.09 0 0 0 .066.026h2.24a.092.092 0 0 0 .09-.091v-5.266c0-.18-.007-.357-.022-.53a4.681 4.681 0 0 0-.416-1.628c-.52-1.084-1.505-1.785-2.989-1.785a2.989 2.989 0 0 0-2.336 1.195l-.056.066V17.49a.092.092 0 0 0-.091-.092h-2.098a.092.092 0 0 0-.092.092zm-3.441 6.862s-1.088-.256-1.489-.357c-.4-.102-1.101-.328-1.101-.848 0-.544.562-.696 1.138-.696.576 0 1.21.137 1.261.771a.09.09 0 0 0 .09.08l2.108-.008a.091.091 0 0 0 .086-.06.092.092 0 0 0 .005-.036c-.13-2.027-1.915-2.752-3.563-2.752-1.953 0-3.377 1.28-3.377 2.698 0 1.03.294 2 2.597 2.673.402.118.954.27 1.433.4.577.16.884.4.884.784 0 .443-.652.75-1.277.75-.916 0-1.567-.338-1.62-.946a.09.09 0 0 0-.09-.08l-2.104.01a.09.09 0 0 0-.066.028.092.092 0 0 0-.025.066c.096 1.914 1.951 2.945 3.68 2.945 2.57 0 3.74-1.45 3.74-2.796.003-.628-.143-2.075-2.31-2.627zm25.703-2.588V20.54a.088.088 0 0 0-.026-.064.09.09 0 0 0-.065-.027h-2.1a.09.09 0 0 0-.09.09v11.994a.088.088 0 0 0 .026.064.089.089 0 0 0 .065.026h2.249a.09.09 0 0 0 .09-.09v-3.937h.034c.356.542 1.334 1.192 2.608 1.192 2.401 0 4.397-1.98 4.397-4.66 0-2.569-1.984-4.651-4.51-4.651-1.125 0-2.069.62-2.677 1.369v-.082zm2.468 5.747c-1.292 0-2.32-1.072-2.32-2.38 0-1.308 1.027-2.368 2.32-2.368 1.294 0 2.33 1.06 2.33 2.368 0 1.308-1.036 2.38-2.33 2.38zm-11.406-7.554c-2.096 0-3.142.708-3.983 1.28l-.024.016a.205.205 0 0 0-.063.275l.867 1.487a.213.213 0 0 0 .322.056l.065-.054c.432-.36 1.086-.905 2.761-1.04.933-.074 1.74.176 2.33.72.653.601 1.044 1.57 1.044 2.594 0 1.88-1.114 3.064-2.902 3.088-1.474-.008-2.466-.774-2.466-1.906 0-.599.237-1.04.77-1.43a.207.207 0 0 0 .061-.263l-.744-1.402a.215.215 0 0 0-.297-.083c-.836.493-1.822 1.446-1.767 3.182.067 2.21 1.912 3.896 4.31 3.965h.273c2.85-.092 4.907-2.198 4.907-5.048 0-2.637-1.914-5.437-5.463-5.437z',
      }),
    ],
  });
}
function mo({ className: t }) {
  const e = st('text-inherit', t);
  return x('svg', {
    className: e,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 60 25',
    children: x('path', {
      fill: 'currentColor',
      d: 'M7.74 11.067c-2.35-.509-3.396-.708-3.396-1.612 0-.85.708-1.274 2.125-1.274 1.246 0 2.157.544 2.828 1.609.05.082.155.11.24.066l2.644-1.334a.186.186 0 0 0 .076-.259c-1.098-1.9-3.125-2.94-5.794-2.94-3.507 0-5.686 1.727-5.686 4.47 0 2.914 2.653 3.65 5.006 4.16 2.353.509 3.403.708 3.403 1.612 0 .904-.765 1.33-2.293 1.33-1.41 0-2.457-.644-3.09-1.896a.185.185 0 0 0-.25-.082L.916 16.222a.188.188 0 0 0-.082.253c1.046 2.102 3.194 3.284 6.062 3.284 3.653 0 5.86-1.697 5.86-4.526 0-2.83-2.666-3.65-5.015-4.16v-.006ZM21.909 5.324c-1.5 0-2.824.53-3.776 1.476a.093.093 0 0 1-.158-.067V.7a.185.185 0 0 0-.187-.186H14.48a.185.185 0 0 0-.187.186v18.728c0 .105.083.187.187.187h3.308a.185.185 0 0 0 .187-.187v-8.215c0-1.586 1.217-2.803 2.859-2.803 1.641 0 2.83 1.191 2.83 2.803v8.215c0 .105.082.187.187.187h3.308a.185.185 0 0 0 .186-.187v-8.215c0-3.451-2.264-5.888-5.436-5.888ZM34.056 4.786c-1.796 0-3.478.55-4.687 1.344a.187.187 0 0 0-.06.25l1.458 2.487c.054.089.168.12.256.066a5.812 5.812 0 0 1 3.04-.834c2.887 0 5.01 2.035 5.01 4.725 0 2.292-1.7 3.99-3.853 3.99-1.755 0-2.973-1.022-2.973-2.463 0-.825.351-1.501 1.265-1.979a.183.183 0 0 0 .073-.259L32.21 9.787a.186.186 0 0 0-.224-.08c-1.844.683-3.137 2.327-3.137 4.533 0 3.338 2.66 5.829 6.369 5.829 4.333 0 7.448-3 7.448-7.302 0-4.611-3.624-7.98-8.609-7.98ZM52.342 5.295c-1.673 0-3.169.62-4.26 1.707a.092.092 0 0 1-.158-.066V5.627a.185.185 0 0 0-.186-.186h-3.223a.185.185 0 0 0-.187.186v18.7c0 .104.082.186.187.186h3.308a.185.185 0 0 0 .187-.187v-6.131c0-.083.098-.124.158-.07 1.088 1.012 2.527 1.602 4.174 1.602 3.88 0 6.907-3.138 6.907-7.216 0-4.077-3.03-7.216-6.907-7.216Zm-.626 11.265c-2.207 0-3.88-1.754-3.88-4.074s1.67-4.074 3.88-4.074 3.877 1.726 3.877 4.074c0 2.349-1.644 4.074-3.88 4.074h.003Z',
    }),
  });
}
const go = [
    'en',
    'bg-BG',
    'cs',
    'da',
    'de',
    'el',
    'es',
    'fi',
    'fr',
    'hi',
    'hr-HR',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt-LT',
    'ms',
    'nb',
    'nl',
    'pl',
    'pt-BR',
    'pt-PT',
    'ro-RO',
    'ru',
    'sk-SK',
    'sl-SI',
    'sv',
    'th',
    'tr',
    'vi',
    'zh-CN',
    'zh-TW',
  ],
  wo = { locale: 'en', translations: void 0 },
  Ge = _t(wo),
  yo = () => Et(Ge),
  bo = () => {
    const { locale: t, translations: e } = yo();
    return {
      translate: (o, r) => {
        const i = o.split('.');
        if (!e) throw new ReferenceError();
        const { count: s, defaultValue: c, ...a } = r || {};
        let d = e.get(t);
        if (!d && r?.defaultValue) return r.defaultValue;
        try {
          for (const f of i)
            switch (typeof d) {
              case 'object':
                d = d[f];
                break;
              case 'string':
              case 'undefined':
                throw new ReferenceError();
            }
          if (typeof d > 'u') throw new ReferenceError();
          if (typeof e != 'string' && s) {
            let f = s === 1 ? 'one' : 'other';
            s === 0 && typeof e != 'string' && 'zero' in e && (f = 'zero'),
              (d = d[f]);
          }
          if (typeof d != 'string') throw new ReferenceError();
          let h = !1;
          const p = Object.keys(a),
            l = d.split(new RegExp(`({${p.join('}|{')}})`, 'g'));
          return (
            p.forEach((f) => {
              !h && typeof a[f] != 'string' && (h = !0),
                l.forEach((w, m) => {
                  w === `{${f}}` && (l[m] = a[f]);
                });
            }),
            h ? x(kt, { children: l }) : l.join('')
          );
        } catch {
          return c || o;
        }
      },
    };
  };
function Ot(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == 'function' && t.toString() === e.toString()) return !0;
  if (t && e && typeof t == 'object' && typeof e == 'object') {
    if (t.constructor !== e.constructor) return !1;
    let n, o;
    const r = Object.keys(t);
    if (Array.isArray(t)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (o = n; o-- !== 0; ) if (!Ot(t[o], e[o])) return !1;
      return !0;
    }
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (((n = r.length), n !== Object.keys(e).length)) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!Ot(t[i], e[i])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Ze(t) {
  return (t.ownerDocument.defaultView || A).devicePixelRatio || 1;
}
function Ee(t, e) {
  const n = Ze(t);
  return Math.round(e * n) / n;
}
function ke(t) {
  const e = Y(t);
  return (
    z(() => {
      e.current = t;
    }),
    e
  );
}
function vo(t = {}) {
  const {
      placement: e = 'bottom',
      strategy: n = 'absolute',
      middleware: o = [],
      platform: r,
      elements: { reference: i, floating: s } = {},
      transform: c = !0,
      whileElementsMounted: a,
      open: d,
    } = t,
    [h, p] = et({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [l, f] = et(o);
  Ot(l, o) || f(o);
  const [w, m] = et(null),
    [y, k] = et(null),
    b = B((S) => {
      S !== O.current && ((O.current = S), m(S));
    }, []),
    _ = B((S) => {
      S !== T.current && ((T.current = S), k(S));
    }, []),
    E = i || w,
    v = s || y,
    O = Y(null),
    T = Y(null),
    W = Y(h),
    F = a != null,
    j = ke(a),
    M = ke(r),
    D = B(() => {
      if (!O.current || !T.current) return;
      const S = { placement: e, strategy: n, middleware: l };
      M.current && (S.platform = M.current),
        po(O.current, T.current, S)
          .then((N) => {
            const V = { ...N, isPositioned: !0 };
            H.current && !Ot(W.current, V) && ((W.current = V), p(V));
          })
          .catch((N) => {
            console.error('error caught during computePosition', N);
          });
    }, [l, e, n, M]);
  z(() => {
    d === !1 &&
      W.current.isPositioned &&
      ((W.current.isPositioned = !1), p((S) => ({ ...S, isPositioned: !1 })));
  }, [d]);
  const H = Y(!1);
  z(
    () => (
      (H.current = !0),
      () => {
        H.current = !1;
      }
    ),
    []
  ),
    z(() => {
      if ((E && (O.current = E), v && (T.current = v), E && v)) {
        if (j.current) return j.current(E, v, D);
        D();
      }
    }, [E, v, D, j, F]);
  const P = X(
      () => ({ reference: O, floating: T, setReference: b, setFloating: _ }),
      [b, _]
    ),
    L = X(() => ({ reference: E, floating: v }), [E, v]),
    $ = X(() => {
      const S = { position: n, left: 0, top: 0 };
      if (!L.floating) return S;
      const N = Ee(L.floating, h.x),
        V = Ee(L.floating, h.y);
      return c
        ? {
            ...S,
            transform: `translate(${N}px, ${V}px)`,
            ...(Ze(L.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: N, top: V };
    }, [n, c, L.floating, h.x, h.y]);
  return X(
    () => ({ ...h, update: D, refs: P, elements: L, floatingStyles: $ }),
    [h, D, P, L, $]
  );
}
const xo = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: t,
      fn(n) {
        const { element: o, padding: r } = t;
        return o && e(o)
          ? o.current != null
            ? _e({ element: o.current, padding: r }).fn(n)
            : {}
          : o
          ? _e({ element: o, padding: r }).fn(n)
          : {};
      },
    };
  },
  Se = 448,
  Ce = {
    mobile: [`max-width: ${Se}px`],
    tablet: [
      `min-width: ${Se + 1}px`,
      'max-width: 1000px',
      'max-height: 920px',
    ],
  };
function _o() {
  const t = Ce.mobile.every((o) => A.matchMedia(`(${o})`).matches),
    e = !t && Ce.tablet.every((o) => A.matchMedia(`(${o})`).matches);
  return { isMobile: t, isTablet: e, isDesktop: !t && !e };
}
const Je = `
  a[href],
  area[href],
  input:not([type="hidden"]):not([disabled]):not([tabindex="-1"]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]):not([tabindex="-1"]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls]`;
function Eo(t) {
  return t.querySelector(Je);
}
function ko(t) {
  const e = t.querySelectorAll(Je);
  return e[e.length - 1];
}
const So = Le(({ as: t = 'div', children: e, disabled: n = !1, ...o }, r) => {
  const i = Y(null),
    s = Y(null),
    c = Y(null);
  te(() => {
    n || i.current?.focus();
  }, [n]);
  const a = (l) => {
      const f = i.current;
      if (!f || n) return;
      ((l ? Eo(f) : ko(f)) || f).focus();
    },
    d = (l) => {
      (i.current = l), typeof r == 'function' ? r(l) : r && (r.current = l);
    },
    h = n ? -1 : 0,
    p = 'absolute -m-px h-px w-px overflow-hidden whitespace-nowrap p-0';
  return x(kt, {
    children: [
      x('div', { className: p, ref: s, onFocus: () => a(!1), tabIndex: h }),
      x(t, { ...o, ref: d, tabIndex: -1, children: e }),
      x('div', { className: p, ref: c, onFocus: () => a(!0), tabIndex: h }),
    ],
  });
});
function Co({ className: t }) {
  const e = st('text-inherit', t);
  return x('svg', {
    className: e,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    children: x('path', {
      fill: 'currentColor',
      'fill-rule': 'evenodd',
      d: 'M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm7.707-3.707a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293Z',
      'clip-rule': 'evenodd',
    }),
  });
}
(function () {
  if (typeof document > 'u' || 'adoptedStyleSheets' in document) return;
  var t = 'ShadyCSS' in window && !ShadyCSS.nativeShadow,
    e = document.implementation.createHTMLDocument(''),
    n = new WeakMap(),
    o = typeof DOMException == 'object' ? Error : DOMException,
    r = Object.defineProperty,
    i = Array.prototype.forEach,
    s = /@import.+?;?$/gm;
  function c(u) {
    var g = u.replace(s, '');
    return (
      g !== u &&
        console.warn(
          '@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418'
        ),
      g.trim()
    );
  }
  function a(u) {
    return 'isConnected' in u ? u.isConnected : document.contains(u);
  }
  function d(u) {
    return u.filter(function (g, C) {
      return u.indexOf(g) === C;
    });
  }
  function h(u, g) {
    return u.filter(function (C) {
      return g.indexOf(C) === -1;
    });
  }
  function p(u) {
    u.parentNode.removeChild(u);
  }
  function l(u) {
    return u.shadowRoot || n.get(u);
  }
  var f = ['addRule', 'deleteRule', 'insertRule', 'removeRule'],
    w = CSSStyleSheet,
    m = w.prototype;
  (m.replace = function () {
    return Promise.reject(
      new o("Can't call replace on non-constructed CSSStyleSheets.")
    );
  }),
    (m.replaceSync = function () {
      throw new o(
        "Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets."
      );
    });
  function y(u) {
    return typeof u == 'object' ? D.isPrototypeOf(u) || m.isPrototypeOf(u) : !1;
  }
  function k(u) {
    return typeof u == 'object' ? m.isPrototypeOf(u) : !1;
  }
  var b = new WeakMap(),
    _ = new WeakMap(),
    E = new WeakMap(),
    v = new WeakMap();
  function O(u, g) {
    var C = document.createElement('style');
    return E.get(u).set(g, C), _.get(u).push(g), C;
  }
  function T(u, g) {
    return E.get(u).get(g);
  }
  function W(u, g) {
    E.get(u).delete(g),
      _.set(
        u,
        _.get(u).filter(function (C) {
          return C !== g;
        })
      );
  }
  function F(u, g) {
    requestAnimationFrame(function () {
      (g.textContent = b.get(u).textContent),
        v.get(u).forEach(function (C) {
          return g.sheet[C.method].apply(g.sheet, C.args);
        });
    });
  }
  function j(u) {
    if (!b.has(u)) throw new TypeError('Illegal invocation');
  }
  function M() {
    var u = this,
      g = document.createElement('style');
    e.body.appendChild(g),
      b.set(u, g),
      _.set(u, []),
      E.set(u, new WeakMap()),
      v.set(u, []);
  }
  var D = M.prototype;
  (D.replace = function (g) {
    try {
      return this.replaceSync(g), Promise.resolve(this);
    } catch (C) {
      return Promise.reject(C);
    }
  }),
    (D.replaceSync = function (g) {
      if ((j(this), typeof g == 'string')) {
        var C = this;
        (b.get(C).textContent = c(g)),
          v.set(C, []),
          _.get(C).forEach(function (U) {
            U.isConnected() && F(C, T(C, U));
          });
      }
    }),
    r(D, 'cssRules', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return j(this), b.get(this).sheet.cssRules;
      },
    }),
    r(D, 'media', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return j(this), b.get(this).sheet.media;
      },
    }),
    f.forEach(function (u) {
      D[u] = function () {
        var g = this;
        j(g);
        var C = arguments;
        v.get(g).push({ method: u, args: C }),
          _.get(g).forEach(function (Z) {
            if (Z.isConnected()) {
              var q = T(g, Z).sheet;
              q[u].apply(q, C);
            }
          });
        var U = b.get(g).sheet;
        return U[u].apply(U, C);
      };
    }),
    r(M, Symbol.hasInstance, { configurable: !0, value: y });
  var H = { childList: !0, subtree: !0 },
    P = new WeakMap();
  function L(u) {
    var g = P.get(u);
    return g || ((g = new ut(u)), P.set(u, g)), g;
  }
  function $(u) {
    r(u.prototype, 'adoptedStyleSheets', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return L(this).sheets;
      },
      set: function (g) {
        L(this).update(g);
      },
    });
  }
  function S(u, g) {
    for (
      var C = document.createNodeIterator(
          u,
          NodeFilter.SHOW_ELEMENT,
          function (Z) {
            return l(Z) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          },
          null,
          !1
        ),
        U = void 0;
      (U = C.nextNode());

    )
      g(l(U));
  }
  var N = new WeakMap(),
    V = new WeakMap(),
    G = new WeakMap();
  function rt(u, g) {
    return (
      g instanceof HTMLStyleElement &&
      V.get(u).some(function (C) {
        return T(C, u);
      })
    );
  }
  function it(u) {
    var g = N.get(u);
    return g instanceof Document ? g.body : g;
  }
  function at(u) {
    var g = document.createDocumentFragment(),
      C = V.get(u),
      U = G.get(u),
      Z = it(u);
    U.disconnect(),
      C.forEach(function (q) {
        g.appendChild(T(q, u) || O(q, u));
      }),
      Z.insertBefore(g, null),
      U.observe(Z, H),
      C.forEach(function (q) {
        F(q, T(q, u));
      });
  }
  function ut(u) {
    var g = this;
    (g.sheets = []),
      N.set(g, u),
      V.set(g, []),
      G.set(
        g,
        new MutationObserver(function (C, U) {
          if (!document) {
            U.disconnect();
            return;
          }
          C.forEach(function (Z) {
            t ||
              i.call(Z.addedNodes, function (q) {
                q instanceof Element &&
                  S(q, function (dt) {
                    L(dt).connect();
                  });
              }),
              i.call(Z.removedNodes, function (q) {
                q instanceof Element &&
                  (rt(g, q) && at(g),
                  t ||
                    S(q, function (dt) {
                      L(dt).disconnect();
                    }));
              });
          });
        })
      );
  }
  if (
    ((ut.prototype = {
      isConnected: function () {
        var u = N.get(this);
        return u instanceof Document ? u.readyState !== 'loading' : a(u.host);
      },
      connect: function () {
        var u = it(this);
        G.get(this).observe(u, H),
          V.get(this).length > 0 && at(this),
          S(u, function (g) {
            L(g).connect();
          });
      },
      disconnect: function () {
        G.get(this).disconnect();
      },
      update: function (u) {
        var g = this,
          C = N.get(g) === document ? 'Document' : 'ShadowRoot';
        if (!Array.isArray(u))
          throw new TypeError(
            "Failed to set the 'adoptedStyleSheets' property on " +
              C +
              ': Iterator getter is not callable.'
          );
        if (!u.every(y))
          throw new TypeError(
            "Failed to set the 'adoptedStyleSheets' property on " +
              C +
              ": Failed to convert value to 'CSSStyleSheet'"
          );
        if (u.some(k))
          throw new TypeError(
            "Failed to set the 'adoptedStyleSheets' property on " +
              C +
              ": Can't adopt non-constructed stylesheets"
          );
        g.sheets = u;
        var U = V.get(g),
          Z = d(u),
          q = h(U, Z);
        q.forEach(function (dt) {
          p(T(dt, g)), W(dt, g);
        }),
          V.set(g, Z),
          g.isConnected() && Z.length > 0 && at(g);
      },
    }),
    (window.CSSStyleSheet = M),
    $(Document),
    'ShadowRoot' in window)
  ) {
    $(ShadowRoot);
    var mt = Element.prototype,
      gt = mt.attachShadow;
    mt.attachShadow = function (g) {
      var C = gt.call(this, g);
      return g.mode === 'closed' && n.set(this, C), C;
    };
  }
  var R = L(document);
  R.isConnected()
    ? R.connect()
    : document.addEventListener('DOMContentLoaded', R.connect.bind(R));
})();
var Qe =
  '/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:SuisseIntl;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}:host{font-family:SuisseIntl}:host-context(shopify-payment-terms){font-family:inherit}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-none{pointer-events:none}.\\!visible{visibility:visible!important}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-05{inset:2px}.bottom-0{bottom:0}.bottom-8{bottom:32px}.bottom-\\[15\\%\\]{bottom:15%}.left-0{left:0}.right-0{right:0}.top-0{top:0}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[800\\]{z-index:800}.z-max{z-index:2147483647}.float-right{float:right}.-m-px{margin:-1px}.m-0{margin:0}.m-\\[1em\\]{margin:1em}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:8px}.mb-5{margin-bottom:20px}.ml-1{margin-left:4px}.mr-20{margin-right:5rem}.mr-3{margin-right:12px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.size-5{height:20px;width:20px}.size-6{height:24px;width:24px}.h-10{height:40px}.h-3{height:12px}.h-4{height:16px}.h-4-5{height:18px}.h-5{height:20px}.h-6{height:24px}.h-8{height:32px}.h-9{height:36px}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.w-22{width:88px}.w-37{width:148px}.w-55{width:220px}.w-6{width:24px}.w-8{width:32px}.w-9{width:36px}.w-auto{width:auto}.w-full{width:100%}.w-full-important{width:100%!important}.w-pay-button{width:var(--shop-pay-button-width,260px)}.w-px{width:1px}.min-w-85{min-width:340px}.max-w-94{max-width:376px}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.translate-y-16{--tw-translate-y:64px}.rotate-45,.translate-y-16{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate:45deg}.scale-0{--tw-scale-x:0;--tw-scale-y:0}.scale-0,.scale-100{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes follow{0%{transform:scaleY(1);width:100%}25%{transform:scaleY(1)}50%{transform:scaleY(1.2)}to{transform:scaleY(1);width:36px}}.animate-follow{animation:follow .3s cubic-bezier(.45,0,.15,1)}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-x-1{column-gap:4px}.gap-x-1-5{column-gap:6px}.gap-x-4{column-gap:16px}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-line{white-space:pre-line}.rounded-lg{border-radius:16px}.rounded-login-button{border-radius:var(--buttons-radius,12px)}.rounded-max{border-radius:999px}.rounded-md{border-radius:12px}.rounded-xs{border-radius:4px}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-grayscale-l2l{--tw-border-opacity:1;border-color:rgb(227 227 227/var(--tw-border-opacity))}.bg-grayscale-l2{--tw-bg-opacity:1;background-color:rgb(203 203 202/var(--tw-bg-opacity))}.bg-grayscale-l3{--tw-bg-opacity:1;background-color:rgb(240 240 240/var(--tw-bg-opacity))}.bg-grayscale-l4{--tw-bg-opacity:1;background-color:rgb(242 244 245/var(--tw-bg-opacity))}.bg-grayscale-primary-light{--tw-bg-opacity:1;background-color:rgb(112 112 112/var(--tw-bg-opacity))}.bg-overlay{background-color:#0006}.bg-purple-primary{--tw-bg-opacity:1;background-color:rgb(84 51 235/var(--tw-bg-opacity))}.bg-transparent{background-color:initial}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-0{padding:0}.p-3{padding:12px}.p-4{padding:16px}.p-6{padding:24px}.px-0{padding-left:0;padding-right:0}.px-11{padding-left:44px;padding-right:44px}.px-2{padding-left:8px;padding-right:8px}.px-4{padding-left:16px;padding-right:16px}.px-5{padding-left:20px;padding-right:20px}.px-6{padding-left:24px;padding-right:24px}.py-1{padding-bottom:4px;padding-top:4px}.py-2-5{padding-bottom:10px;padding-top:10px}.py-3{padding-bottom:12px;padding-top:12px}.py-4{padding-bottom:16px;padding-top:16px}.pb-0{padding-bottom:0}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:12px}.pb-4{padding-bottom:16px}.pb-6{padding-bottom:24px}.pr-3{padding-right:12px}.pt-4{padding-top:16px}.text-center{text-align:center}.font-sans{font-family:SuisseIntl}.text-body-large{font-size:16px;line-height:20px}.text-body-large,.text-body-small{font-weight:450;letter-spacing:.15px}.text-body-small{font-size:14px;line-height:18px}.text-button-large{font-size:16px;font-weight:500;letter-spacing:.15px;line-height:18px}.text-caption{font-size:12px;font-weight:450;letter-spacing:.15px;line-height:14px}.text-subtitle{font-size:18px;font-weight:500;letter-spacing:.15px;line-height:20px}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-grayscale-d1{--tw-text-opacity:1;color:rgb(64 64 64/var(--tw-text-opacity))}.text-grayscale-l4{--tw-text-opacity:1;color:rgb(242 244 245/var(--tw-text-opacity))}.text-purple-primary{--tw-text-opacity:1;color:rgb(84 51 235/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.opacity-0{opacity:0}.opacity-100{opacity:1}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.duration-400{transition-duration:.4s}.ease-cubic-in-out{transition-timing-function:cubic-bezier(.65,0,.35,1)}.ease-cubic-modal{transition-timing-function:cubic-bezier(.32,.72,0,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.will-change-transform{will-change:transform}.forced-color-adjust-none{forced-color-adjust:none}.focus_outline-0:focus{outline-width:0}.hover_enabled_bg-purple-d0:enabled:hover{--tw-bg-opacity:1;background-color:rgb(69 36 219/var(--tw-bg-opacity))}.hover_enabled_bg-transparent:enabled:hover{background-color:initial}.focus-visible_enabled_outline-none:enabled:focus-visible{outline:2px solid #0000;outline-offset:2px}.focus-visible_enabled_ring:enabled:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible_enabled_ring-purple-primary-light:enabled:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(219 209 255/var(--tw-ring-opacity))}.disabled_opacity-50:disabled{opacity:.5}.group:hover .group-hover_bg-purple-d0{--tw-bg-opacity:1;background-color:rgb(69 36 219/var(--tw-bg-opacity))}.group:hover .group-hover_text-grayscale-l2l{--tw-text-opacity:1;color:rgb(227 227 227/var(--tw-text-opacity))}.data-\\[visible\\=true\\]_translate-y-0[data-visible=true]{--tw-translate-y:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[visible\\=true\\]_opacity-100[data-visible=true]{opacity:1}@media (prefers-reduced-motion:reduce){.motion-reduce_translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.motion-reduce_transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.motion-reduce_duration-0{transition-duration:0s}}@media (max-width:448px){.sm_absolute{position:absolute}.sm_bottom-0{bottom:0}.sm_left-0{left:0}.sm_right-0{right:0}.sm_top-auto{top:auto}.sm_hidden{display:none}.sm_max-w-none{max-width:none}.sm_translate-y-0{--tw-translate-y:0px}.sm_translate-y-0,.sm_translate-y-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm_translate-y-full{--tw-translate-y:100%}.sm_scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm_rounded-none{border-radius:0}.sm_rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}}';
function To({ children: t, instanceId: e, type: n, variant: o }) {
  const r = Y(null),
    [i, s] = et(null),
    { notify: c } = St();
  return (
    te(() => {
      s(r.current.attachShadow({ mode: 'open' }));
    }, []),
    te(() => {
      if (i) {
        const a = new CSSStyleSheet();
        a.replace(Qe)
          .then(() => {
            i.adoptedStyleSheets = [a];
          })
          .catch((d) => {
            c(
              new Error(`Failed to adopt stylesheets for portal provider: ${d}`)
            );
          });
      }
    }, [i, c]),
    x('div', {
      'data-nametag': 'shop-portal-provider',
      'data-portal-instance-id': e,
      'data-type': n,
      'data-variant': o,
      ref: r,
      style: { all: 'initial' },
      children: i && Pe(t, i),
    })
  );
}
const Zt = ['right', 'left', 'bottom', 'top'],
  Ro = ({
    anchorTo: t,
    children: e,
    headerTitle: n,
    hideHeader: o = !1,
    disableMinWidth: r = !1,
    key: i,
    modalTitle: s = 'Sign in with Shop',
    onDismiss: c,
    onModalInViewport: a,
    popupDisabled: d,
    variant: h,
    visible: p,
  }) => {
    const { dispatch: l, modalDismissable: f } = se(),
      { translate: w } = bo(),
      m = Y(null),
      [y, k] = et(null),
      b = Y(null),
      _ = Y(null),
      E = Y(null),
      [v, O] = et(!1),
      { instanceId: T } = Ct(),
      [W, F] = et(),
      {
        floatingStyles: j,
        middlewareData: M,
        refs: D,
        update: H,
      } = vo({
        middleware: [
          fo({ crossAxis: !1, fallbackPlacements: Zt.slice(1) }),
          uo({ padding: 30 }),
          lo(30),
          xo({ element: b, padding: 28 }),
        ],
        placement: Zt[0],
        whileElementsMounted: co,
      });
    z(() => {
      if (t) {
        let u;
        typeof t == 'string' ? (u = K.querySelector(t)) : (u = t.current),
          k(u),
          D.setReference(u),
          H();
      }
    }, [t, D, H]),
      !_.current &&
        IntersectionObserver &&
        (_.current = new IntersectionObserver((u) => {
          for (const g of u)
            g.boundingClientRect.top < 0 && A.scrollTo({ top: 0, left: 0 }),
              g.isIntersecting && a?.();
        })),
      !m.current &&
        IntersectionObserver &&
        (m.current = new IntersectionObserver((u) => {
          for (const g of u)
            if (
              (g.boundingClientRect.top < 0 && A.scrollTo({ top: 0, left: 0 }),
              !g.isIntersecting && g.target.offsetTop)
            ) {
              const U = y?.offsetHeight || 0,
                q = (E.current?.offsetHeight || 0) / 2,
                on = U + q + 30;
              A.scrollTo({ top: g.target.offsetTop - on });
            }
        })),
      z(
        () => () => {
          _.current && _.current.disconnect(),
            m.current && m.current.disconnect();
        },
        []
      );
    const { isDesktop: P } = _o(),
      L = X(() => (y && !d && P ? 'dynamic' : 'center'), [y, P, d]);
    z(() => {
      const u = K.documentElement,
        g = u?.style.overflow;
      return () => {
        g && u ? (u.style.overflow = g) : u.style.removeProperty('overflow');
      };
    }, []);
    const $ = B(
      (u) => {
        f &&
          (c(u),
          W
            ? (K.documentElement.style.overflow = W)
            : K.documentElement.style.removeProperty('overflow'));
      },
      [W, f, c]
    );
    z(() => {
      function u({ key: g }) {
        (g === 'Escape' || g === 'Esc') && $('keyboard');
      }
      return (
        A.addEventListener('keydown', u),
        () => {
          A.removeEventListener('keydown', u);
        }
      );
    }, [$]),
      z(() => {
        p
          ? (F(K.documentElement.style.overflow),
            (K.documentElement.style.overflow = 'hidden'),
            _.current && E.current && _.current.observe(E.current),
            m.current && y && m.current.observe(y))
          : (_.current && E.current && _.current.unobserve(E.current),
            m.current && y && m.current.unobserve(y));
      }, [y, p]),
      z(() => {
        if (!p) {
          O(!1);
          return;
        }
        const u = () => {
          O(!0);
        };
        return (
          E.current?.addEventListener('transitionend', u, { once: !0 }),
          () => {
            E.current?.removeEventListener('transitionend', u);
          }
        );
      }, [p]),
      z(() => {
        if (p) {
          const u = setTimeout(() => {
            l({ type: 'setModalDismissable', payload: !0 });
          }, 400);
          return () => {
            clearTimeout(u);
          };
        }
      }, [l, p]);
    const S = st(
        'fixed bottom-0 left-0 right-0 top-0 z-10 bg-overlay duration-400 ease-cubic-modal motion-reduce_duration-0',
        p ? 'opacity-100' : 'opacity-0'
      ),
      N = st(
        'fixed bottom-0 left-0 right-0 top-0 z-max overflow-hidden',
        L === 'center' && 'flex items-center justify-center',
        !p && 'pointer-events-none'
      ),
      V = st(
        'relative z-50 bg-white duration-400 ease-cubic-modal will-change-transform focus_outline-0 motion-reduce_duration-0 sm_absolute sm_bottom-0 sm_left-0 sm_right-0 sm_top-auto sm_rounded-b-none',
        p ? 'opacity-1 sm_translate-y-0' : 'opacity-0 sm_translate-y-full',
        L === 'dynamic' && p ? 'scale-100' : '',
        L === 'dynamic' && !p ? 'scale-0 sm_scale-100' : '',
        !r && 'min-w-85',
        !o && 'rounded-lg'
      ),
      G = st('relative overflow-hidden sm_rounded-b-none', !o && 'rounded-lg'),
      rt = X(() => {
        if (L === 'center') return null;
        const u = {
            right: { top: M.arrow?.y, left: M.arrow?.x || '-10px' },
            left: { top: M.arrow?.y, right: M.arrow?.x || '-10px' },
            bottom: { top: '-10px', left: M.arrow?.x || '-10px' },
            top: { bottom: '-10px', left: M.arrow?.x || '-10px' },
          },
          g = Zt[M.flip?.overflows?.length || 0],
          C = u[g],
          U = st(
            'absolute z-30 block size-6 rotate-45 rounded-xs duration-400 ease-cubic-modal sm_hidden',
            g === 'top' ? 'bg-grayscale-l4' : 'bg-white'
          );
        return x('div', {
          className: U,
          'data-testid': 'authorize-modal-arrow',
          ref: b,
          style: C,
        });
      }, [M.arrow?.x, M.arrow?.y, M.flip?.overflows, L]),
      it = !!n,
      at = it
        ? x(ho, { className: 'h-8 w-8 text-purple-primary' })
        : x(mo, { className: 'h-4-5 text-purple-primary' }),
      ut = st(
        'flex w-full items-center justify-between p-4 pb-2',
        it &&
          'mb-5 gap-x-4 border-b border-solid border-grayscale-l2l px-5 pb-4'
      ),
      mt = L === 'dynamic' ? j : void 0,
      gt = o
        ? null
        : x('div', {
            className: ut,
            children: [
              at,
              it &&
                x('div', {
                  className: 'flex-1 font-sans text-body-large',
                  children: n,
                }),
              x('button', {
                'aria-label': w('button.close', { defaultValue: 'Close' }),
                className:
                  'group relative z-50 flex h-6 w-6 cursor-pointer rounded-max',
                'data-testid': 'authorize-modal-close-button',
                onClick: () => $('close_button'),
                type: 'button',
                children: [
                  x(Co, {
                    className:
                      'h-6 w-6 text-grayscale-l4 transition-colors group-hover_text-grayscale-l2l',
                  }),
                  x('div', {
                    className:
                      'absolute inset-05 -z-10 rounded-max bg-grayscale-primary-light',
                  }),
                ],
              }),
            ],
          }),
      R = p ? {} : { 'aria-hidden': !0 };
    return Pe(
      x(
        To,
        {
          instanceId: T,
          type: 'modal',
          variant: h,
          children: x('div', {
            className: N,
            'data-testid': 'authorize-modal-container',
            children: [
              x('div', {
                ...R,
                className: S,
                'data-testid': 'authorize-modal-overlay',
                onClick: () => $('overlay'),
              }),
              x(So, {
                as: 'section',
                disabled: !v,
                'aria-modal': 'true',
                ...R,
                'aria-label': s,
                className: V,
                'data-testid': 'authorize-modal',
                'data-visible': p,
                part: 'modal',
                ref: (u) => {
                  (E.current = u), y && (D.setFloating(u), H());
                },
                role: 'dialog',
                style: mt,
                children: [x('div', { className: G, children: [gt, e] }), rt],
              }),
            ],
          }),
        },
        i
      ),
      K.body
    );
  },
  Ao = () =>
    x(kt, {
      children: [
        x('div', {
          class: 'animate-pulse px-4 py-1 pb-6',
          children: [
            x('div', {
              class: 'space-4 flex items-center pb-3',
              children: [
                x('div', { class: 'mr-3 h-6 w-6 rounded-max bg-grayscale-l2' }),
                x('div', {
                  class: 'mr-20 h-3 flex-1 rounded-md bg-grayscale-l2',
                }),
              ],
            }),
            x('div', {
              class: 'space-4',
              children: x('div', { class: 'h-10 rounded-md bg-grayscale-l2' }),
            }),
          ],
        }),
        x('div', { class: 'h-10 animate-pulse bg-grayscale-l3' }),
      ],
    }),
  Oo = ({ children: t }) => {
    const { loaded: e } = se(),
      n = e ? {} : { height: '0' };
    return x(kt, {
      children: [!e && x(Ao, {}), x('div', { style: n, children: t })],
    });
  },
  Lo = ['captcha_challenge'],
  Po = Le(
    (
      {
        activator: t,
        allowAttribute: e,
        anchorTo: n,
        autoOpen: o,
        disableDefaultIframeResizing: r = !1,
        insideModal: i = !0,
        keepModalOpen: s = !1,
        modalHeaderTitle: c,
        modalHeaderVisible: a = !0,
        onComplete: d,
        onError: h,
        onLoaded: p,
        onModalVisibleChange: l,
        onResizeIframe: f,
        onPromptContinue: w,
        proxy: m,
        src: y,
        storefrontOrigin: k,
        variant: b,
      },
      _
    ) => {
      const {
          autoOpened: E,
          dispatch: v,
          loaded: O,
          modalVisible: T,
          sessionDetected: W,
        } = se(),
        { leaveBreadcrumb: F, notify: j } = St(),
        M = ce(),
        { clearLoadTimeout: D, initLoadTimeout: H } = On(),
        { trackModalStateChange: P, trackPageImpression: L } = hn(),
        { recordCounter: $ } = Ne(),
        S = Y(null),
        N = Ln(T),
        V = (R) => {
          R &&
            ((S.current = R),
            R.getAttribute('src') || R.setAttribute('src', y));
        };
      z(() => {
        O &&
          (P({ currentState: 'loaded', reason: 'event_loaded' }),
          F('iframe loaded', {}, 'state'));
      }, [F, O, P]);
      const G = B(
        (R) => {
          v({ type: 'setModalVisible', payload: !0 }),
            P({ currentState: 'shown', reason: R });
        },
        [v, P]
      );
      z(() => {
        o &&
          O &&
          W &&
          !E &&
          (G('event_loaded_with_auto_open'),
          v({ type: 'setAutoOpened', payload: !0 }));
      }, [o, E, v, G, O, W]);
      const rt = B(
        ({ dismissMethod: R, reason: u }) => {
          T &&
            (v({ type: 'setModalVisible', payload: !1 }),
            t?.current && Te(t) && t.current.focus(),
            P({ currentState: 'hidden', dismissMethod: R, reason: u }));
        },
        [t, v, T, P]
      );
      z(() => {
        function R() {
          G('user_button_clicked');
        }
        const u = t;
        if (u?.current && Te(u))
          return (
            u.current.addEventListener('click', R),
            () => {
              u.current?.removeEventListener('click', R);
            }
          );
      }, [t, G]);
      const it = B(() => {
          we({ iframe: S.current, src: y });
        }, [y]),
        { destroy: at, waitForMessage: ut } = Rn({
          includeCore: m,
          onClose: () =>
            rt({ dismissMethod: 'auto', reason: 'event_close_requested' }),
          onComplete: async (R) => {
            !s && i && rt({ dismissMethod: 'auto', reason: 'event_completed' }),
              await d?.(R);
          },
          onError: (R) => {
            const { message: u, code: g } = R;
            Lo.includes(g)
              ? ($('shop_js_handle_silent_error', {
                  attributes: { errorCode: g },
                }),
                F('silent error', { code: g }, 'state'))
              : j(new Error(`Authorize Error: ${u} (${g}).`)),
              D(),
              h?.(R);
          },
          onLoaded: (R) => {
            v({
              type: 'updateState',
              payload: { loaded: !0, sessionDetected: R.userFound },
            }),
              p?.(R),
              D();
          },
          onResizeIframe: (R) => {
            r || (S.current && (S.current.style.height = `${R.height}px`)),
              f?.(R);
          },
          onShopUserMatched: ({ userCookieExists: R }) => {
            M('shopusermatched'),
              v({ type: 'setSessionDetected', payload: R }),
              F('shop user matched', {}, 'state');
          },
          onShopUserNotMatched: ({ apiError: R }) => {
            M('shopusernotmatched', R && { apiError: R }),
              v({ type: 'setSessionDetected', payload: !1 }),
              F('shop user not matched', {}, 'state');
          },
          onPromptContinue: () => {
            w?.();
          },
          source: S,
          storefrontOrigin: k,
        });
      z(
        () => () => {
          S.current && at();
        },
        [at]
      ),
        z(() => {
          if (T !== N) {
            if (T) {
              try {
                Kt({
                  contentWindow: S.current?.contentWindow,
                  event: { type: 'sheetmodalopened' },
                }),
                  M('modalopened');
              } catch (R) {
                j(
                  new Error(
                    `Error before calling onModalVisibleChange(true): ${R}`
                  )
                );
              }
              l?.(!0);
              return;
            }
            Kt({
              contentWindow: S.current?.contentWindow,
              event: { type: 'sheetmodalclosed' },
            }),
              M('modalclosed'),
              l?.(!1),
              K.querySelector('com-1password-notification')?.remove();
          }
        }, [M, T, j, l, N]),
        rn(
          _,
          () => ({
            close: rt,
            iframeRef: S,
            open: G,
            postMessage: (R) =>
              Kt({ contentWindow: S.current?.contentWindow, event: R }),
            reload: it,
            waitForMessage: ut,
          }),
          [rt, G, it, ut]
        ),
        z(() => {
          H(), F('Iframe url updated', { src: y }, 'state');
        }, [H, F, y]),
        z(() => {
          T && L({ page: 'AUTHORIZE_MODAL' });
        }, [T, L]),
        z(() => {
          we({ iframe: S.current, src: y });
        }, [y]);
      const mt = () => {
          L({ page: 'AUTHORIZE_MODAL_IN_VIEWPORT', allowDuplicates: !0 }),
            F('modal in viewport', {}, 'state');
        },
        gt = x('iframe', {
          allow: e || 'publickey-credentials-get *',
          className: 'relative z-40 m-auto w-full border-none',
          ref: V,
          tabIndex: 0,
          'data-testid': 'authorize-iframe',
        });
      return i
        ? x(Ro, {
            anchorTo: n,
            headerTitle: c,
            hideHeader: !a,
            onDismiss: (R) =>
              rt({ dismissMethod: R, reason: 'user_dismissed' }),
            onModalInViewport: mt,
            variant: b,
            visible: T,
            children: x(Oo, { children: gt }),
          })
        : gt;
    }
  );
Po.displayName = 'AuthorizeIframe';
function Te(t) {
  return Object.prototype.hasOwnProperty.call(t, 'current');
}
function Io(t, e) {
  switch (e.type) {
    case 'setAutoOpened':
      return { ...t, autoOpened: e.payload };
    case 'setLoaded':
      return { ...t, loaded: e.payload };
    case 'setModalDismissable':
      return { ...t, modalDismissable: e.payload };
    case 'setModalVisible':
      return {
        ...t,
        modalVisible: e.payload,
        ...(e.payload && { modalDismissable: !1 }),
      };
    case 'setSessionDetected':
      return { ...t, sessionDetected: e.payload };
    case 'updateState':
      return { ...t, ...e.payload };
    default:
      return t;
  }
}
const Mo = ({ children: t }) => {
    const [e, n] = sn(Io, {
        autoOpened: !1,
        loaded: !1,
        modalDismissable: !1,
        modalVisible: !1,
        sessionDetected: !1,
      }),
      o = X(() => {
        const {
          autoOpened: r,
          loaded: i,
          modalDismissable: s,
          modalVisible: c,
          sessionDetected: a,
        } = e;
        return {
          autoOpened: r,
          dispatch: n,
          loaded: i,
          modalDismissable: s,
          modalVisible: c,
          sessionDetected: a,
        };
      }, [n, e]);
    return x(Ie.Provider, { value: o, children: t });
  },
  Do = { languages: [], userAgent: '', userLanguage: '', credentials: {} },
  Vt = typeof navigator > 'u' ? Do : navigator;
var zo = { bugsnagApiKey: 'e35d7136cee78d344ccffdbd5ca710fa' };
class tn extends an {
  counter(e) {
    super.counter(e), this.exportMetrics();
  }
  histogram(e) {
    super.histogram(e), this.exportMetrics();
  }
  gauge(e) {
    super.gauge(e), this.exportMetrics();
  }
}
class No {
  #t;
  constructor(e) {
    this.#t = e;
  }
  async exportMetrics(e) {
    try {
      await this.#t.exportMetrics(e);
    } catch (n) {
      if (n instanceof he) {
        const o = n.metadata?.retryAfter;
        if (o) {
          await new Promise((r) => {
            setTimeout(() => this.exportMetrics(e).finally(r), o.seconds * 1e3);
          });
          return;
        }
      }
      throw n;
    }
  }
  async exportLogs(e) {
    try {
      await this.#t.exportLogs(e);
    } catch (n) {
      if (n instanceof he) {
        const o = n.metadata?.retryAfter;
        if (o) {
          await new Promise((r) => {
            setTimeout(() => this.exportLogs(e).finally(r), o.seconds * 1e3);
          });
          return;
        }
      }
      throw n;
    }
  }
}
const Vo = {
  blockedRequest: 'Blocked Request',
  emptyeEventCreatedAtMs: 'event_created_at_ms metadata field cannot be empty',
  errorParsingCreatedAtMs: 'Error parsing: X-Monorail-Edge-Event-Created-At-Ms',
  failedToReadRequestBody: 'Failed to read request body',
  incorrectContentType:
    'Incorrect Content-Type. Expected: application/json or text/plain',
  methodNotAllowed: 'Method Not Allowed',
  noPermissionToGetURL: 'Your client does not have permission to get URL',
  noResponseFromEdge: 'No response from edge',
  schemaValidationError: 'Schema validation error',
};
function Fo(t) {
  return (
    Object.values(Vo).find(([n, o]) => t.message.includes(o))?.[0] ||
    'otherErrors'
  );
}
const jo = 'https://otlp-http-production.shopifysvc.com/v1/metrics';
function en() {
  {
    const t = new cn(jo, 'shop-js');
    return new No(t);
  }
}
const $o = 'Backpressure applied',
  Wo = 'A network failure may have prevented the request from completing',
  Ho = (t) => !!(t?.includes(Wo) || t?.includes($o));
function Bo({ metadata: t, onNetworkError: e }) {
  return {
    apiKey: zo.bugsnagApiKey,
    appId: 'shop-js',
    appVersion: '1.0.31-1489-beta',
    onError: (n) => {
      const o = n.exceptions[0];
      if (!o) return !1;
      const r = o.errorClass,
        i = o.message,
        s = o.errorClass === 'NetworkError' || Ho(i),
        c = o.stacktrace.some((p) => p.inProject);
      if (s) return e(), !1;
      if (!c) return !1;
      const a = A.Shopify?.featureAssets?.['shop-js'],
        d = !!(a && Object.keys(a).length > 0),
        h = Array.from(K.querySelectorAll('script[src*="/shop-js/"]')).map(
          (p) => p.src
        );
      (n.device = {
        locale: Vt.userLanguage || Vt.language,
        userAgent: Vt.userAgent,
        orientation: A.screen?.orientation?.type,
        time: new Date().toISOString(),
      }),
        (n.groupingHash = `${r}:${i}`),
        (n.metaData = {
          ...n.metaData,
          ...t,
          custom: {
            ...n.metaData?.custom,
            ...t.custom,
            beta: !0,
            bundleLocale: '',
            compactUX: !0,
            domain: A?.location?.hostname,
            shopJsUrls: h,
            shopJsFeatureAssetsExist: d,
          },
        }),
        (n.request = { url: A.location.href });
    },
    releaseStage: 'production',
  };
}
class nn {
  opentelClient = new tn({ exporter: en() });
  constructor(e) {
    const n = Bo({
      metadata: { custom: { feature: e } },
      onNetworkError: this.handleNetworkError.bind(this),
    });
    (this.client = new ln(n)),
      (this.feature = e || ''),
      (this.leaveBreadcrumb = this.leaveBreadcrumb.bind(this)),
      (this.notify = this.notify.bind(this));
  }
  leaveBreadcrumb(e, n, o) {
    if (!this.client) {
      console.log('Bugsnag.leaveBreadcrumb() called before client creation.');
      return;
    }
    this.client.leaveBreadcrumb(e, n, o);
  }
  async notify(e, n) {
    if (!this.client) {
      console.warn('Bugsnag.notify() called before client creation.');
      return;
    }
    this.client.notify(e, n);
  }
  handleNetworkError() {
    this.opentelClient.counter({
      attributes: { beta: !0, feature: this.feature, error: 'NetworkError' },
      name: 'shop_js_network_error',
      value: 1,
    });
  }
}
const Uo = ({ children: t }) => {
  const { featureName: e } = Ct(),
    n = X(() => {
      e ||
        (['development', 'spin'].includes('production') &&
          console.warn('BugsnagProvider created without a feature name.'));
      const { client: o, leaveBreadcrumb: r, notify: i } = new nn(e);
      return { client: o, leaveBreadcrumb: r, notify: i };
    }, [e]);
  return x(Me.Provider, { value: n, children: t });
};
function qo({ children: t }) {
  const [e] = un(),
    { notify: n } = St();
  return (
    z(() => {
      e &&
        n(e instanceof Error ? e : new Lt(e, 'UnhandledError'), {
          context: 'Error in Preact tree',
        });
    }, [e, n]),
    x(kt, { children: t })
  );
}
function Yo(t, e) {
  let n;
  return function (...o) {
    clearTimeout(n), (n = setTimeout(() => t.apply(this, o), e));
  };
}
function Xo(t) {
  switch (t) {
    case './translations/bg-BG.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.b),
        []
      );
    case './translations/cs.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.c),
        []
      );
    case './translations/da.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.d),
        []
      );
    case './translations/de.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.a),
        []
      );
    case './translations/el.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.e),
        []
      );
    case './translations/en.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.f),
        []
      );
    case './translations/es.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.g),
        []
      );
    case './translations/fi.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.h),
        []
      );
    case './translations/fr.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.i),
        []
      );
    case './translations/hi.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.j),
        []
      );
    case './translations/hr-HR.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.k),
        []
      );
    case './translations/hu.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.l),
        []
      );
    case './translations/id.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.m),
        []
      );
    case './translations/it.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.n),
        []
      );
    case './translations/ja.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.o),
        []
      );
    case './translations/ko.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.p),
        []
      );
    case './translations/lt-LT.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.q),
        []
      );
    case './translations/ms.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.r),
        []
      );
    case './translations/nb.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.s),
        []
      );
    case './translations/nl.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.t),
        []
      );
    case './translations/pl.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.u),
        []
      );
    case './translations/pt-BR.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.v),
        []
      );
    case './translations/pt-PT.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.w),
        []
      );
    case './translations/ro-RO.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.x),
        []
      );
    case './translations/ru.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.y),
        []
      );
    case './translations/sk-SK.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.z),
        []
      );
    case './translations/sl-SI.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.A),
        []
      );
    case './translations/sv.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.B),
        []
      );
    case './translations/th.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.C),
        []
      );
    case './translations/tr.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.D),
        []
      );
    case './translations/vi.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.E),
        []
      );
    case './translations/zh-CN.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.F),
        []
      );
    case './translations/zh-TW.json':
      return I(
        () => import('./shop-js-translations.CaP3R7wd.js').then((e) => e.G),
        []
      );
    default:
      return new Promise(function (e, n) {
        (typeof queueMicrotask == 'function'
          ? queueMicrotask
          : setTimeout)(n.bind(null, new Error('Unknown variable dynamic import: ' + t)));
      });
  }
}
function Jt(t) {
  return go.includes(t);
}
const Ft = [],
  jt = [],
  wt = new Map();
function Ko(t) {
  let e = {};
  const n = wt.get(t);
  jt.forEach((o) => {
    e = { ...e, ...o };
  }),
    wt.set(t, { ...n, ...e }),
    Ft.forEach((o) => o()),
    Ft.splice(0, Ft.length),
    jt.splice(0, jt.length);
}
const Go = Yo(Ko, 250);
function Zo({ children: t, getFeatureDictionary: e, overrideLocale: n }) {
  const { notify: o } = St(),
    [r, i] = et('en'),
    { featureName: s } = Ct(),
    [c, a] = et(wt.size < 1),
    d = B(() => {
      const l = Object.freeze(
        [n, K.documentElement.lang, A.Shopify?.locale, ...Vt.languages].filter(
          (w) => w
        )
      );
      let f;
      for (const w of l) {
        if (Jt(w)) {
          f = w;
          break;
        }
        try {
          const m = new Intl.Locale(w);
          if (m.language && Jt(m.language)) {
            f = m.language;
            break;
          } else console.error(`Unsupported locale: "${w}"`);
        } catch {
          console.error(`Invalid locale: "${w}"`);
        }
      }
      return f || 'en';
    }, [n]),
    h = B(async () => {
      if (Jt(r)) {
        if (!wt.has(r)) {
          a(!0);
          try {
            const l = await Xo(`./translations/${r}.json`);
            wt.set(r, l);
          } catch (l) {
            o(
              new Lt(
                `Failed to fetch translations for locale ${r}: ${l}`,
                'TranslationFetchError'
              )
            );
          }
        }
        if (s && e) {
          a(!0);
          const l = e ? await e(r) : {};
          jt.push(l);
        }
        Ft.push(() => a(!1)), Go(r);
      }
    }, [s, e, r, o]);
  z(() => {
    const l = d();
    i(l);
  }, [d]),
    z(() => {
      try {
        h();
      } catch (l) {
        l instanceof Error && o(l);
      }
    }, [h, r, o]);
  const p = X(() => ({ locale: r, translations: wt }), [r]);
  return x(Ge.Provider, { value: p, children: !c && t });
}
function Jo(t, e = 200) {
  const n = Y(),
    o = Y(t);
  return (
    (o.current = t),
    B(
      (...r) => {
        n.current != null && clearTimeout(n.current),
          (n.current = setTimeout((...i) => o.current?.(...i), e, ...r));
      },
      [e]
    )
  );
}
function Re() {
  const t = K.querySelector('script#shop-js-analytics')?.innerHTML;
  return t ? JSON.parse(t) : {};
}
async function Ae() {
  let t;
  return Promise.race([
    new Promise((n) => (t = setTimeout(() => n({}), 1e4))),
    new Promise((n) => {
      (A.ShopifyAnalytics?.lib?.ready || A.analytics?.ready)?.(() => {
        const r = A.ShopifyAnalytics?.lib?.trekkie || A.analytics?.trekkie;
        n(r.defaultAttributes);
      });
    }),
  ]).finally(() => clearTimeout(t));
}
async function ie(...t) {
  if (!A.ShopifyAnalytics && !A.analytics) return {};
  let e;
  !!A.trekkie?.ready
    ? (e = Ae())
    : ((A.trekkie = A.trekkie || []),
      (e = new Promise((r) => {
        A.trekkie.push([
          'ready',
          () => {
            r(Ae());
          },
        ]);
      })));
  const o = await e;
  return t.reduce((r, i) => {
    const s = o[i];
    return s !== void 0 && (r[i] = s), r;
  }, {});
}
const Nt = 'unspecified',
  Qo = dn.createHttpProducer({ production: !0 });
class tr {
  #t;
  trackedPageImpressions = new Set();
  constructor({
    analyticsData: e,
    devMode: n = !1,
    notify: o,
    recordCounter: r,
  }) {
    (this.#t = { ...e, flowVersion: e.flowVersion ?? Nt }),
      (this.devMode = n),
      (this.notify = o),
      (this.recordCounter = r),
      (this.clearTrackedPageImpressions =
        this.clearTrackedPageImpressions.bind(this)),
      (this.produceMonorailEvent = this.produceMonorailEvent.bind(this)),
      (this.trackFeatureInitialization =
        this.trackFeatureInitialization.bind(this)),
      (this.trackModalStateChange = this.trackModalStateChange.bind(this)),
      (this.trackPageImpression = this.trackPageImpression.bind(this)),
      (this.trackUserAction = this.trackUserAction.bind(this));
  }
  get analyticsData() {
    return this.#t;
  }
  set analyticsData(e) {
    const n = { ...this.#t, ...e };
    Ot(n, this.#t) || (this.#t = n);
  }
  clearTrackedPageImpressions() {
    this.trackedPageImpressions.clear();
  }
  produceMonorailEvent({ event: e, onError: n, trekkieAttributes: o }) {
    if (this.devMode) return;
    const r = (i) =>
      !(i instanceof fn) && !i?.message?.includes('Invalid agent:');
    if (o && !Object.keys(o).length) {
      n?.({ message: 'trekkie attributes are empty' });
      return;
    }
    (e.payload = Object.assign(e.payload, o)),
      Qo.produce(e).catch((i) => {
        if ((n?.(i), r(i))) {
          const s =
            i instanceof Error ? i : new Lt(String(i), 'MonorailProducerError');
          if ((this.notify?.(s), this.recordCounter)) {
            const c = Fo(s);
            this.recordCounter('shop_js_monorail_producer_error', {
              attributes: { error: c },
            });
          }
        }
      });
  }
  async trackFeatureInitialization() {
    const {
      analyticsTraceId: e,
      apiKey: n,
      checkoutToken: o,
      flow: r,
      flowVersion: i = Nt,
      shopId: s,
      source: c = 'unspecified',
    } = this.analyticsData;
    if (!r) return;
    const d = Re()?.pageType ?? '',
      h = await ie(
        'customerId',
        'isPersistentCookie',
        'path',
        'uniqToken',
        'visitToken'
      ),
      p = {
        ...(n && { apiKey: n }),
        ...(o && { checkoutToken: o }),
        ...(s && { shopId: s }),
        ...h,
        analyticsTraceId: e,
        flow: r,
        flowVersion: i,
        sdkVersion: '1.0.31-1489-beta',
        shopPermanentDomain: A.Shopify?.shop ?? '',
        source: c,
        storefrontPageType: d,
      };
    this.produceMonorailEvent({
      event: {
        schemaId: 'shopify_pay_login_with_shop_sdk_feature_initialize/1.0',
        payload: p,
      },
    });
  }
  trackModalStateChange({ currentState: e, dismissMethod: n, reason: o }) {
    const {
      analyticsTraceId: r,
      checkoutToken: i,
      flow: s,
      flowVersion: c = 'unspecified',
    } = this.analyticsData;
    s &&
      (this.produceMonorailEvent({
        event: {
          schemaId: 'shop_identity_modal_state_change/1.4',
          payload: {
            analyticsTraceId: r,
            checkoutToken: i,
            currentState: e,
            dismissMethod: n,
            flow: s,
            flowVersion: c,
            previousState: this.previousModalState,
            reason: o,
            zoom: `${A.visualViewport?.scale}`,
          },
        },
      }),
      (this.previousModalState = e));
  }
  async trackPageImpression({
    page: e,
    shopAccountUuid: n,
    allowDuplicates: o = !1,
  }) {
    if (!o && this.trackedPageImpressions.has(e)) return;
    const {
      analyticsTraceId: r,
      apiKey: i,
      checkoutToken: s,
      flow: c,
      flowVersion: a = Nt,
    } = this.analyticsData;
    if (!c) return;
    this.trackedPageImpressions.add(e);
    const h = Re()?.pageType ?? '',
      p = await ie(
        'customerId',
        'isPersistentCookie',
        'path',
        'uniqToken',
        'visitToken'
      ),
      l = {
        ...(i && { apiKey: i }),
        ...(s && { checkoutToken: s }),
        ...(n && { shopAccountUuid: n }),
        ...p,
        analyticsTraceId: r,
        flow: c,
        flowVersion: a,
        pageName: e,
        sdkVersion: '1.0.31-1489-beta',
        shopPermanentDomain: A.Shopify?.shop ?? '',
        storefrontPageType: h,
      };
    this.produceMonorailEvent({
      event: {
        payload: l,
        schemaId: 'shopify_pay_login_with_shop_sdk_page_impressions/3.3',
      },
      onError: () => {
        this.trackedPageImpressions.delete(e);
      },
      trekkieAttributes: p,
    });
  }
  trackUserAction({ userAction: e }) {
    const {
      analyticsTraceId: n,
      apiKey: o,
      checkoutToken: r,
      checkoutVersion: i,
      flow: s,
      flowVersion: c = Nt,
      shopId: a,
    } = this.analyticsData;
    if (!s) return;
    const d = {
      ...(o && { apiKey: o }),
      ...(r && { checkoutToken: r }),
      ...(i && { checkoutVersion: i }),
      ...(a && { shopId: a }),
      analyticsTraceId: n,
      flow: s,
      flowVersion: c,
      sdkVersion: '1.0.31-1489-beta',
      shopPermanentDomain: A.Shopify?.shop ?? '',
      userAction: e,
    };
    this.produceMonorailEvent({
      event: {
        schemaId: 'shopify_pay_login_with_shop_sdk_user_actions/2.2',
        payload: d,
      },
    });
  }
}
const er = ({
  analyticsContext: t = 'loginWithShop',
  apiKey: e,
  checkoutVersion: n,
  checkoutToken: o,
  children: r,
  flow: i,
  flowVersion: s,
  shopId: c = 0,
  shopPermanentDomain: a,
  source: d,
}) => {
  const { notify: h } = St(),
    { recordCounter: p } = Ne(),
    { devMode: l, instanceId: f } = Ct(),
    w = Y({
      analyticsContext: t,
      analyticsTraceId: f,
      apiKey: e,
      checkoutVersion: n,
      checkoutToken: o,
      flow: i,
      flowVersion: s,
      shopId: c,
      shopPermanentDomain: a,
      source: d,
    }),
    m = X(
      () =>
        new tr({
          analyticsData: w.current,
          devMode: l,
          notify: h,
          recordCounter: p,
        }),
      [l, h, p]
    );
  (m.analyticsData = {
    ...w.current,
    analyticsTraceId: f,
    analyticsContext: t,
    apiKey: e,
    checkoutVersion: n,
    checkoutToken: o,
    flow: i,
    flowVersion: s,
    shopId: c,
    shopPermanentDomain: a,
    source: d,
  }),
    z(
      () => () => {
        m.clearTrackedPageImpressions();
      },
      [m]
    );
  const y = Jo(() => m.trackFeatureInitialization(), 500);
  z(() => {
    y();
  }, [y]);
  const k = X(
    () => ({
      analyticsData: m.analyticsData,
      getTrekkieAttributes: ie,
      produceMonorailEvent: m.produceMonorailEvent,
      trackModalStateChange: m.trackModalStateChange,
      trackPageImpression: m.trackPageImpression,
      trackUserAction: m.trackUserAction,
    }),
    [
      m.analyticsData,
      m.produceMonorailEvent,
      m.trackModalStateChange,
      m.trackPageImpression,
      m.trackUserAction,
    ]
  );
  return x(De.Provider, { value: k, children: r });
};
function nr({ children: t }) {
  const { featureName: e } = Ct(),
    n = X(() => new tn({ exporter: en() }), []),
    o = B(
      (c, a = {}) => {
        const { attributes: d, unit: h, value: p = 1 } = a;
        n.counter({
          attributes: { beta: !0, feature: e, ...d },
          name: c,
          value: p,
          unit: h,
        });
      },
      [n, e]
    ),
    r = B(
      (c, a = {}) => {
        const { attributes: d, unit: h, value: p = 1 } = a;
        n.gauge({
          attributes: { beta: !0, feature: e, ...d },
          name: c,
          value: p,
          unit: h,
        });
      },
      [n, e]
    ),
    i = B(
      (c, a = {}) => {
        const { attributes: d, unit: h, value: p = 1, bounds: l } = a;
        n.histogram({
          attributes: { beta: !0, feature: e, ...d },
          bounds: l,
          name: c,
          value: p,
          unit: h,
        });
      },
      [n, e]
    ),
    s = X(
      () => ({
        client: n,
        recordCounter: o,
        recordGauge: r,
        recordHistogram: i,
      }),
      [n, o, r, i]
    );
  return x(ze.Provider, { value: s, children: t });
}
const or = `
@font-face {
  font-family: 'SuisseIntl';
  src: url('https://cdn.shopify.com/shop-assets/static_uploads/shoplift/SuisseIntl-Book.otf')
    format('opentype');
  font-style: normal;
  font-weight: 450;
  font-display: fallback;
}

@font-face {
  font-family: 'SuisseIntl';
  src: url('https://cdn.shopify.com/shop-assets/static_uploads/shoplift/SuisseIntl-Medium.otf')
    format('opentype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}

@font-face {
  font-family: 'SuisseIntl';
  src: url('https://cdn.shopify.com/shop-assets/static_uploads/shoplift/SuisseIntl-SemiBold.otf')
    format('opentype');
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
}`,
  dr = ({
    children: t,
    devMode: e = !1,
    element: n,
    featureName: o,
    getFeatureDictionary: r,
    metricsEnabled: i = !0,
    monorailProps: s,
    overrideLocale: c,
  }) => {
    z(() => {
      if (K.querySelector('style[data-description="shop-js-font-faces"]'))
        return;
      const h = K.createElement('style');
      (h.dataset.description = 'shop-js-font-faces'),
        h.appendChild(K.createTextNode(or)),
        K.head.appendChild(h);
    }, []);
    const a = X(() => Oe(), []);
    z(() => {
      n && n.setAttribute('data-instance-id', a);
    }, [n, a]);
    const d = X(
      () => ({ devMode: e, element: n, featureName: o, instanceId: a }),
      [e, n, o, a]
    );
    return x(je.Provider, {
      value: d,
      children: x(rr, {
        enabled: i,
        monorailProps: s,
        children: x(Zo, {
          getFeatureDictionary: r,
          overrideLocale: c,
          children: x(Mo, { children: t }),
        }),
      }),
    });
  };
function rr({ children: t, enabled: e = !0, monorailProps: n }) {
  return e
    ? x(Uo, {
        children: x(qo, {
          children: x(nr, { children: x(er, { ...n, children: t }) }),
        }),
      })
    : x(kt, { children: t });
}
const ir = {
    stringify: (t) =>
      t === '' ? 'true' : t ? /^[ty1-9]/i.test(t).toString() : 'false',
    parse: (t, e, n) =>
      t === '' ? !0 : t ? /^[ty1-9]/i.test(t) : n.hasAttribute(e) && t === null,
  },
  sr = {
    stringify: (t) =>
      typeof t == 'function'
        ? t.name.replace('bound ', '')
        : typeof t == 'string'
        ? t.replace('bound ', '')
        : t,
    parse: (t, e, n) => {
      if (!t) return null;
      const o = (() => {
        if (typeof window < 'u') return window[t];
        if (typeof global < 'u') return global[t];
      })();
      return typeof o == 'function' ? o.bind(n) : void 0;
    },
  },
  ar = {
    stringify: (t) => `${t}`,
    parse: (t) => {
      if (t) return parseFloat(t);
    },
  },
  cr = {
    stringify: (t) => t,
    parse: (t) => {
      if (t) return t;
    },
  },
  Qt = { boolean: ir, function: sr, number: ar, string: cr };
function fr(t, { methods: e, name: n, props: o, shadow: r }) {
  if (typeof window > 'u') return;
  function i() {
    const l = _n(i);
    if (
      ((l._vdomComponent = t),
      (l._root = r ? l.attachShadow({ mode: r }) : l),
      r)
    ) {
      const f = new CSSStyleSheet();
      f.replace(Qe), (l._root.adoptedStyleSheets = [f]);
    }
    return l;
  }
  const s = new Map();
  Object.entries(o || {}).forEach(([l, f]) => {
    const w = En(l);
    s.set(w, { attribute: w, preactProp: l, type: f });
  });
  const c = Array.from(s.values()).map(({ attribute: l }) => l);
  (i.prototype = Object.create(HTMLElement.prototype)),
    (i.prototype.constructor = i),
    (i.observedAttributes = c),
    (i.prototype.attributeChangedCallback = function (f, w, m) {
      if (!this._vdom) return;
      const y = s.get(f);
      if (!y) return;
      const { preactProp: k, type: b } = y,
        _ = Qt[b],
        E = {};
      if (!m && b === 'boolean') {
        const v = _.parse(m, f, this);
        (E[f] = v), (E[k] = v);
      } else if (b && m) {
        const v = _.parse(m, f, this);
        (E[f] = v), (E[k] = v);
      }
      (this._vdom = me(this._vdom, E)), Yt(this._vdom, this._root);
    }),
    (i.prototype.connectedCallback = function () {
      const f = new CustomEvent('_preact', {
        detail: {},
        bubbles: !0,
        cancelable: !0,
      });
      this.dispatchEvent(f);
      const w = f.detail.context;
      (this._vdom = Dt(
        a,
        { ...this._props, context: w, element: this },
        h(this, this._vdomComponent)
      )),
        Yt(this._vdom, this._root);
    }),
    e?.forEach((l) => {
      i.prototype[l] = function (f) {
        this.dispatchEvent(new CustomEvent(l, { detail: f }));
      };
    }),
    (i.prototype.disconnectedCallback = function () {
      Yt((this._vdom = null), this._root);
    });
  function a(l) {
    this.getChildContext = () => l.context;
    const { context: f, children: w, ...m } = l;
    return me(w, m);
  }
  function d(l) {
    return Dt('slot', { ...l });
  }
  function h(l, f) {
    if (l.nodeType === 3) return l.data;
    if (l.nodeType !== 1) return null;
    const w = {},
      m = [],
      { childNodes: y } = l;
    s.forEach(({ attribute: b, preactProp: _, type: E }) => {
      const v = Qt[E],
        O = l.getAttribute(b);
      let T = O;
      (E === 'boolean' || O) && (T = v.parse(O, b, l)),
        T !== null && ((w[b] = T), (w[_] = T));
    });
    for (const b of y) {
      const _ = h(b, null);
      m.push(_);
    }
    const k = f ? Dt(d, null, m) : m;
    return Dt(f, w, k);
  }
  s.forEach(({ attribute: l, type: f }) => {
    const w = Qt[f];
    Object.defineProperty(i.prototype, l, {
      get() {
        return this._vdom.props[l];
      },
      set(m) {
        let y = m;
        this._vdom
          ? this.attributeChangedCallback(l, null, m)
          : (f === 'boolean'
              ? (y = w.parse(m, l, this))
              : m && (y = w.parse(m, l, this)),
            this._props || (this._props = {}),
            (this._props[l] = y),
            this.connectedCallback()),
          this.setAttribute(l, w.stringify(y));
      },
    });
  });
  const p = customElements.get(n);
  if (p) {
    const l = p.componentVersion;
    if (l && l !== 'preact') {
      const { notify: f } = new nn(n);
      f(
        new Lt(
          `Custom element ${n} already registered by ${l}`,
          'CustomElementAlreadyDefinedError'
        )
      );
    }
    return;
  }
  return (
    Reflect.defineProperty?.(i, 'componentVersion', { value: 'preact' }),
    xn(n, i)
  );
}
export {
  Lt as A,
  wn as C,
  Ve as P,
  dr as R,
  Ct as a,
  Vt as b,
  K as c,
  se as d,
  St as e,
  hn as f,
  ur as g,
  Jo as h,
  A as i,
  Po as j,
  fr as r,
  yo as u,
};
