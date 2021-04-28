import React from 'react';

const  ShowData = ( { data, city}  ) => { 
   
    console.log('city=',city, 'data.name=',data.name,data);
    if  (data.name === city)
    return ( <>
                <img src={"http://openweathermap.org/img/w/"+data.weather[0]['icon']+".png"} alt="icon" />
                <ul>
                    <li><h3><strong>{data.name}</strong></h3></li>
                    <li>temperature: <strong>{Math.round(data.main.temp*2)/2} ℃</strong></li>
                    <li>min / max: <strong>{Math.round(data.main.temp_min*2)/2} ℃ / {Math.round(data.main.temp_max*2)/2} ℃</strong></li>
                    <li>humidity: <strong>{data.main.humidity}%</strong></li>
                    <li>Sky condition: </li>
                    <li><strong>{data.weather[0].main}</strong> - <strong>{data.weather[0]['description']}</strong></li>
                </ul>
          </>
          )
else
    return( <h4>Loading...</h4>
)
};
export default ShowData