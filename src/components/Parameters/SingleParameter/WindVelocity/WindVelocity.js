import React from 'react';
import styled from 'styled-components';

const windVelocity = {
  weak: 'Słaby',
  medium: 'Umiar.',
  strong: 'Silny'
}

const WindVelocityBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray_light};
    border-right: 2px solid ${({theme}) => theme.colors.white};
`;

const Velocity = styled.span`
    font-size: 19px;
`;

const WindVelocity = ({value}) => {

    const getWindName = (value) => {
        let wind;
        if(value <= 15) {
            wind = windVelocity.weak;
        }
        else if(value > 15 && value <= 25) {
            wind = windVelocity.medium;
        }
        else if(value > 25 && value <= 45) {
            wind = windVelocity.strong;
        }
        return wind;
    }

    return (
        <WindVelocityBlock>
            <span>{getWindName(value)}</span>
            <Velocity>{value} km/h</Velocity>
        </WindVelocityBlock>
    )
}

export default WindVelocity;