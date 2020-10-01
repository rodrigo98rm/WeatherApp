import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles/global';
import './styles/app.css';

import Home from './pages/Home';

import { ClimateProvider } from './hooks/WeatherHook';
import { LoadProvider } from './hooks/LoadingHook';
import Overview from './components/Overview';

const App: React.FC = () => {
	return (
		<LoadProvider>
			<ClimateProvider>
				<GlobalStyle />
				<Home>
					<Sidebar />
					<Overview />
				</Home>
			</ClimateProvider>
		</LoadProvider>
	);
};

export default App;
