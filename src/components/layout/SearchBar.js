import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
	//when importing from materialize you will have to adjust certain things
	//2. added forward slash '/' on the input... check errors in console.log and it will show you the needed changes. In this case we change 'class' to 'className' and 'for' to 'htmlFor'

	const onChange = e => {
		searchLogs(text.current.value);
	};

	const text = useRef('');

	return (
		<nav style={{ marginBottom: '30px' }} className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input
							id='search'
							type='search'
							required
							placeholder='Search Logs..'
							ref={text}
							onChange={onChange}
						/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons'>close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.prototypes = {
	searchLogs: PropTypes.func.isRequired
};

export default connect(
	null,
	{ searchLogs }
)(SearchBar);
