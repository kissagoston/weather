
// import neutral from './img/neutral.jpg'
import React, { useState, useEffect} from 'react';
import './App.css';
// A searchbar meg a magyar városok dropdownja
import Othercities from './components/othercities/other-cities.js';
// Az időjárási adatokat mutatja (temper,humid) API.openweather.fetch
import Showdata from './components/show-data/showdata.js';
// kedvenc városok dropdonja (statikus adat)
import Favourites from './components/favourites/favourites.js';
// a useFetch komponens ez hozz az adatokat a kodba.
import {loadData, mainUrls} from './components/usefecth/usefetch.js'


function App() {

  document.title="Weather App";
 
  const [data, setData] = useState([]); /* API adat tárolása fetch után */
  const [city,setCity] = useState('Budapest'); // Város változásakor ujra fetcheljük az adatokat az APIból

  // useEffect újra fusson ha változik a city ami useState  - amikor választunk uj várost, onChange....
  useEffect(() => {
    /* adatbetöltése az URL-böl */
    loadData(mainUrls.URL+'?q='+city+'&appid='+mainUrls.API_key+'&units=metric' ,setData);  
    console.log('URL=',mainUrls.URL+'?q='+city+'&appid='+mainUrls.API_key+'&units=metric');
  }, [city])  
// useState setCity az option dropdown kiválasztásánál hívódik meg
  const CitySearch = (e) =>{ console.log(e.target.value); setCity(e.target.value); }

  return (
    <div className="App">
      {/* background container */}
     <div className="container">
       <div className="cloud">

            <div className="weather-wrapper">
                <div className="selects">
                      <Favourites  setCityFn={setCity} />
                      <Othercities CitySearch={CitySearch}/>
                </div>
                <div className="showWeatherDetails"  >
                  {/* amit megkapunk useFetchnál adatot, átadjuk propsként */}
                      <Showdata data={data} city={city} />
                      
                </div>
            </div>

       </div>
     </div>
         
    </div>
  );
}

export default App;
