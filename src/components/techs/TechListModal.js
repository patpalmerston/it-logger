import React, { useState, useEffect } from 'react';
// we start with state in the component until we move it to redux store. so we use the {useState, useEffect} for now
import TechItem from './TechItem';

const TechListModal = () => {
	const [techs, setTechs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTechs();
		// get rid of the unwanted warnings with the next line
		// eslint-disable-next-line
	}, []);

	// creat async function to make request to back end, this time using fetch. fetch returns a promise so use "await". We  use localhost:5000 because we already added a proxy, so we use '/logs'
	const getTechs = async () => {
		setLoading(true);
		const res = await fetch('/techs');
		// axios has res.data that returns the json, fetch does not so we need to format with .json()
		const data = await res.json();

		setTechs(data);
		setLoading(false);
	};

	// use a collection which is like a list group from bootstrap but is a materialze feature
	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Technician List</h4>
				<ul className='collection'>
					{!loading &&
						techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
				</ul>
			</div>
		</div>
	);
};

export default TechListModal;
