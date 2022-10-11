import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles'


const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      
    </div>
  )
}

export default List;


