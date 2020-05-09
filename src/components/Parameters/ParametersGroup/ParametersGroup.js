import React from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';
import SingleParameter from '../SingleParameter/SingleParameter';

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
    const store = useStore();
    const weatherParameters = store.getState().weatherParameters;

    return (
        <FlexColumn>
            <Day>{weatherByDay.day}</Day>
            <Flex>
                {weatherByDay.hours.map((dayWeather, index) => {
                    return <ParametersColumn key={`weatherday-${index}`}>
                        {dayWeather.parameters.map((value, index) => {
                        const valueKey = weatherParameters[index];
                        return <div key={`${value}-${index}`}><SingleParameter parameterType={valueKey} value={value[valueKey]} /></div>;
                    })}
                    </ParametersColumn>
                })}
            </Flex>
        </FlexColumn>
    )
}

export default ParametersGroup;