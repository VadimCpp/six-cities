//
// Формирует структуру такого типа:
// [
//   {
//     name: "Hamburg",
//     offers: [
//       { ... },
//       { ... },
//       ...
//     ],
//   },
//   {
//     name: "Cologne",
//     offers: [
//       { ... },
//       { ... },
//       ...
//     ],
//   },
//   ...
// ];
//
function groupByCities(offers = []) {
  const cities = [];

  offers.forEach((o) => {
    if (o.isFavorite) {
      let city = cities.find((c) => c.name === o.city.name) ;
      if (!city) {
        city = {
          name: o.city.name,
          offers: [o],
        };
        cities.push(city);
      } else {
        city.offers.push(o);
      }
    }
  });

  return cities;
}

export default groupByCities;
