import React, { useEffect } from 'react';
import leaflet from 'leaflet';
import offersProp from '../offers/offers.prop';

function CitiesMap({offers}) {

  useEffect(() => {
    try {
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [30, 30],
      });

      const zoom = 12;
      const map = leaflet.map('map', {
        center: city,
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });
      map.setView(city, zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        })
        .addTo(map);

      const offerCords = [52.3709553943508, 4.89309666406198];
      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    }
    catch(err) {
      //
      // NOTE!
      // При обновлении окна в дебаге часто появляется ошибка:
      // "Карта уже инициализирована"
      // Игнорируем...
      //
    }
  }, []);

  return (
    <section
      id="map"
      style={{
        width: '512px',
        height: '647px',
        overflow: 'hidden',
      }}
    />
  );
}

CitiesMap.propTypes = {
  offers: offersProp.isRequired,
};

export default CitiesMap;
