//
// Формирует структуру такого типа:
// [
//   {
//     name: "Hamburg",
//     location: {
//        latitude: 53.550341
//        longitude: 10.000654
//        zoom: 13
//     }
//   },
//   {
//     name: "Amsterdam",
//     location: {
//        latitude: 53.550341
//        longitude: 10.000654
//        zoom: 13
//     }
//   },
//   ...
// ];
//
function getCities(offers) {
  const cities = offers.reduce((accumulator, currentValue) => {
    let result = [];
    if (accumulator && accumulator.length) {
      if (accumulator.find((c) => c.name === currentValue.city.name)) {
        result = [ ...accumulator ];
      }
      else
      {
        result = [ ...accumulator, currentValue.city];
      }
    } else {
      result = [ currentValue.city ];
    }
    return result;
  });

  return cities;
}

export default getCities;
