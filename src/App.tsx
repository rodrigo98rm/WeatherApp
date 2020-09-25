import React from 'react';

import GlobalStyle from './styles/global';
import './styles/app.css';

import Overview from './components/Overview';

const App: React.FC = () => {
	return (
		<div>
			<GlobalStyle />
			{/*
				Divs below are just to fill the left part of the screen
				TODO: Replace by Fiali's component on merge
			*/}
			<div style={{ display: 'flex' }}>
				<div
					className="fialisContainer"
					style={{ width: '459px', background: '#1E213A' }}
				/>
				<Overview />
			</div>
		</div>
	);
};

export default App;
