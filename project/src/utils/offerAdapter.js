const OfferAdapter = {
  getOffer: (offer) => ({
    ...offer,
    preview: offer['preview_image'] || offer['preview'],
    maxAdults: offer['max_adults'] || offer['maxAdults'],
    isPremium: offer['is_premium'] || offer['isPremium'],
    isFavorite: offer['is_favorite'] || offer['isFavorite'],
    host: {
      ...offer.host,
      avatarUrl: offer['host']['avatar_url'] || offer['host']['avatarUrl'],
      isPro: offer['host']['is_pro'] || offer['host']['isPro'],
    },
  }),
  getOffers: (offers) => offers.reduce((acc, offer) => {
    acc[offer.id] = OfferAdapter.getOffer(offer);
    return acc;
  }, {}),
};

export default OfferAdapter;
