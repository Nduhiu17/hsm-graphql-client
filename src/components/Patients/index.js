import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import patientColumns from "../../data/patientColumns";
import patientData from "../../data/patientData";
import history from "../../utils/history";


const Layout = React.lazy(() => import('../../containers/Layout'))
const AppTable = React.lazy(() => import('../../shared/AppTable'))
const styles = theme => ({

})

export default withStyles(styles)(
 () =>{
     const handleClick = (id) => {
         history.push(`/patients/${id}`)
     }
   return (
     <Layout>
       <AppTable
           columns={patientColumns}
           data={patientData}
           handleClick={handleClick}
       />
     </Layout>
   )
 }
)
