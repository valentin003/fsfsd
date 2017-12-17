import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Grid from './Grid';
import mockData from './mockData';

class Agenda extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { contactos } = this.props;
		return (
			<div className="agenda">
				<Form />
				<Grid contactos={ contactos } />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	contactos: state.contactos.contactos,
});

export default connect(mapStateToProps)(Agenda);
