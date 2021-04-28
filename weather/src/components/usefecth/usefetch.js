// import {useEffect} from 'react';
//http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=88819b23426fc788e6079b2cca861c71
//http://openweathermap.org/img/w/04d.png
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

// APIendpoint - Innen származnak az adatok 
export const  mainUrls={ URL : "//api.openweathermap.org/data/2.5/weather",
                         API_key : "88819b23426fc788e6079b2cca861c71"
                        };

export const loadData = async (url,setData) =>{
    const response = await fetch(url);
    const data = await response.json();
    //  console.log(data);
    setData(data);
}
