import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavMenu from "./Components/NavMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrentPlanet from "./Components/CurrentPlanet";
import Image from "./Components/Image";
import dotenv from "dotenv";
import PlanetsTour from "./Components/PlanetsTour";
import FavPlanetsListItems from "./Components/FavPlanetsListItems";
dotenv.config();

///API call to fetch APOD
function App(props) {
  
  const [fetchApod, setfetchApod] = useState({});
  const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
  const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;


  useEffect(() => {
    function getAPOD(endpoint = "planetary/apod") {
      axios
        .get(`${nasaEndpoint}${endpoint}`, {
          params: {
            api_key: nasaApiKey,
          },
        })
        .then((response) => {
          console.log(response);
          setfetchApod(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getAPOD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Router>
      <div>
        <Image />
        <NavMenu />
        <br />
        <div className="greeting">
        <h4>Seat built first, and let the journy begin!</h4>
        </div>
        
        
      </div>

      <Route
        exact
        path="/daysPlanet"
        render={() => <CurrentPlanet apod={fetchApod} />}
      />

      <Route
        exact
        path="/planetsTour"
        render={() => <PlanetsTour />}
      />

     <Route
        exact
        path="/favPlanets"
        render={() => 
        <div className="planet-list">
          <FavPlanetsListItems />
          </div>}
      />
      <Route
        render={() => {
          <p>Not found</p>;
        }}
      />
    </Router>
  );
}

export default App;
