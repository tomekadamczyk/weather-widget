import React from 'react';
import Layout from './containers/Layout/layout';
import styled from 'styled-components';
import Legend from './components/Legend/Legend';
import Parameters from './components/Parameters/Parameters';
import { Provider } from 'react-redux';
import store from './store/store';

const Dashboard = styled.div`
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
          {hour: '00:00'},
          {sky: 'cloud'},
          {temperature: 1},
          {rainfall: 0.2},
          {windDirection: windDirection.south},
          {windVelocity: 4},
          {pressure: 1014}]
      },
      { id: 1, 
        parameters: [
          {hour: '01:00'},
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
          {hour: '03:00'},
          {sky: 'rain'},
          {temperature: 15},
          {rainfall: 15},
          {windDirection: windDirection.eastern},
          {windVelocity: 28},
          {pressure: 1014}]
      },
      { id: 4, 
        parameters: [
          {hour: '04:00'},
          {sky: 'rain'},
          {temperature: 20},
          {rainfall: 15},
          {windDirection: windDirection.southEastern},
          {windVelocity: 30},
          {pressure: 1014}]
      },
      { id: 5, 
        parameters: [
          {hour: '05:00'},
          {sky: 'rain'},
          {temperature: 10},
          {rainfall: 15},
          {windDirection: windDirection.southWest},
          {windVelocity: 18},
          {pressure: 1014}]
      },
      { id: 6, 
        parameters: [
          {hour: '06:00'},
          {sky: 'rain'},
          {temperature: 10},
          {rainfall: 15},
          {windDirection: windDirection.northEastern},
          {windVelocity: 35},
          {pressure: 1014}]
      },
      { id: 7, 
        parameters: [
          {hour: '07:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 8, 
        parameters: [
          {hour: '08:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 9, 
        parameters: [
          {hour: '09:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 10, 
        parameters: [
          {hour: '10:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 11, 
        parameters: [
          {hour: '11:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 12, 
        parameters: [
          {hour: '12:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 13, 
        parameters: [
          {hour: '13:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 14, 
        parameters: [
          {hour: '14:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 15, 
        parameters: [
          {hour: '15:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 16, 
        parameters: [
          {hour: '16:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 17, 
        parameters: [
          {hour: '17:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 18, 
        parameters: [
          {hour: '18:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 19, 
        parameters: [
          {hour: '19:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 20, 
        parameters: [
          {hour: '20:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 21, 
        parameters: [
          {hour: '21:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 22, 
        parameters: [
          {hour: '22:00'},
          {sky: 'rain'},
          {temperature: 17},
          {rainfall: 15},
          {windDirection: windDirection.northWest},
          {windVelocity: 14},
          {pressure: 1014}]
      },
      { id: 23, 
        parameters: [
          {hour: '23:00'},
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
      },
      { id: 3, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 4, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 5, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 6, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 7, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 8, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 9, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 10, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 11, 
        parameters: [
          {hour: '02:00'},
          {sky: 'grad'},
          {temperature: 19},
          {rainfall: 0},
          {windDirection: windDirection.southEastern},
          {windVelocity: 40},
          {pressure: 1014}]
      },
      { id: 12, 
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
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
