import React from 'react';

interface Weather {
  info: {
    tempMax: number;
    tempMin: number;
    type: 'Cloudy' | 'Clear';
    isEndOfWorld?: boolean;
  };
}

const Weather: React.FC<Weather> = ({ info }) => {
  return (
    <div>
      <p>{info.type}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Weather
      info={{
        tempMax: 39.4,
        tempMin: 32.6,
        type: 'Cloudy',
        isEndOfWorld: true,
      }}
    />
  );
};

export default App;
