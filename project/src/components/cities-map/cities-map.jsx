import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../types/city.prop';
import offersProp from '../../types/offers.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
});

function CitiesMap({ city, offers, className = '' }) {
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
    <section className={`${className} map`}>
      <div
        id="map"
        ref={mapRef}
        style={{
          height: '100%',
        }}
      />
    </section>
  );
}

CitiesMap.propTypes = {
  city: cityProp.isRequired,
  offers: offersProp.isRequired,
  className: PropTypes.string,
};

export default CitiesMap;
