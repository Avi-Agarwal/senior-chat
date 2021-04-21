import React from 'react';
import TestPage from './pages/TestPage'
import { Route, Switch, Redirect } from 'react-router';
import HomePage from './pages/HomePage';

const Router = () => (
	<Switch>
		<Route
			exact
			path='/'
			component={HomePage}
		/>
		<Route
			path='/test'
			component={TestPage}
		/>
		<Redirect from='*' to='/' />
	</Switch>
);

export default Router;
