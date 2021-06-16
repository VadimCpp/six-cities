import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offersProp from '../offers/offers.prop';

function CitiesMap({offers, city}) {
  const map = useRef();
  const mapRef = useRef();

  //
  // NOTE!
  // Одноразово инициализируем карту
  //
  useEffect(() => {
    map.current = leaflet.map(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true,
    });

    return () => {
      map.current.remove();
    };
  }, [city]);

  useEffect(() => {
    if (map.current && offers.length) {
      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(map.current);

      map.current.setView([ city.location.latitude, city.location.longitude ], city.location.zoom);

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
  }, [offers ,city]);

  return (
    <div
      className="cities__right-section"
      id="map"
      ref={mapRef}
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
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CitiesMap;
