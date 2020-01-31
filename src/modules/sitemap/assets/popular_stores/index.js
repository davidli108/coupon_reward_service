// @flow
//en
function paid_placement(popularStores) {
  const paidplacementStores = [];
  if (popularStores !== false) {
    popularStores.then(function(result) {
      if (typeof result.featured_stores !== 'undefined' && typeof result.paid_placements !== 'undefined') {
        const paidPlacements = result.paid_placements;
        const featuredStore = result.featured_stores;
        const siteMapNum = 0;
        const paidPlacementLength = paidPlacements.length;
        const featuredLength = featuredStore.length;
        const siteMapMaxCount = paidPlacementLength + featuredLength;
        [].slice.call(paidPlacements).forEach(v => {
          const paidplacementStore = {};
          if (typeof v !== 'undefined') {
            paidplacementStore.logo = v.logo_url;
            paidplacementStore.name = v.store_data.store_name
            if (v.store_data.cashback_numeric_type === "1" && (v.country === "GB" || v.country === "US")) {
              paidplacementStore.discount = v.currency_symbol + v.cashback_text;
            } else if (v.store_data.cashback_numeric_type === "1" && (v.country === "DE" || v.country === "FR")) {
              paidplacementStore.discount =  v.cashback_text + ' ' + v.currency_symbol;
            } else {
              paidplacementStore.discount = v.store_discount_print;
            }
            paidplacementStore.short_name = v.short_name;
            paidplacementStore.position = v.position;
            paidplacementStore.kind = 'paid_placements';

            paidplacementStores[v.position - 1] = paidplacementStore;
          }
        });

        [].slice.call(featuredStore).forEach(v => {
          const paidplacementStore = {};
          if (typeof v !== 'undefined') {
            paidplacementStore.logo = v.offer_img;
            paidplacementStore.name = v.store_name;
            paidplacementStore.discount = v.cashback_text;
            paidplacementStore.short_name = v.short_name;
            paidplacementStore.kind = 'featured_store';

            proccessedFeaturedStores(
              paidplacementStores,
              paidplacementStore,
              siteMapNum,
              siteMapMaxCount,
            );
          }
        });
      }
    });
  }
  return paidplacementStores;
}

function proccessedFeaturedStores(
  paidplacementStores,
  paidplacementStore,
  siteMapNum,
  siteMapMaxCount,
) {
  if (siteMapNum < siteMapMaxCount + 1) {
    if (typeof paidplacementStores[siteMapNum] !== 'undefined') {
      siteMapNum = siteMapNum + 1;
      proccessedFeaturedStores(
        paidplacementStores,
        paidplacementStore,
        siteMapNum,
        siteMapMaxCount,
      );
    } else {
      paidplacementStores[siteMapNum] = paidplacementStore;
    }
  }
}

async function getpopularStores() {
  try {
    const response = await fetch('/api/sitemapplacements');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return false;
  }
}

export const popularStore = getpopularStores();
export const en = paid_placement(popularStore);

export default {
  en,
  de: en,
  fr: en,
  gb: en,
};
