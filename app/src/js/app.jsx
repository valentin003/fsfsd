import React from 'react';
import { render } from 'react-dom';

import '../style/index.scss';

import AppHeader from './components/AppHeader';
import Agenda from './components/Agenda';

class App extends React.Component {
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

render(<App />, document.getElementById('app'));
