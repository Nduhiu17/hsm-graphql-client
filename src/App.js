import React, { Suspense } from "react";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./utils/history";

const Patients = React.lazy(() => import('./components/Patients'))
const Nursing = React.lazy(() => import('./components/Nursing'))
const Consultation = React.lazy(() => import('./components/Consultation'))
const Pharmacy = React.lazy(() => import('./components/Pharmacy'))
const PatientForm = React.lazy(() => import('./components/Patients/Form'))
const Login = React.lazy(() => import('./components/Login/index'))

function App() {
  return (
    <Grid>
      <BrowserRouter history={history}>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path="/" component={Patients} />
            <Route exact path="/nursing" component={Nursing} />
            <Route exact path="/consultation" component={Consultation} />
            <Route exact path="/pharmacy" component={Pharmacy} />
            <Route exact path="/create-patient" component={PatientForm} />
            <Route exact path="/login" component={Login} />
            <Route component={Patients} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
