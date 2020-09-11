import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

const LoginForm = React.lazy(() => import('../../components/Login/LoginForm'))

const styles = theme => ({

})

export default withStyles(styles)(
  () =>
    <Grid>
      <LoginForm/>
    </Grid>
)
