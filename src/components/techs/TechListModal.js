import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
// we start with state in the component until we move it to redux store. so we use the {useState, useEffect} for now

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
	useEffect(() => {
		getTechs();
		// get rid of the unwanted warnings with the next line
		// eslint-disable-next-line
	}, []);

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Technician List</h4>
				<ul className='collection'>
					{!loading &&
						techs !== null &&
						techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	tech: PropTypes.object.isRequired,
	getTech: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	tech: state.tech
});

export default connect(
	mapStateToProps,
	{ getTechs }
)(TechListModal);
