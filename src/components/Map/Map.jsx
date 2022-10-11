import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab';

import useStyles from './styles'

const Map = () => {
  const classes = useStyles();
  // isMobile will be false if device is larger than 600px
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCIC-1-sw4b8NRr5Ld4Q7zPjOeRnKPgs8w'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}

        >

        </GoogleMapReact>

    </div>
  )
}

export default Map;


