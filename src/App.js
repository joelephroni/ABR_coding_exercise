import React, {useEffect, useState} from "react";
import {
  Routes, Route
} from "react-router-dom";

import './App.css';

import {getProcessedRegions} from "./data/Fisheries/fisheries_data";

import Nav from "./Components/Nav/Nav";
import Regions from './Pages/Regions';
import Region from './Pages/Region';

const App = () => {
  const [processedRegions, setProcessedRegions] = useState([]);

  useEffect(() => {
    getProcessedRegions().then((data) => {
      setProcessedRegions(data);

      // Would not be on the window in real life but better than making multiple calls to the API
      window.processedRegions = data;
    });
  }, []);

  return (
    <div className="App">
      <Nav processedRegions={processedRegions} />
        <Routes>
          <Route exact path="/" element={<Regions processedRegions={processedRegions} />} />
          <Route path="/region/:id" element={<Region />}></Route>
        </Routes>
    </div>
  );
}

export default App;