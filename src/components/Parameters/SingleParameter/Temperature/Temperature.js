import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const TemperatureBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({theme}) => theme.colors.gray3};
    font-weight: ${({theme}) => theme.font.bold};
`;

const TemperatureValue = styled.span`
    font-size: 26px;
    transform: ${({position}) => position > 150 ? `translateY(0)` : `translateY(-50px)`};
    position: relative;
    display: block;
`;

const Point = styled.div`
    width: 10px;
    height: 10px;
    position: relative;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 50%;
`;

const Degree = styled.div`
    position: absolute;
    left: 50%;
    bottom: ${({position}) => `${(-44 + (position + (50/100)))}px`};
`;

const Temperature = ({value}) => {
    const tempBlock = useRef(null);
    const degreePoint = useRef(null);
    const [pointPositionY, setPointPosition] = useState(0);

    useEffect(() => {
        if(tempBlock.current) {
            const height = tempBlock.current.clientHeight - 10;
            const dividedHeight = height / 20;
            const degree = value * dividedHeight;
            setPointPosition(degree);
        }
        if(degreePoint.current) {
            const topPosition = degreePoint.current.getBoundingClientRect().top;
            const leftPosition = degreePoint.current.getBoundingClientRect().left;
        }
    },[value])


    return (
        <TemperatureBlock ref={tempBlock}>
            <Degree position={pointPositionY}>
                <Point ref={degreePoint}>
                </Point>
                <TemperatureValue position={pointPositionY}>{value}&#176;</TemperatureValue>
            </Degree>
        </TemperatureBlock>
    )
}

export default Temperature;