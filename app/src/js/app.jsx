import React from 'react';
import { render } from 'react-dom';

import '../style/index.scss';

import AppHeader from './components/AppHeader';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="agenda">
				<AppHeader />
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
