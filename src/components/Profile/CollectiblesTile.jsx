import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleCollectiblesModal,
} from '../../state/actions-modals';
import HeartGrey from '../../assets/HeartGrey.svg';
import '../../views/styles/Profile.css';
import '../styles/Collectibles.css';

const CollectiblesTile = ({
  image,
  description,
  name,
  addToGallery,
  padded,
  bgStyle,
  tokenId,
  id,
  favorite,
  onPublicProfile,
  handleCollectiblesModal,
  collectible,
}) => (
    <div className="collectiblesTile" onClick={() => handleCollectiblesModal(collectible)}>
      <div
        className="collectibles__image__wrapper"
        style={{ backgroundColor: `#${bgStyle}` }}
      >
        <img
          className={`collectibles__image ${padded === 'padded' && 'padded'}`}
          src={image}
          alt=""
        />

        {(!onPublicProfile && !favorite) && (
          <button
            type="button"
            className="collectibles__like"
            onClick={() => addToGallery(id)}
          >
            <img src={HeartGrey} alt="" className="collectibles__like__heart" />
          </button>
        )}

        {(!onPublicProfile && favorite) && (
          <button
            type="button"
            className="collectibles__like"
            onClick={() => addToGallery(id, 'remove')}
          >
            &#10005;
          </button>
        )}
      </div>

      <div className="collectibles__info">
        <h3>{name}</h3>
        <p>{`${description} ${tokenId}`}</p>
      </div>
    </div>
  );

CollectiblesTile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  padded: PropTypes.string,
  addToGallery: PropTypes.func.isRequired,
  handleCollectiblesModal: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  onPublicProfile: PropTypes.bool.isRequired,
  tokenId: PropTypes.string,
  bgStyle: PropTypes.string,
  collectible: PropTypes.object,
};

CollectiblesTile.defaultProps = {
  image: '',
  name: '',
  description: '',
  padded: '',
  id: '',
  tokenId: '',
  bgStyle: '',
  collectible: {},
};

function mapState(state) {
  return {
  };
}

export default withRouter(connect(mapState, { handleCollectiblesModal })(CollectiblesTile));