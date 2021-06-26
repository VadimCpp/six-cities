import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../types/city.prop';
import offersProp from '../../types/offers.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

//
// NOTE!
// FIX leaflet's default icon path problems with webpack
// https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-483044484
//
leaflet.Icon.Default.prototype._getIconUrl = function (name) {
  if (!leaflet.Icon.Default.imagePath) {    // Deprecated, backwards-compatibility only
    leaflet.Icon.Default.imagePath = this._detectIconPath();
  }

  // @option imagePath: String
  // `L.Icon.Default` will try to auto-detect the absolute location of the
  // blue icon images. If you are placing these images in a non-standard
  // way, set this option to point to the right absolute path.
  const url = (this.options.imagePath || leaflet.Icon.Default.imagePath);

  return url.slice(0, - 2);
};

// eslint-disable-next-line no-unused-vars
const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
});

// eslint-disable-next-line no-unused-vars
const activeIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
});

function CitiesMap({ city, offers, className = '', activeOfferId = 0 }) {
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
    if (map.current) {
      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(map.current);

      map.current.setView([ city.location.latitude, city.location.longitude ], city.location.zoom);

      offers.forEach((o, idx) => {
        const coords = [
          o.location.latitude,
          o.location.longitude,
        ];
        if (activeOfferId === o.id) {
          leaflet
            .marker(coords, {icon: activeIcon})
            .addTo(map.current);
        } else {
          leaflet
            .marker(coords, {icon})
            .addTo(map.current);
        }

      });
    }
  }, [city, offers, activeOfferId]);

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

export default CitiesMap;
