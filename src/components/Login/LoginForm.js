import React, { Component } from 'react'
import {
  TextField,
  Button, Grid, Toolbar, Typography,
} from '@material-ui/core'
import Layout from "../../containers/Layout";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import LockOpenIcon from '@material-ui/icons/LockOpen';


export default class extends Component{

  state= this.getInitialState()

  getInitialState(){
    const { exercise } = this.props

    return exercise ? exercise : {
      email:'',
      password:'',
      muscles:''
    }
  }

  handleChange = name => ({ target:{value}}) =>
    this.setState({
      [name]:value
    })


  handleSubmit = () => {
    //TODO validate
    this.props.onSubmit({
      id:this.state.title.toLocaleLowerCase().replace(/ /g,'-'),
      ...this.state
    })
  }

  render(){
    const { email,password,muscles} = this.state,
      { exercise, muscles: categories} = this.props
    return(
      <Grid
      style={{
        height: '96vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >

        <form>
          <Grid container>
            <Grid item md={3}>
            </Grid>
            <Grid item md={6} style={{width:'100vw'}}>
              <Paper
                style={{
                  padding:20,
                }}
                elevation={4}
              >
                <Grid container>
                  <Grid item>
                    <Typography component="h6" variant="h6">
                      Login to Smart Care
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      label="email"
                      value={email}
                      onChange={this.handleChange('email')}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      label="password"
                      value={password}
                      onChange={this.handleChange('password')}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  style={{
                    marginTop:20,
                    marginBottom:20,
                    fontSize: '12px'
                  }}>
                  <Grid item>
                    <Typography
                      style={{
                        fontSize: '14px'
                      }}
                    >
                      Click here to register
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={12} sm={12} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<LockOpenIcon/>}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md={3}>
            </Grid>
          </Grid>
        </form>
      </Grid>

    )
  }
}
