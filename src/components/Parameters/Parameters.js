import React from 'react';
import styled from 'styled-components';
import ParametersGroup from './ParametersGroup/ParametersGroup';
import Slider from '../Slider/Slider';

const Group = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${({legendActive}) => legendActive ? `calc(100% - 110px)` : `100%`};
    border-bottom: 1px solid ${({theme}) => theme.colors.gray2};
`;

const Parameters = ({weather, legendActive}) => {

    return (
        <>
            <Group legendActive={legendActive}>
                <Slider>
                {weather.map((byDay, index) => {
                    return <ParametersGroup key={`day-${index}`} index={index} weatherByDay={byDay}>
                    </ParametersGroup>
                })}
                </Slider>
            </Group>
        </>
    )
}

export default Parameters;