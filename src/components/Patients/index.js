import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid, Toolbar, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const Layout = React.lazy(() => import('../../containers/Layout'))
const AppTable = React.lazy(() => import('../../shared/AppTable'))
const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
})

export default withStyles(styles)(
 ({classes,history}) =>
 {
   const goToForm = () => {
     history.push('create-patient')
 }
   return (
     <Layout>
       <Grid
         style={{
           display: 'flex',
           justifyContent:'space-between'
         }}
       >
         <Button
           variant="contained"
           color="info"
           className={classes.button}
           component="div"

         >
           Registered Patients
         </Button>
         <Button
           variant="contained"
           color="primary"
           className={classes.button}
           startIcon={<AddIcon />}
           onClick={() => goToForm()}
         >
           Add Patient
         </Button>
       </Grid>
       <AppTable/>
     </Layout>
   )
 }
)
