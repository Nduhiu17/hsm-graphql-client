import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const Layout = React.lazy(() => import('../../containers/Layout'))
const AppTable = React.lazy(() => import('../../shared/AppTable'))
const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
})

export default withStyles(styles)(
 ({classes}) =>
<Layout>
  <Grid
    style={{
      display: 'flex',
      justifyContent:'space-between'
    }}
  >
    <Button
      variant="contained"
      className={classes.button}
      disableElevation
    >
      Registered Patients
    </Button>
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<AddIcon />}
    >
      Add Patient
    </Button>
  </Grid>
 <AppTable/>
</Layout>
)
