import React from 'react';
import styled from 'styled-components';

const HourValue = styled.span`
    height: 48px;
    font-size: 20px;
    display: block;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({theme}) => theme.colors.gray3};
    font-weight: ${({theme}) => theme.font.semibold};
    padding-top: 9px;
`;

const Hour = ({value}) => {

    return (
        <HourValue>{value}</HourValue>
    )
}

export default Hour;