import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../assets/styles/common.css';
import CustomTable from '../../components/CustomTable';
import { loadMissions } from '../../redux/actions/missions.actions';

function Missions ({ missions, loadMissions }) {
  useEffect(() => {
    loadMissions();
  }, [loadMissions]);

  const title = 'Missions';
  const description = `
    “You want to wake up in the morning and think the future is going to be great
    - and that’s what being a spacefaring civilization is all about.
    It’s about believing in the future and thinking that the future will be better than the past.
    And I can’t think of anything more exciting than going out
    there and being among the stars.” - Elon Musk
  `;

  const onDoubleClickTableItem = (id) => {
    if (!id) {
      return null;
    }

    window.open(`${window.location.origin}/missions/:${id}`);
  };

  return (
     <div className="missions">
        <section className="section title-page">
          <div className="layout">
            <div className="content">
              <div className="title-page__title">{title}</div>
              <div className="title-page__description">{description}</div>
            </div>
          </div>
        </section>

        <section className="section table-page">
          <div className="layout">
            <div className="content">
              <CustomTable data={missions} onDoubleClickTableItem={onDoubleClickTableItem} />
            </div>
          </div>
        </section>
    </div>
  );
}

Missions.propTypes = {
  missions: PropTypes.array,
  loadMissions: PropTypes.func,
};

const mapStateToProps = ({ missions }) => {
  return {
    missions: missions.missionsData || [],
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadMissions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
