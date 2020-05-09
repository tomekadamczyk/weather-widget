import React from 'react';
import Layout from './containers/Layout/layout';
import styled from 'styled-components';
import Legend from './components/Legend/Legend';
import Parameters from './components/Parameters/Parameters';

const Dashboard = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
`;

const LegendColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  border-right: 1px solid ${({theme}) => theme.colors.gray4};
`;

const legendNames = {
  day: 'Dzień',
  hour: 'Godzina',
  sky: 'Prognoza',
  temperature: 'Temperatura',
  rainfall: 'Opady',
  windDirection: 'Kierunek wiatru',
  windVelocity: 'Prędkość wiatru',
  pressure: 'Ciśnienie',
}

const weatherLegend = [];

for (const iterator in legendNames) {
  weatherLegend.push({id: iterator, name: legendNames[iterator]})
}

const windDirection = {
  north: 'Północny',
  south: 'Południowy',
  eastern: 'Wschodni',
  west: 'Zachodni',
  southEastern: 'Pd.-Wsch.',
  southWest: 'Pd.-Zach.',
  northEastern: 'Pn.-Wsch.',
  northWest: 'Pn.-Zach.'
}

const weather = [
  { id: 0, 
    day: 'dzisiaj',
    hours: [
      { id: 0, 
        parameters: [
          {hour: '01:00'},
          {sky: 'cloud'},
          {temperature: 1},
          {rainfall: 0.2},
          {windDirection: windDirection.south},
          {windVelocity: 4},
          {pressure: 1014}]
      },
      { id: 1, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 7},
          {rainfall: 1.5},
          {windDirection: windDirection.west},
          {windVelocity: 16},
          {pressure: 1014}]
      },
      { id: 2, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 10},
          {rainfall: 15},
          {windDirection: windDirection.north},
          {windVelocity: 24},
          {pressure: 1014}]
      },
      { id: 3, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 15},
          {rainfall: 15},
          {windDirection: windDirection.eastern},
          {windVelocity: 28},
          {pressure: 1014}]
      },
      { id: 4, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 20},
          {rainfall: 15},
          {windDirection: windDirection.southEastern},
          {windVelocity: 30},
          {pressure: 1014}]
      },
      { id: 5, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 10},
          {rainfall: 15},
          {windDirection: windDirection.southWest},
          {windVelocity: 18},
          {pressure: 1014}]
      },
      { id: 6, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 10},
          {rainfall: 15},
          {windDirection: windDirection.northEastern},
          {windVelocity: 35},
          {pressure: 1014}]
      },
      { id: 7, 
        parameters: [
          {hour: '02:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      }
    ]
  },
  { id: 1, 
    day: 'jutro',
    hours: [
      { id: 0, 
        parameters: [
          {hour: '01:00'},
          {sky: 'snow'},
          {temperature: 4},
          {rainfall: 10},
          {windDirection: windDirection.southEastern},
          {windVelocity: 16},
          {pressure: 1014}]
      },
      { id: 1, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      }
    ]
  }
]

const App = () => {

  return (
    <Layout>
      <Dashboard>
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
      </Dashboard>
    </Layout>
  );
}

export default App;
