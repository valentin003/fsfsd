import { createStore, applyMiddleware, compose } from 'redux';
import { contactosLimpiarFormMiddleware } from '../middlewares/contactos';
// import { instrument } from 'redux-devtools';
import thunk from 'redux-thunk';

import reducers from '../reducers';
// Crea una función que componente Middlewares & Redux Dev Tools con el createStore
// const Ambiente = process.env.NODE_ENV;
const createStoreWithMiddleware = compose(
	applyMiddleware(thunk, contactosLimpiarFormMiddleware),
	// instrument(),
)(createStore);
// Crea el store con los middlewares
export default createStoreWithMiddleware(reducers);
