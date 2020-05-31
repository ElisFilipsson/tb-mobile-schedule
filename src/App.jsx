import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import NotFoundPage from "./pages/NotFoundPage";
import logo from "./assets/logo.svg";
import { Hero, Container } from "./layouts";
import { routes } from "./shared/variabels";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [phoneNbr, setPhoneNbr] = useState(null);
  const [hours, setHours] = useState(null);

  const onConfirmed = (phoneNbr, hours) => {
    setPhoneNbr(phoneNbr);
    setHours(hours);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 2rem)" }}>
      <Hero>
        <img src={logo} className="app-logo" alt="logo" />
      </Hero>
      <Container>
        <Router>
          <Switch>
            <Route exact path={routes.confirmed}>
              <ConfirmationPage number={phoneNbr} hours={hours}/>
            </Route>
            <Route exact path={routes.catchAll}>
              <NotFoundPage />
            </Route>
            <Route path={routes.home}>
              <WelcomePage onConfirm={onConfirmed} />
            </Route>
            <Redirect to={routes.catchAll} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
