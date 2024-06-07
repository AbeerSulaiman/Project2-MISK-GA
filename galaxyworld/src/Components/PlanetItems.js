import React, { useState } from 'react'
import FavPlanetsList from './FavPlanetsList'
import { RiCloseCircleFill } from 'react-icons/ri';
import { RiEditLine } from 'react-icons/ri';


function PlanetItems({planetItems, unFavPlanet, removePlanet, updatePlanet}) {
    const [editPlanet, setEditPlanet] = useState({
        id: null,
        value: '',
    })

    const submitUpdatedPlanet = value => {
        updatePlanet(editPlanet.id, value)
        setEditPlanet({
            id: null,
            value: ''
        });
    }

    if(editPlanet.id){
     return <FavPlanetsList editPlanet={editPlanet} onSubmit={submitUpdatedPlanet}/>
    }
    
    console.log(planetItems)
    return planetItems.map((planet, index) => {
        return(
        <div className={planet.isUnFavPlanet ? 'planet-row unFav' : 'planet-row'} key={index}>
           <div key={planet.id} onClick={() => unFavPlanet(planet.id)}>
           {planet.text}
          

           </div> 
           <div className="icons">
               <RiEditLine onClick={() => setEditPlanet({id: planet.id , value: planet.text})} className='editPlanet-icon' />
               <RiCloseCircleFill onClick={() => removePlanet(planet.id)} className='remove-icon'/>
           </div>
        </div>
    )})
}

export default PlanetItems;
