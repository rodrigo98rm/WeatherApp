import React from 'react';

import { WeatherProvider } from './weather';

const ClimateProvider: React.FC = ({ children }) => <WeatherProvider>{children}</WeatherProvider>;

export default ClimateProvider;
