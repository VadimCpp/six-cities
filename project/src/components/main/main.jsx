import React from 'react';

function Main() {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <span>6 cities</span>
        </div>
        <div className="header__user">
          <span>Oliver.conner@gmail.com</span>
        </div>
        <ul className="header__cities">
          <li>Paris</li>
          <li>Cologne</li>
          <li>Brussels</li>
          <li>Amsterdam</li>
          <li>Hamburg</li>
          <li>Dusseldorf</li>
        </ul>
      </div>

      <div className="hotels">
        <div className="hotel">Hotel #1</div>
        <div className="hotel">Hotel #2</div>
        <div className="hotel">Hotel #3</div>
        <div className="hotel">Hotel #4</div>
        <div className="hotel">Hotel #5</div>
      </div>

      <div className="map">
        <span>TODO: insert map</span>
      </div>
    </div>
  );
}

export default Main;
