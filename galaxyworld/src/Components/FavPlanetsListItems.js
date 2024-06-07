import React, { useState } from 'react'
import FavPlanetsList from './FavPlanetsList'
import PlanetItems from './PlanetItems'

function FavPlanetsListItems() {
    const [planetItems, setPlanetItems] = useState([])

    const addPlanet = planet => {
///avoiding adding empty items        
        if (!planet.text || /^\s*$/.test(planet.text)) {
            return;
          } 
        // if(planet === "Mercury" || "Venus" || "Earth" || "Mars" || "Jupiter" || "Saturn" || "Neptune" || "Sun"){
        const newPlanet = [...planetItems];
        newPlanet.push(planet)
        setPlanetItems(newPlanet);
        console.log( newPlanet);
        }
///to edit the planet item row
const updatePlanet = (planetId, newPlanet) => {
    if (!newPlanet.text || /^\s*$/.test(newPlanet.text)) {
        return;
      }
    setPlanetItems(previos => previos.map(item => (item.id === planetId ? newPlanet : item)))
}

///make the icon clickable with a function
///check from array to remove the planet
    const removePlanet = id =>{
        const removePlanetArr = [...planetItems].filter(planet => planet.id !== id)
    setPlanetItems(removePlanetArr);
    }  
///removing all planets
   const deletAll=()=> {
    
      setPlanetItems([]);
    
    }

///fav toggle between true and false
    const unFavPlanet = id =>{
        let updatePlanet = planetItems.map(planet => {
            if(planet.id === id ){
                planet.isUnFavPlanet = !planet.isUnFavPlanet

            }
            return planet
        });
        setPlanetItems(updatePlanet)
    }
    console.log(planetItems)
    return (
        <div>
            <h1>My Favorite Planets List</h1> 
              <h3>Explore more about the planets to make the list bigger!</h3> 
             
          <FavPlanetsList onSubmit={addPlanet} deletAll={deletAll}/>  
          <PlanetItems planetItems={planetItems} unFavPlanet={unFavPlanet} removePlanet={removePlanet} updatePlanet={updatePlanet}/>
        
        </div>
    )
}

export default FavPlanetsListItems
