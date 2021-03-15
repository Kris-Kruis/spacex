import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './MissionDetails.css';
import { loadMissionDetails } from '../../../redux/actions/missions.actions';

function MissionDetails ({ missionDetails, id, loadMissionDetails }) {
  useEffect(() => {
    loadMissionDetails(id);
  }, [loadMissionDetails, id]);

  const {
    name = '-',
    description = '-',
    manufacturers,
    twitter,
    website,
    wikipedia
  } = { ...missionDetails };

  return (
    <div id={id} className="mission-details">
      <div className="layout">
        <div className="content">
          <div className="mission-details__card">
            {Boolean(missionDetails) ?
              <React.Fragment>
                <div className="card-name">{ name }</div>
                <div className="card-description">Description: { description }</div>
                <div className="card-manufacturers">Manufacturers: { manufacturers ? manufacturers.join(', ') : '-' }</div>
                <div className="card-links">
                  { twitter && <a id="twitter" href={ twitter } target="_blank">Twitter</a> }
                  { website && <a id="website" href={ website } target="_blank">Website</a> }
                  { wikipedia && <a id="wikipedia" href={ wikipedia } target="_blank">Wikipedia</a> }
                </div>
              </React.Fragment>
            : <div className="card-loading">
                <Loader
                  type="Rings"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

MissionDetails.propTypes = {
  missionDetails: PropTypes.object,
  loadMissionDetails: PropTypes.func,
};

const mapStateToProps = ({ missions }) => {
  return {
    missionDetails: missions.missionDetails,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadMissionDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails);
