import React from 'react';
import styled from 'styled-components';
import ParametersGroup from './ParametersGroup/ParametersGroup';
import Slider from '../Slider/Slider';

const Group = styled.div`
    display: flex;
    position: relative;
    width: calc(100% - 110px);
`;

const Parameters = ({weather}) => {
    
    return (
        <>
            <Group>
                <Slider>
                {weather.map((byDay, index) => {
                    return <ParametersGroup key={`day-${index}`} weatherByDay={byDay}>
                    </ParametersGroup>
                })}
                </Slider>
            </Group>
        </>
    )
}

export default Parameters;