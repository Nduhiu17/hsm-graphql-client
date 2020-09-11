import PersonIcon from '@material-ui/icons/Person';
import React from "react";

const mainRoutes = [
    {
        path: '/patients',
        name: 'Patients',
        icon: <PersonIcon color="action" fontSize="default" />,
        routes: [],
    },
    {
        path: '/nursing',
        name: 'Nursing',
        icon: <PersonIcon color="action" fontSize="default" />,
        routes: [],
    },
    {
        path: '/consultation',
        name: 'Consultation',
        icon: <PersonIcon color="action" fontSize="default" />,
        routes: [],
    },
]

export default mainRoutes

