import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offersProp from '../offers/offers.prop';

function CitiesMap({offers}) {
  const map = useRef();

  //
  // NOTE!
  // Одноразово инициализируем карту
  //
  useEffect(() => {
    const city = [52.38333, 4.9];
    const zoom = 12;
    map.current = leaflet.map('map', {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });

    return () => {
      map.current.remove();
    };
  }, []);

  useEffect(() => {
    if (map.current && offers.length) {
      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(map.current);

      const city = [
        offers[0].city.location.latitude,
        offers[0].city.location.longitude,
      ];
      const zoom = offers[0].city.location.zoom;
      map.current.setView(city, zoom);

      const icon = leaflet.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [30, 30],
      });

      offers.forEach((o) => {
        const coords = [
          o.location.latitude,
          o.location.longitude,
        ];
        leaflet
          .marker(coords, {icon})
          .addTo(map.current);
      });
    }
  }, [offers]);

  return (
    <div
      className="cities__right-section"
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
