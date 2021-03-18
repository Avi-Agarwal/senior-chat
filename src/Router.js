import React from 'react';
import TestPage from './pages/TestPage'
import { Route, Switch, Redirect } from 'react-router';

const Router = () => (
	<Switch>
		<Route
			exact
			path='/'
			component={TestPage}
		/>
		<Route
			path='/test'
			component={TestPage}
		/>
		<Redirect from='*' to='/' />
	</Switch>
);

export default Router;
