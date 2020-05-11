import { windDirection } from './windDirection';
import { skyForecast } from './skyForecast';

export const weather = [
    { 
        id: 0, 
        day: 'dzisiaj',
        hours: [
            {   
                id: 0, 
                parameters: [
                    { hour: '00:00' },
                    { sky: skyForecast.clouds },
                    { temperature: 1 },
                    { rainfall: 0.2 },
                    { windDirection: windDirection.south },
                    { windVelocity: 4 },
                    { pressure: 1013 }
                ]
            },
            {   
                id: 1, 
                parameters: [
                    { hour: '01:00' },
                    { sky: skyForecast.rain },
                    { temperature: 7 },
                    { rainfall: 1.5 },
                    { windDirection: windDirection.west },
                    { windVelocity: 16 },
                    { pressure: 1014 }
                ]
            },
            {   
                id: 2, 
                parameters: [
                    { hour: '02:00' },
                    { sky: skyForecast.rain },
                    { temperature: 10 },
                    { rainfall: 15 },
                    { windDirection: windDirection.north },
                    { windVelocity: 24 },
                    { pressure: 1001}
                ]
            },
            {   
                id: 3, 
                parameters: [
                    { hour: '03:00' },
                    { sky: skyForecast.snow },
                    { temperature: 15 },
                    { rainfall: 15 },
                    { windDirection: windDirection.eastern },
                    { windVelocity: 28 },
                    { pressure: 1010 }
                ]
            },
            {   id: 4, 
                parameters: [
                    { hour: '04:00' },
                    { sky: skyForecast.sun },
                    { temperature: 16 },
                    { rainfall: 15 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 30 },
                    { pressure: 1011 }
                ]
            },
            { 
                id: 5, 
                parameters: [
                    { hour: '05:00' },
                    { sky: skyForecast.sun },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.southWest },
                    { windVelocity: 18 },
                    { pressure: 1012 }
                ]
            },
            {
                id: 6, 
                parameters: [
                    { hour: '06:00' },
                    { sky: skyForecast.clean },
                    { temperature: 18 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northEastern },
                    { windVelocity: 35 },
                    { pressure: 1013 }
                ]
            },
            { 
                id: 7, 
                parameters: [
                    { hour: '07:00' },
                    { sky: skyForecast.rain },
                    { temperature: 19 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1026 }
                ]
            },
            { 
                id: 8, 
                parameters: [
                    { hour: '08:00' },
                    { sky: skyForecast.snow },
                    { temperature: 20 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1028 }
                ]
            },
            { 
                id: 9, 
                parameters: [
                    { hour: '09:00' },
                    { sky: skyForecast.snow },
                    { temperature: 25 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1030 }
                ]
            },
            { 
                id: 10, 
                parameters: [
                    { hour: '10:00' },
                    { sky: skyForecast.sun },
                    { temperature: 30 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 11, 
                parameters: [
                    { hour: '11:00' },
                    { sky: skyForecast.sun },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 12, 
                parameters: [
                    { hour: '12:00' },
                    { sky: skyForecast.clean },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 13, 
                parameters: [
                    { hour: '13:00' },
                    { sky: skyForecast.sun },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 14, 
                parameters: [
                    { hour: '14:00' },
                    { sky: skyForecast.clean },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 15, 
                parameters: [
                    { hour: '15:00' },
                    { sky: skyForecast.clouds },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 16, 
                parameters: [
                    { hour: '16:00' },
                    { sky: skyForecast.clouds },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 17, 
                parameters: [
                    { hour: '17:00' },
                    { sky: skyForecast.clouds },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 18, 
                parameters: [
                    { hour: '18:00' },
                    { sky: skyForecast.clean },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 19, 
                parameters: [
                    { hour: '19:00' },
                    { sky: skyForecast.rain },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 20, 
                parameters: [
                    { hour: '20:00' },
                    { sky: skyForecast.rain },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 21, 
                parameters: [
                    { hour: '21:00' },
                    { sky: skyForecast.sun },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 22, 
                parameters: [
                    { hour: '22:00' },
                    { sky: skyForecast.clean },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 23, 
                parameters: [
                    { hour: '23:00' },
                    { sky: skyForecast.rain },
                    { temperature: 17 },
                    { rainfall: 15 },
                    { windDirection: windDirection.northWest },
                    { windVelocity: 14 },
                    { pressure: 1014 }
                ]
            },
        ]
    },
    { 
        id: 1, 
        day: 'jutro',
        hours: [
            { 
                id: 24, 
                parameters: [
                    { hour: '00:00' },
                    { sky: skyForecast.clean },
                    { temperature: 4 },
                    { rainfall: 10 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 16 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 25, 
                parameters: [
                    { hour: '01:00' },
                    { sky: skyForecast.clean },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 26, 
                parameters: [
                    { hour: '02:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 27, 
                parameters: [
                    { hour: '03:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 28, 
                parameters: [
                    { hour: '04:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 29, 
                parameters: [
                    { hour: '05:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 30, 
                parameters: [
                    { hour: '06:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 31, 
                parameters: [
                    { hour: '07:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 32, 
                parameters: [
                    { hour: '08:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 33, 
                parameters: [
                    { hour: '09:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 34, 
                parameters: [
                    { hour: '10:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 35, 
                parameters: [
                    { hour: '11:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            },
            { 
                id: 36, 
                parameters: [
                    { hour: '12:00' },
                    { sky: 'grad' },
                    { temperature: 19 },
                    { rainfall: 0 },
                    { windDirection: windDirection.southEastern },
                    { windVelocity: 40 },
                    { pressure: 1014 }
                ]
            }
        ]
    }
]