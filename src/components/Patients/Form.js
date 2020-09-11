import React, { Component } from 'react'
import {
  TextField,
  Button, Grid,
} from '@material-ui/core'
import Layout from "../../containers/Layout";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';



export default class extends Component{

  state= this.getInitialState()

  getInitialState(){
    const { exercise } = this.props

    return exercise ? exercise : {
      title:'',
      description:'',
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
    const { names,description,muscles} = this.state,
      { exercise, muscles: categories} = this.props
    return(
      <Layout>
        <Paper style={{padding:20}} elevation={4}>
          <form>
            <Grid container spacing={4}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  label="First and Last Name"
                  value={names}
                  onChange={this.handleChange('names')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  label="Mobile Number"
                  value={names}
                  onChange={this.handleChange('names')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  label="ID Number"
                  value={names}
                  onChange={this.handleChange('names')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  label="Contact Person Names"
                  value={names}
                  onChange={this.handleChange('names')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  label="Contact Person Number"
                  value={names}
                  onChange={this.handleChange('names')}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                style={{
                  display:'flex',
                  justifyContent:'space-around'
                }}>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedMale}
                        onChange={this.handleChange}
                        name="checkedMale"
                        color="primary"
                      />
                    }
                    label="Male"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedMale}
                        onChange={this.handleChange}
                        name="checkedMale"
                        color="primary"
                      />
                    }
                    label="Female"
                  />
                </Grid>
              </Grid>
            </Grid>

            <br/>
            <br/>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              disabled={!names}
              startIcon={ exercise ? <EditIcon />:<AddIcon />}
            >
              { exercise ? "Edit":"Add"}
            </Button>
          </form>
        </Paper>

      </Layout>

    )
  }
}
