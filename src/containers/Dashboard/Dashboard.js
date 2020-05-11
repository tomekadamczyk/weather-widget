import React, { useState } from 'react';
import styled from 'styled-components';
import { useStore } from 'react-redux';
import Legend from '../../components/Legend/Legend';
import Parameters from '../../components/Parameters/Parameters';

const Board = styled.div`
  width: 100%;
  display: flex;

  ${({theme}) => theme.mediaqueries.tablet} {
    width: 85%;
    margin: 0 auto;
  }
`;

const LegendColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({active}) => active ? '110px' : '0'};
  border-right: 1px solid ${({theme}) => theme.colors.gray4};
  box-shadow: 15px 1px 12px -10px ${({theme}) => theme.colors.gray5};
  z-index: 9;
  transform: ${({active}) => active ? 'translateX(0)' : 'translateX(-200%)'};
  opacity: ${({active}) => active ? '1' : '0'};
  overflow: hidden;
  transition: width .3s, transform .3s, opacity .3s .2s;

  ${({theme}) => theme.mediaqueries.tablet} {
    transform: translateX(0);
    position: relative;
    opacity: 1;
    width: 110px;
  }
`;

const LegendToggler = styled.button`
  position: fixed;
  right: 10px;
  top: 5px;
  z-index: 99999;
  border: 1px solid ${({theme, active}) => active ? theme.colors.white : theme.colors.yellow};
  background: ${({theme, active}) => active ? theme.colors.yellow : theme.colors.white};
  color: ${({theme, active}) => active ? theme.colors.white : theme.colors.yellow};
  font-weight: ${({theme}) => theme.font.bold};
  padding: 5px 7px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.white};
  }

  ${({theme}) => theme.mediaqueries.tablet} {
    display: none;
  }
`;

const Dashboard = () => {
    const [legendActive, setLegendActive] = useState(false);
    const store = useStore();
    const weather = store.getState().weather;
    const legendNames = store.getState().legendNames;
  
    const weatherLegend = [];
    
    for (const iterator in legendNames) {
        weatherLegend.push({id: iterator, name: legendNames[iterator]})
    }

    return (
        <Board>
          <LegendToggler 
            active={legendActive} 
            onClick={() => setLegendActive(!legendActive)}
          >
            Legend
          </LegendToggler>
          <LegendColumn active={legendActive}>
            {weatherLegend.map(value => {
              return <Legend 
                key={`weatherLegend-${value.id}`}
                id={value.id}
                name={value.name}
              />
            })}
          </LegendColumn>
          <Parameters legendActive={legendActive} weather={weather} />
        </Board>
    )
}

export default Dashboard;