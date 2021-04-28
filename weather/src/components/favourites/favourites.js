import React from 'react';
import './favourites.css';

function Favourites( {setCityFn} ) {
    return (
        <div>
           
            <p>Favourites </p>
            <select id="favcityList"
                    key="favCities" 
                    
                    onChange={(ev) => setCityFn(ev.target.value)  }
                    
                    >
                        

                    <option value="">Select City</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Zurich">Zürich</option>
                    <option value="Zürich">Zürich - loading</option>
                    <option value="Komárom">Komárom - loading &nbsp; &nbsp; </option>
                    <option value="Komárno">Komárom</option>
                    <option value="London">London</option>
                    <option value="Vienna">Bécs</option>
                    <option value="Moscow">Moscow</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Zanzibar">Zanzibar</option>
                    <option value="Győr">Győr</option>
             </select>


        </div>
    )
}

export default Favourites

