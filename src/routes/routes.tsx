import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/Home';

function Routes() {
	return (
		<Router>
			<div className='Routes'>
				<Switch>
					<Route path='/' exact component={HomePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;
