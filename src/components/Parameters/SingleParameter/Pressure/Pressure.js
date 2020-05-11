import React from 'react';
import LineChart from '../LineChart/LineChart';

const Pressure = ({value, subsequentItemValue, unit, parameterType}) => {
    return(
        <LineChart 
            value={value} 
            subsequentItemValue={subsequentItemValue} 
            unit={unit}
            parameterType={parameterType}
        />
    )
}

export default Pressure;