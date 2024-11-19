
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.BVWgFUkR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.vlk0BXC7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage.D5GD5N3w.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.miKR1ut4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.D6Lyf9tg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.FbptU8La.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.4y8yxsBh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.B2qC2S98.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MarketsProDisclaimer.BLdwqKM1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.DQEYsJeF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.6y0RAb_1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.JYM_FGl3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.BhOC1oON.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DonyP8sh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useIsOriginatedFromShop.PmHWCPbq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.B_zj1yOf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.CBBtQ7mC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.CJAgrU8f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader.Bpw9NQYp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.CbPFfXao.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.CjUS16Da.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.CTsE8yze.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.BOoUlvL6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.RWcnWNqQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.DCn2aTXz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.7KdnRwIH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.E6qCGjPB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.dMGwgt8R.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.whj6cDzT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0840/7954/2579/files/d_x320.png?v=1697369889","https://cdn.shopify.com/s/files/1/0840/7954/2579/files/d_6_2000x.png?v=1717415588"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  