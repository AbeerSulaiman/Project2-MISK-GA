import React, { useState, useEffect } from "react";
import { Planets } from "./Planets.js";
import Galaxy from "../images/galaxy.png";

function PlanetSection(props) {
  const [activePlanet, setActivePlanet] = useState(false);
  const [planetName, setPlanetName] = useState("");
  const [planetDescription, setPlanetDescription] = useState("");
  const [planetVelocity, setPlanetVelocity] = useState("");
  const [planetDistance, setPlanetDistance] = useState("");

  useEffect(() => {
    getPlanetInfo(props.planetName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.planetName]);

  function getPlanetInfo(planetName) {
    if (props.planetName) {

      const findPlanetIndexCondition = function (singleObject) {
        return planetName === singleObject.name;
      };
      const planetIndex = Planets.allPlanets.findIndex(
        findPlanetIndexCondition
      );

      if (planetIndex !== -1) {
        setActivePlanet(true)
        setPlanetName(Planets.allPlanets[planetIndex].name);
        setPlanetDescription(Planets.allPlanets[planetIndex].description);
        setPlanetVelocity(Planets.allPlanets[planetIndex].velocity);
        setPlanetDistance(Planets.allPlanets[planetIndex].distance);
        
      }
    }
  }

  return (
    <div className="center">
      <div className="planetInformation">
        <div className="property-Planet-description">
          {activePlanet ? <div>
                    <h4 className="planet">{planetName}</h4>
                    <h4 className="planet"> {`Velocity: ${planetVelocity}`}</h4>
                    <h4 className="planet">{`Distance: ${planetDistance}`}</h4>
                    </div>
           : <h4 className="planet">Planet Information</h4>}

        </div>

        <div
          className="property-P-image"
          style={{ backgroundImage: `url(${Galaxy})` }}
        >
          <div className="property-P-image-title">
            <p>{planetDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetSection;
