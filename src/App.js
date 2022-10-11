import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from '@material-ui/core';

function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%'}}>
      {/* This grid will take full width on mobile devices, on medium and larger it will only take 4/12 spaces */}
      <Grid item xs={12} md={4}>
        < List />
      </Grid>
      <Grid item xs={12} md={8}>
      < Map />
    </Grid>
    </Grid>
    </>


  );
}

export default App;
