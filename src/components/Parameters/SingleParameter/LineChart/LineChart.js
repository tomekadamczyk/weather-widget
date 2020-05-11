import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({theme}) => theme.colors.gray3};
    font-weight: ${({theme}) => theme.font.bold};
`;

const Value = styled.span`
    ${({parameterType}) => parameterType === 'temperature' ? 'font-size: 26px;' : null};
    transform: ${({position}) => position > 110 ? `translateY(0)` : `translateY(-50px)`};
    position: relative;
    display: block;
    line-height: 35px;
`;

const Point = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
    background: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 50%;
    margin: auto;
`;

const Degree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    width: 100%;
    transform: ${({position}) => `translate(-50%, ${-(-41 + (position + (50/100)))}px)`};
    bottom: 0;
    z-index: 9;
    transition: transform 1s;
`;

const Line = styled.line`
    stroke: ${({theme, parameterType}) => parameterType === 'temperature' ? theme.colors.yellow : theme.colors.black};
    stroke-width: 2;
`;

const SVG = styled.svg`
    position: absolute;
    left: 50%;
`;

const LineChart = ({value, subsequentItemValue, unit, parameterType}) => {
    const containerBlock = useRef(null);
    const [blockHeight, setBlockHeight] = useState(0);
    const [pointPositionY1, setPointPosition1] = useState(0);
    const [pointPositionY2, setPointPosition2] = useState(0);
    let degree;

    const calculateCurrentDegreePosition = (degreeValue, range) => {
        degree = degreeValue * range;
        return degree;
    }

    const calculateNextItemDegreePosition = (item, range) => {
        const nextItemBase = item;
        const degree2 = nextItemBase * range;
        return setPointPosition2(degree2);
    }

    useEffect(() => {
        if(containerBlock.current) {
            const height = containerBlock.current.clientHeight;
            setBlockHeight(height)
            const dividedHeight = height / 31;

            if(parameterType === 'pressure') {
                const base = value.toString().substring(2)
                calculateCurrentDegreePosition(base, dividedHeight);
                if(subsequentItemValue) {
                    const nextItemBase = subsequentItemValue.toString().substring(2);
                    calculateNextItemDegreePosition(nextItemBase, dividedHeight)
                }
            }
            if(parameterType === 'temperature') {
                calculateCurrentDegreePosition(value, dividedHeight);
                if(subsequentItemValue) {
                    calculateNextItemDegreePosition(subsequentItemValue, dividedHeight)
                }
            }
            setPointPosition1(degree);
        }
    },[value, subsequentItemValue, parameterType, degree])


    return (
        <Container ref={containerBlock}>
            <SVG 
                height={blockHeight} 
                width={pointPositionY2 ? 96 : 0}
            >
                <Line 
                    x1="0" 
                    y1={blockHeight - pointPositionY1} 
                    x2="96" 
                    y2={pointPositionY2 ? blockHeight - pointPositionY2 : blockHeight - pointPositionY1} 
                    parameterType={parameterType}
                />
            </SVG> 
            <Degree position={pointPositionY1}>
                <Point></Point>
                <Value 
                    position={pointPositionY1} 
                    parameterType={parameterType}>{value} {unit}
                </Value>
            </Degree>
        </Container>
    )
}

export default LineChart;