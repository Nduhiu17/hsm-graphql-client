import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Divider, Grid, Paper, Toolbar, Typography} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const Layout = React.lazy(() => import('../../containers/Layout'))

const styles = theme => ({
Paper:{
    padding:20
},
    Icon: {
        height: '20vh',
        width: '20vw'
    }
})

export default withStyles(styles)(
 ({match,classes}) =>{
     const [state, setState] = React.useState({
         checkedA: true,
         checkedB: true,
     });

     const handleChange = (event) => {
         setState({ ...state, [event.target.name]: event.target.checked });
     };
   return (
     <Layout>
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                md={6}
                sm={12}
                xs={12}
            >
                <Paper className={classes.Paper} elevation={2}>
                    <Grid container>
                        <Grid
                            item
                            md={12}
                            sm={12}
                            xs={12}
                            style={{
                                display:'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <AccountCircleIcon
                                fontSize='large'
                                className={classes.Icon}
                                color="primary"
                                />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{
                            maxHeight: '100%'
                        }}
                    >
                        <Grid>
                            <Typography component='h6' variant='h6'>
                                Patient Profile
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Toolbar></Toolbar>
                    <Grid
                        container
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Grid>
                            <Typography>
                                Antony Nduhiu
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography>
                                0722117264
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Toolbar></Toolbar>
                    <Grid container>
                        <Grid item>
                            <Typography>
                                nduhiu254@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    <Toolbar></Toolbar>
                    <Grid
                        container
                        style={{
                            display:'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="secondary"
                                    />
                                }
                                label="Send to Nursing"
                            />
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
            <Grid
                item
                md={6}
                sm={12}
                xs={12}
            >
            <Grid
                spacing={2}
                container
                style={{
                    minHeight: '106%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}
            >
                <Grid item md={12} sm={12} xs={12}>
                    <Paper className={classes.Paper}>
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant='h6'>
                                            Patient Insurances
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    style={{
                                        display:'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Grid item md={6} sm={12} xs={12}>
                                        NHIF
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        xs={12}
                                        style={{
                                            background:'#F8F8F8',
                                            borderRadius: '2%',
                                            textAlign: 'center',
                                            padding: 2
                                        }}
                                    >
                                        Active - Paid for
                                    </Grid>
                                </Grid>
                                <Toolbar></Toolbar>
                                <Grid
                                    container
                                    style={{
                                        display:'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Grid item md={6} sm={12} xs={12}>
                                        Personal Insurance
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        xs={12}
                                        style={{
                                            background:'#F8F8F8',
                                            borderRadius: '2%',
                                            textAlign: 'center',
                                            padding: 2
                                        }}
                                    >
                                        Active - Paid for
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Paper className={classes.Paper}>
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant='h6'>
                                            Other Details
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    style={{
                                        display:'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 8
                                    }}
                                >
                                    <Grid item md={6} sm={12} xs={12}>
                                        Contact Person
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        xs={12}
                                        style={{
                                            background:'#F8F8F8',
                                            borderRadius: '2%',
                                            textAlign: 'center',
                                            padding: 2
                                        }}
                                    >
                                       Zane Njogu
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    style={{
                                        display:'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 8
                                    }}
                                >
                                    <Grid item md={6} sm={12} xs={12}>
                                        Contact Person Number
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        xs={12}
                                        style={{
                                            background:'#F8F8F8',
                                            borderRadius: '2%',
                                            textAlign: 'center',
                                            padding: 2
                                        }}
                                    >
                                        0722117264
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
     </Layout>
   )
 }
)
