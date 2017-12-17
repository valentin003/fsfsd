import React from 'react';

import AppHeader from './AppHeader';
import Agenda from './Agenda';

class AppAgenda extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="agenda">
				<AppHeader />
				<Agenda />
			</div>
		);
	}
}

export default AppAgenda;
