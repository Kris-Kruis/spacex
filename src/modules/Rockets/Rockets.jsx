import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../assets/styles/common.css';
import CustomTable from '../../components/CustomTable';
import { loadRockets } from '../../redux/actions/rockets.actions';

function Rockets ({ loadRockets, rockets }) {
  useEffect(() => {
    loadRockets();
  }, [loadRockets]);

  const title = 'Rockets';
  const description = `
    “You want to wake up in the morning and think the future is going to be great
    - and that’s what being a spacefaring civilization is all about.
    It’s about believing in the future and thinking that the future will be better than the past.
    And I can’t think of anything more exciting than going out
    there and being among the stars.” - Elon Musk
  `;

  return (
     <div className="rockets">
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
              <CustomTable data={rockets} />
            </div>
          </div>
        </section>
    </div>
  );
}

Rockets.propTypes = {
  loadRockets: PropTypes.func,
  rockets: PropTypes.array,
};

const mapStateToProps = ({ rockets }) => {
  return {
    rockets: rockets.rocketsData || [],
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadRockets,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);
