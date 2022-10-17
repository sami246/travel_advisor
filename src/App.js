import React, { useEffect, useState} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
        setCoordinates({ lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating)
    setFilteredPlaces(filteredPlaces)
  }, [rating])
  
  

  useEffect(() => {
    if(bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => { 
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setIsLoading(false);
      })
    }

  }, [bounds, type])

  return (
    <>
    <CssBaseline />
    <Header 
      setCoordinates={setCoordinates}
    />
    <Grid container spacing={3} style={{ width: '100%'}}>
      {/* This grid will take full width on mobile devices, on medium and larger it will only take 4/12 spaces */}
      <Grid item xs={12} md={4}>
        < List 
          isLoading={isLoading}
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          type={type}
          rating={rating}
          setType={setType}
          setRating={setRating}
          />
      </Grid>
      <Grid item xs={12} md={8}>
      < Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={filteredPlaces.length ? filteredPlaces : places}
        setChildClicked={setChildClicked}
        />
    </Grid>
    </Grid>
    </>


  );
}

export default App;
