import React, { useRef } from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';
import SliderController from './SlideController/SlideController';

const scrollRange = {
    forward: 96,
    backward: -96,
}

const sliderSettings = {
    mouseIsDown: false,
    startX: null,
    scrollLeft: null
}

const Board = styled.div`
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0%;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:hover {
        .slider-controller {
            opacity: .6;
        }
    }
`;

const OverLay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0) 85%, rgba(255,255,255,0.4178805311186975) 90%, rgba(255,255,255,.8) 100%);
`;

const Flex = styled.div`
    display: flex;
    overflow-x: scroll;
`;

const scrollMove = (elementToScroll, value) => {
    return elementToScroll.scrollBy({
        left: value,
        behavior: 'smooth'
    });
}

const mouseDown = (element, e) => {
    sliderSettings.mouseIsDown = true;
    sliderSettings.startX = e.pageX - element.offsetLeft;
    sliderSettings.scrollLeft = element.scrollLeft;
}

const resetMouseDown = () => {
    sliderSettings.mouseIsDown = false;
}

const mouseMove = (element, e) => {
    if(!sliderSettings.mouseIsDown) return;
    e.preventDefault();
    const xPosition = e.pageX - element.offsetLeft;
    const sliderBoard = (xPosition - sliderSettings.startX);
    element.scrollLeft = sliderSettings.scrollLeft - sliderBoard;
}

const Slider = ({children}) => {
    const slider = useRef();
    const store = useStore();
    const scrollDirections = store.getState().scrollingMoveDirection;
    
    const triggerSlider = (elementToScroll, direction) => {
        if(direction === scrollDirections.right) {
            scrollMove(elementToScroll, scrollRange.forward);
        }
        else {
            scrollMove(elementToScroll, scrollRange.backward);
        }
    }

    return (
        <Board>
            <Flex 
                ref={slider}
                onMouseDown={(e) => mouseDown(slider.current, e)} 
                onMouseUp={() => resetMouseDown()}
                onMouseMove={(e) => mouseMove(slider.current, e)}
                onTouchStart={(e) => mouseDown(slider.current, e)} 
                onTouchEnd={() => resetMouseDown()}
                onTouchMove={(e) => mouseMove(slider.current, e)}
            >
                {children}
            <OverLay></OverLay>
            </Flex>
            <SliderController
                triggerSlide={() => triggerSlider(slider.current, scrollDirections.left)}
                type={scrollDirections.left}
                
            />
            <SliderController
                triggerSlide={() => triggerSlider(slider.current, scrollDirections.right)}
                type={scrollDirections.right}
                
            />
        </Board>
    )
}

export default Slider;