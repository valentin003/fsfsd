import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../style/index.scss';

import store from './store';
import AppAgenda from './components';

const App = () => (
	<Provider store={ store }>
		<AppAgenda />
	</Provider>
);

render(<App />, document.getElementById('app'));
