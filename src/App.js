import React, { Suspense } from "react";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./utils/history";

const Patients = React.lazy(() => import('./components/Patients'))
const Nursing = React.lazy(() => import('./components/Nursing'))
const Consultation = React.lazy(() => import('./components/Consultation'))

function App() {
  return (
    <Grid>
      <BrowserRouter history={history}>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path="/" component={Patients} />
            <Route exact path="/nursing" component={Nursing} />
            <Route exact path="/consultation" component={Consultation} />
            <Route component={Patients} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
