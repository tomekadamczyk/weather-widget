import {
    UPDATE_WEATHER
  } from './actions';

function updateWeather(state = [], action) {
    switch(action.type) {
        case UPDATE_WEATHER:
            return Object.assign({}, state, {
                weather: [
                    ...state.weather,
                    {
                        weather: action.weather
                    }
                ]
            })
        default:
            return state
    }
}

export default updateWeather;