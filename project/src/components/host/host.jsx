import React from 'react';
import userProp from '../../types/user.prop';

function Host({ user }) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={user.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {user.name}
        </span>
        {user.isPro && (
          <span className="property__user-status">
            Pro
          </span>
        )}
      </div>
    </div>
  );
}

Host.propTypes = {
  user: userProp.isRequired,
};

export default Host;
