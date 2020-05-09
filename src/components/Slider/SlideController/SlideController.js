import React from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';
import Arrow from './Arrow';

const checkType = (type, directionLeft, directionRight) => {
    switch(type) {
        case directionLeft:
            return `
                left: 0;
                transform: translate(-50%, -50%);
            `;
        case directionRight:
            return `
                right: 0;
                transform: translate(50%, -50%);
            `;
        default:
            return null;
    }
}

const checkButtonType = (type, directionLeft, directionRight) => {
    switch(type) {
        case directionLeft:
            return `
                right: 0;
                transform: translate(-86%, -50%);
            `;
        case directionRight:
            return `
                left: 0;
                transform: translate(75%, -50%);
            `;
        default:
            return null;
    }
}

const SliderButton = styled.div`
    position: absolute;
    top: 50%;
    border: none;
    background: transparent;
    border: none;
    ${({type, scrollToLeft, scrollToRight}) => checkButtonType(type, scrollToLeft, scrollToRight)};
    cursor: pointer;
`;

const Background = styled.div`
    width: 100px;
    height: 100px;
    background: ${({theme}) => theme.colors.gray2};
    position: absolute;
    top: 50%;
    shape-outside: circle();
    clip-path: circle();
    cursor: pointer;
    ${({type, scrollToLeft, scrollToRight}) => checkType(type, scrollToLeft, scrollToRight)};
    opacity: 0;
    transition: opacity .3s, visibility .3s;

    &:hover {
        opacity: .9!important;
    }
`;

const SliderController = ({type, triggerSlide}) => {
    const store = useStore();
    const scrollDirections = store.getState().scrollingMoveDirection;

    return (
        <Background 
            scrollToLeft={scrollDirections.left} 
            scrollToRight={scrollDirections.right} 
            className="slider-controller" type={type} 
            onClick={triggerSlide}
        >
            <SliderButton type={type}
                scrollToLeft={scrollDirections.left} 
                scrollToRight={scrollDirections.right}
            >
                <Arrow type={type} />
            </SliderButton>
        </Background>
    )
}

export default SliderController;