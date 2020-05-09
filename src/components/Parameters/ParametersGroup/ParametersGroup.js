import React from 'react';
import styled from 'styled-components';
import SingleParameter from '../SingleParameter/SingleParameter';

const weatherParameters = ['hour', 'sky', 'temperature', 'rainfall', 'windDirection', 'windVelocity', 'pressure'];

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ParametersColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 96px;
`;

const Flex = styled.div`
    display: flex;
`;

const Day = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
`;

const ParametersGroup = ({weatherByDay}) => {
    return (
        <FlexColumn>
            <Day>{weatherByDay.day}</Day>
            <Flex>
                {weatherByDay.hours.map((dayWeather, index) => {
                    return <ParametersColumn>
                        {dayWeather.parameters.map((value, index) => {
                        const valueKey = weatherParameters[index];
                        return <div><SingleParameter parameterType={valueKey} value={value[valueKey]} /></div>;
                    })}
                    </ParametersColumn>
                })}
            </Flex>
        </FlexColumn>
    )
}

export default ParametersGroup;