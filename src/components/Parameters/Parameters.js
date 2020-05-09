import React from 'react';
import styled from 'styled-components';
import ParametersGroup from './ParametersGroup/ParametersGroup';

const Group = styled.div`
    display: flex;
`;

const Parameters = ({weather}) => {
    return (
        <Group>
            {weather.map(byDay => {
                return <ParametersGroup weatherByDay={byDay}>
                </ParametersGroup>
            })}
        </Group>
    )
}

export default Parameters;