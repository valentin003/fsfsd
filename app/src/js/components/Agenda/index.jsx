import React from 'react';

import Form from './Form';

class Agenda extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="agenda">
				<Form />
			</div>
		);
	}
}

export default Agenda;
