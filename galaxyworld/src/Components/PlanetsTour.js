import React, {useState}from 'react'
import { Planet } from 'react-planet';
import PlanetSection from './PlanetSection.js'
import Earth from '../images/earth.png'
import Jupiter from '../images/jupiter.png'
import Mars from '../images/mars.png'
import Mercury from '../images/mercury.png'
import Saturn from '../images/saturn.png'
import Uranos from '../images/uranos.png'
import Venus from '../images/venus.png'
import Neptune from '../images/neptune.png'
import Sun from '../images/sun.png'
export function PlanetsTour () {
const [activePlanet, setActivePlanet] = useState()


function handlePlanetClick(e){
    setActivePlanet(e.target.id)
}
    return (
        
        <div className="planetsDiv">
              
        <Planet centerContent={
            
                    <div 
                    
                        style={{
                            
                            height: 200,
                            width: 200,
                            borderRadius: '50%',
                            backgroundColor: '#1da8a4',
                            backgroundImage:`url(${Earth})`
                            
                        }}
                    />
                }
                // open
                orbitRadius={340}
                rotation={40}
                hideOrbit
                bounceOnClose
                bounceRadius={10}
                autoClose
           >
                <div id="Jupiter"
                
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Jupiter})`
                     
                        
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Mars"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Mars})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Mercury"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Mercury})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                
               <div id="Uranos"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Uranos})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Venus"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Venus})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Saturn"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '40%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Saturn})`
                        
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Neptune"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Neptune})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
                <div id="Sun"
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '50%',
                        backgroundColor: '#9257ad',
                        backgroundImage:`url(${Sun})`
                    }}
                    onClick={(e) => handlePlanetClick(e)}
                />
            </Planet>
            <div>
                <hr />
                <PlanetSection planetName={activePlanet}/>
            </div>
            </div>
    );
}
export default PlanetsTour

