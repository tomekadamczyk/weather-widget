import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pointPositions from './reducers';
import {weather} from './data/weather';
import {legendNames} from './data/legendNames';
import {windDirection} from './data/windDirection';
import {weatherParameters} from './data/weatherParameters';
import {windVelocity} from './data/windVelocity';
import {scrollingMoveDirection} from './data/scrollingMoveDirection';
import {skyForecast} from './data/skyForecast';

const initialState = {
    scrollingMoveDirection: scrollingMoveDirection,
    windDirection: windDirection,
    legendNames: legendNames,
    weather: weather,
    weatherParameters: weatherParameters,
    windVelocity: windVelocity,
    skyForecast: skyForecast,
};
const middleware = [thunk];

const store = createStore(
    pointPositions, 
    initialState, 
    applyMiddleware(...middleware)
);


const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe();

export default store;