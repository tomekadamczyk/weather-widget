import React from 'react';
import styled from 'styled-components';
import arrowBlack from '../../../../assets/images/arrow-black.png';

const WindDirectionBlock = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    background-color: ${({theme}) => theme.colors.gray_light};
    border-right: 2px solid ${({theme}) => theme.colors.white};
`;

const calculateRotation = (param) => {
    switch(param) {
        case 'Pd.-Zach.':
            return '-31deg';
        case 'Pd.-Wsch.':
            return '-135deg';
        case 'Pn.-Zach.':
            return '39deg';
        case 'Pn.-Wsch.':
            return '146deg';
        case 'Południowy':
            return '-104deg';
        case 'Północny':
            return '90deg';
        case 'Wschodni':
            return '-180deg';
        default:
            return '0';
    }
} 

const Icon = styled.img`
    width: 37px;
    transform: ${({param}) => `rotate(${calculateRotation(param)})`};
`;

const WindDescription = styled.span`
    display: block;
    font-weight: ${({theme}) => theme.font.regular};
    font-size: 16px;
    margin-top: 14px;
`;

const WindDirection = ({value}) => {

    return (
        <WindDirectionBlock>
            <Icon src={arrowBlack} alt={value} param={value} />
            <WindDescription>{value}</WindDescription>
        </WindDirectionBlock>
    )
}

export default WindDirection;