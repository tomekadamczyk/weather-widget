import React from 'react';
import styled from 'styled-components';

const RainfallBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({theme}) => theme.colors.gray3};
    font-weight: ${({theme}) => theme.font.bold};
`;

const RainfallDiagram = styled.div`
    width: 100%;
    height: ${({height}) => `${height}px`};
    background-color: ${({theme}) => theme.colors.blue};
`;

const transformNumberToString = (number) => number.toString();
const replaceDotWithComma = (string) => string.toString().replace(".", ",")

const Rainfall = ({value}) => {
    const transformedValueToString = transformNumberToString(value);
    const outputValue = replaceDotWithComma(transformedValueToString)
    
    return (
        <RainfallBlock>
            <span>{outputValue}mm</span>
            <RainfallDiagram height={value}></RainfallDiagram>
        </RainfallBlock>
    )
}

export default Rainfall;