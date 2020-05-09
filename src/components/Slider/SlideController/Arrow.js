import React from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';

const borderSide = (type, theme, directionLeft, directionRight) => {
    switch(type) {
        case directionLeft:
            return `
                border-right: 20px solid ${theme.colors.white}; 
            `;
        case directionRight:
            return `
                border-left: 20px solid ${theme.colors.white}; 
            `;
        default:
            return null;
    }
}

const Icon = styled.span`
    display: block;
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent; 
    ${({theme, type, scrollToLeft, scrollToRight}) => borderSide(type, theme, scrollToLeft, scrollToRight)}; 
`;

const Arrow = ({type}) => {
    const store = useStore();
    const scrollDirections = store.getState().scrollingMoveDirection;

    return (
        <Icon 
            type={type}
            scrollToLeft={scrollDirections.left} 
            scrollToRight={scrollDirections.right}
        />
    )
}

export default Arrow;