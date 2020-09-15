import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const Layout = React.lazy(() => import('../../containers/Layout'))

const styles = theme => ({

})

export default withStyles(styles)(
 ({match}) =>{
   return (
     <Layout>
        <div>
    <h3>PATIENT  ID: {match.params.id}</h3>
  </div>
     </Layout>
   )
 }
)
