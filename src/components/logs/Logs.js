import React, { useEffect } from 'react';
// we start with state in the component until we move it to redux store. so we use the {useState, useEffect} for now
import { connect } from 'react-redux'; // must export as HOC ()()
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions'; // add to mapStateToProps

// this destructed prop pulls from the whole state.
//logs and loading are props off log and getLogs is props off logActions all need to be destructed for access
const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// get rid of the unwanted warnings with the next line
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <PreLoader />;
	}

	// use a collection which is like a list group from bootstrap but is a materialze feature
	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs to show...</p>
			) : (
				logs.map(log => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	log: state.log // state.log connects to the root reducer that exports all reducers and 'log:' is the prop key that holds that state... then we destructure up top. Or we could just do
	//logs: state.log.logs,
	//loading: state.log.loading
});

export default connect(
	mapStateToProps,
	{ getLogs } // must add the action to props after importing
)(Logs);
//exporting highlevel method that takes in the component
// this allows us to use mapStateToProps so we can bring in app level state as props
