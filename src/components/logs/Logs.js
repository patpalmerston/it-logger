import React, { useState, useEffect } from 'react';
// we start with state in the component until we move it to redux store. so we use the {useState, useEffect} for now
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
		// get rid of the unwanted warnings with the next line
		// eslint-disable-next-line
	}, []);

	// creat async function to make request to back end, this time using fetch. fetch returns a promise so use "await". We  use localhost:5000 because we already added a proxy, so we use '/logs'
	const getLogs = async () => {
		setLoading(true);
		const res = await fetch('/logs');
		// axios has res.data that returns the json, fetch does not so we need to format with .json()
		const data = await res.json();

		setLogs(data);
		setLoading(false);
	};

	if (loading) {
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

export default Logs;
