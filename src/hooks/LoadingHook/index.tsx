import React from 'react';

import { LoadingProvider } from './loading';

const LoadProvider: React.FC = ({ children }) => <LoadingProvider>{children}</LoadingProvider>;

export default LoadProvider;
