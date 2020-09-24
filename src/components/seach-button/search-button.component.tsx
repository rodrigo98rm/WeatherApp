// import { StyledButton } from './search-button.component.styled';
import * as React from 'react';
import { ClimateDetails, PlacesList } from '../../services/services.inteface';

export interface ButtonProps {
  title: string;
  param: RequestFunctionParams;
  funcRequest: (param: RequestFunctionParams) => Promise<PlacesList[] | ClimateDetails[]>;
  handleClick: (value: PlacesList[] | ClimateDetails[]) => void;
}

interface RequestFunctionParams {
  name?: string;
  lattAndLong?: string;
  woeid?: number;
  day?: {
    woied: number;
    date: string; //YYYY-MM-DD
  };
}

export const Search: React.FC<ButtonProps> = (props) => {
  const handelRequest = async () => {
    const result = await props.funcRequest(props.param);
    props.handleClick(result ? result : []);
  };

  return (
    <div>
      <button onClick={handelRequest}>{props.title}</button>
    </div>
  );
};
