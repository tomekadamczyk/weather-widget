/*
 * action types
 */

export const UPDATE_WEATHER = 'UPDATE_WEATHER'

/*
 * action creators
 */

export function updateWeatherStore(item) {
  return { type: UPDATE_WEATHER, item }
}