import React from 'react';
import styled from 'styled-components';
import cloud from '../../../../assets/images/cloud.png';

const SkyBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({theme}) => theme.colors.gray3};
`;

const Icon = styled.img`
    width: 51px;
`;

const Sky = ({value}) => {

    return (
        <SkyBlock>
            <Icon
                src={cloud}
                alt={value}
            />
        </SkyBlock>
    )
}

export default Sky;