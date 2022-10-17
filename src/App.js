import React, { useEffect, useState} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
        setCoordinates({ lat: latitude, lng: longitude})
    })
  }, [])
  

  useEffect(() => {
    if(bounds) {
      setIsLoading(true);

      getPlacesData(bounds.sw, bounds.ne).then((data) => { 
        console.log("data", data)
        setPlaces(data)
        setIsLoading(false);
      })
    }

  }, [coordinates, bounds])

  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%'}}>
      {/* This grid will take full width on mobile devices, on medium and larger it will only take 4/12 spaces */}
      <Grid item xs={12} md={4}>
        < List 
          isLoading={isLoading}
          places={places}/>
      </Grid>
      <Grid item xs={12} md={8}>
      < Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        />
    </Grid>
    </Grid>
    </>


  );
}

export default App;
