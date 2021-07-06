const OfferAdapter = {
  getOffer: (offer) => ({
    ...offer,
    preview: offer['preview_image'],
    maxAdults: offer['max_adults'],
    isPremium: offer['is_premium'],
    isFavorite: offer['is_favorite'],
    host: {
      ...offer.host,
      avatarUrl: offer['host']['avatar_url'],
      isPro: offer['host']['is_pro'],
    },
  }),
  getOffers: (offers) => offers.reduce((acc, offer) => {
    acc[offer.id] = OfferAdapter.getOffer(offer);
    return acc;
  }, {}),
};

export default OfferAdapter;
