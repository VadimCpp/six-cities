import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../types/city.prop';
import offersProp from '../../types/offers.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ICON = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
});

const ICON_ACTIVE = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
});

function CitiesMap({ city, offers, className = '', activeOfferId = 0 }) {
  const map = useRef();
  const mapRef = useRef();
  const markers = useRef([]);

  //
  // NOTE!
  // Одноразово инициализировать карту
  //
  useEffect(() => {
    map.current = leaflet.map(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true,
    });

    map.current.scrollWheelZoom.disable();

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map.current);

    map.current.setView([ city.location.latitude, city.location.longitude ], city.location.zoom);

    return () => {
      map.current.remove();
    };
  }, [city]);

  //
  // NOTE!
  // Инициализировать и отрисовать маркеры
  //
  useEffect(() => {
    if (map.current) {
      Object.values(offers).forEach((o) => {
        const coords = [
          o.location.latitude,
          o.location.longitude,
        ];
        markers.current.push({
          markerLayer: leaflet.marker(coords, {icon: o.id === activeOfferId ? ICON_ACTIVE : ICON}).addTo(map.current),
          offerId: o.id,
        });
      });
    }

    return () => {
      markers.current.forEach((marker) => {
        marker.markerLayer.remove();
      });
      markers.current = [];
    };
  }, [offers]);

  //
  // NOTE!
  // Обновить маркеры
  //
  useEffect(() => {
    markers.current.forEach((marker) => {
      marker.markerLayer.setIcon(marker.offerId === activeOfferId ? ICON_ACTIVE : ICON);
    });
  }, [activeOfferId]);

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
  activeOfferId: PropTypes.number,
};

export { CitiesMap };
export default React.memo(CitiesMap);
