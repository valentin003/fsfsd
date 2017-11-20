import React from 'react';

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Agenda extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="agenda">
				<Form />
				<Grid contactos={ mockData } />
			</div>
		);
	}
}

export default Agenda;
