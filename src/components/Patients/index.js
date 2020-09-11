import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const Layout = React.lazy(() => import('../../containers/Layout'))

const styles = theme => ({

})

export default withStyles(styles)( 
 () => 
<Layout>
 patients
</Layout>
)