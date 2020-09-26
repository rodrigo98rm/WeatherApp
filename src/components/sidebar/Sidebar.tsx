import React from 'react';
import * as Styles from './styles';

import GpsIcon from '../../assets/icons/GpsIcon';

function Sidebar() {
    return (
        <Styles.Sidebar>
            <Styles.ButtonContainer>
                <Styles.Button>Search for places</Styles.Button>
                <Styles.GpsButton>
                    <GpsIcon />
                </Styles.GpsButton>
            </Styles.ButtonContainer>
            <Styles.InfoContainer>
                <Styles.StatusImage src="https://www.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="Cloudy"/>
                <Styles.TempContainer>15<b>⁰C</b></Styles.TempContainer>
                <h1>Shower</h1>
                <Styles.DateContainer>
                    <h2>Today</h2>
                    <h2>&#8226;</h2>
                    <h2>Fri, 5 Jun</h2>
                </Styles.DateContainer>
                <h3>Helsinki</h3>
            </Styles.InfoContainer>
        </Styles.Sidebar>
    ); 
}

export default Sidebar;