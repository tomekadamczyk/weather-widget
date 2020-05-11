# Weather widget project

## Running development mode
### 'npm run start' runs development on localhost:3000

## Creating and editing weather data
All required data occurs in store/data directory in files:
1. legendNames.js - contains names per parameter,
2. skyForecast.js - contains names for the sky state,
3. weatherParameters.js - contains names for weather parameters,
4. windDirection.js - contains names of wind directions,
5. windVelocity.js - contains names for wind velocity ranges.
6. weather.js - contains weather objects divided by day and hour. This file import necessary constants with parameters name,

To create new weather forecast object:

1. Check files above to see what parameters are included in weather object,
2. Edit weather.js file and add new object based on example below:
    ```javascript
        { 
            id: 36, 
            parameters: [
                { hour: '12:00' },
                { sky: skyForecast.sun },
                { temperature: 27 },
                { rainfall: 0 },
                { windDirection: windDirection.west },
                { windVelocity: 13 },
                { pressure: 1016 }
            ]
        }
    ```
3. Save the file