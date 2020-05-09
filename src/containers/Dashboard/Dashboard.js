import React from 'react';
import styled from 'styled-components';
import { useStore } from 'react-redux';
import Legend from '../../components/Legend/Legend';
import Parameters from '../../components/Parameters/Parameters';

const Board = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
`;

const LegendColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  border-right: 1px solid ${({theme}) => theme.colors.gray4};
  box-shadow: 15px 1px 12px -10px ${({theme}) => theme.colors.gray5};
  z-index: 9;
`;

const Dashboard = () => {
    const store = useStore();
    const weather = store.getState().weather;
    const windDirection = store.getState().windDirection;
    const legendNames = store.getState().legendNames;
  
    const weatherLegend = [];
    
    for (const iterator in legendNames) {
        weatherLegend.push({id: iterator, name: legendNames[iterator]})
    }

    return (
        <Board>
          <LegendColumn>
            {weatherLegend.map(value => {
              return <Legend 
                key={`weatherLegend-${value.id}`}
                id={value.id}
                name={value.name}
              />
            })}
          </LegendColumn>
          <Parameters weather={weather} />
        </Board>
    )
}

export default Dashboard;