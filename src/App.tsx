import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles/global';
import './styles/app.css';

import Overview from './components/Overview';

const App: React.FC = () => {
	return (
		<div>
			<GlobalStyle />
			<div style={{ display: 'flex' }}>
				<Sidebar />
				<Overview />
			</div>
		</div>
	);
};

export default App;
