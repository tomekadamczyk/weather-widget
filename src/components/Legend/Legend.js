import React from 'react';
import styled from 'styled-components';

const styleById = (id) => {
    switch(id) {
        case 'day':
            return 'height: 35px;';
            
        case 'hour':
            return 'height: 48px;';
            
        case 'sky':
            return 'height: 55px;';
            
        case 'temperature':
            return 'height: 177px;';
            
        case 'rainfall':
            return 'height: 95px;';
            
        case 'windDirection':
            return `height: 96px;`;
            
        case 'windVelocity':
            return 'height: 80px;';
            
        case 'pressure':
            return 'height: 153px;';
            
        default:
            return;
    }
}

const LegendItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    word-wrap: anywhere;
    font-weight: ${({theme}) => theme.font.regular};
    color: ${({theme}) => theme.colors.gray};
    ${({itemType}) => styleById(itemType)}
    &:not(:last-of-type) {
        border-bottom: 1px solid ${({theme}) => theme.colors.gray2};
    }
`;


const Legend = ({name, id}) => {
    return (
        <LegendItem itemType={id}>
            {name}
        </LegendItem>
    )
}

export default Legend;