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
    overflow: hidden;
`;

const Day = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: ${({theme}) => theme.font.bold};
    color: ${({theme}) => theme.colors.gray};
`;

const ParametersGroup = ({weatherByDay}) => {
    const store = useStore();
    const weatherParameters = store.getState().weatherParameters;

    return (
        <FlexColumn>
            <Day>{weatherByDay.day}</Day>
            <Flex>
                {weatherByDay.hours.map((weatherByHour, index) => {
                    let subsequentItemParameters;
                    if(weatherByDay.hours[index + 1]) {
                        subsequentItemParameters = weatherByDay.hours[index + 1].parameters;
                    }
                    return <ParametersColumn key={`weatherday-${index}`}>
                        {weatherByHour.parameters.map((value, index) => {
                            const valueKey = weatherParameters[index];
                            let subsequentItemValue;
                            if(subsequentItemParameters) {
                                subsequentItemValue = subsequentItemParameters[index][valueKey];
                            }

                            return <SingleParameter 
                                key={`${value}-${index}`}
                                parameterType={valueKey} 
                                value={value[valueKey]} 
                                subsequentItemValue={subsequentItemValue}
                            />;
                        })}
                    </ParametersColumn>
                })}
            </Flex>
        </FlexColumn>
    )
}

export default ParametersGroup;