import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid, Toolbar, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const Layout = React.lazy(() => import('../../containers/Layout'))
const AppTable = React.lazy(() => import('../../shared/AppTable'))
const styles = theme => ({

})

export default withStyles(styles)(
 () =>{
   return (
     <Layout>
       <AppTable/>
     </Layout>
   )
 }
)
