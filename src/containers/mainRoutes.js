import PersonIcon from '@material-ui/icons/Person';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HealingIcon from '@material-ui/icons/Healing';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import React from "react";

const mainRoutes = [{
    path: '/patients',
    name: 'Patients',
    icon: < FingerprintIcon color = "primary"
    fontSize = "default" / > ,
    routes: [],
  },
  {
    path: '/nursing',
    name: 'Nursing',
    icon: < TripOriginIcon color = "primary"
    fontSize = "default" / > ,
    routes: [],
  },
  {
    path: '/consultation',
    name: 'Consultation',
    icon: < HealingIcon color = "primary"
    fontSize = "default" / > ,
    routes: [],
  },
]

export default mainRoutes
