import * as React from 'react';

interface GpsButtonProps {
  handleClick: () => void;
}

export const GpsButton: React.FC<GpsButtonProps> = (props) => {
  return (
    <>
      <button onClick={handleRequest}></button>
    </>
  );
};
