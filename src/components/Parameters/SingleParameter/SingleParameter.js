import React from 'react';
import styled from 'styled-components';

import Hour from './Hour/Hour';
import Sky from './Sky/Sky';
import Temperature from './Temperature/Temperature';
import Rainfall from './Rainfall/Rainfall';
import WindDirection from './WindDirection/WindDirection';
import WindVelocity from './WindVelocity/WindVelocity';
import Pressure from './Pressure/Pressure';


const styleById = (id) => {
    switch(id) {
        case 'day':
            return 'height: 35px;';
            
        case 'hour':
            return 'height: 48px;';
            
        case 'sky':
            return 'height: 55px;';
            
        case 'temperature':
            return 'height: 177px;';
            
        case 'rainfall':
            return 'height: 95px;';
            
        case 'windDirection':
            return 'height: 96px;';
            
        case 'windVelocity':
            return 'height: 80px;';
            
        case 'pressure':
            return 'height: 153px;';
            
        default:
            return;
    }
}

const Parameter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${({parameterType}) => styleById(parameterType)};
`;

const SingleParameter = ({value, parameterType}) => {

    const renderParameter = (type) => {
        switch(type) {
            case 'hour':
                return <Hour value={value} />
            case 'sky':
                return <Sky value={value} />
            case 'temperature':
                return <Temperature value={value}/>
            case 'rainfall':
                return <Rainfall value={value} />
            case 'windDirection':
                return <WindDirection value={value} />
            case 'windVelocity':
                return <WindVelocity value={value} />
            case 'pressure':
                return <Pressure value={value} />
            default:
                return 'Brak dostępnych danych';
        }
    }

    return (
        <Parameter parameterType={parameterType}>
            {renderParameter(parameterType)}
        </Parameter>
    )
}

export default SingleParameter;