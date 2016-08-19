import 'babel-polyfill'
import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import App from './components/app'

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>, 
	document.getElementById('app'));