import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Login from './components/Login';
import Locked from './components/Locked';
import { oktaConfig } from './lib/oktaConfig';


const CALLBACK_PATH = `${process.env.REACT_APP_CALLBACK_PATH}`;

const oktaAuth = new OktaAuth(oktaConfig);

const Root = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route path='/' exact={true} component={Login} />
          <Route path={CALLBACK_PATH} exact={true} component={LoginCallback} />
          <SecureRoute path='/locked' component={Locked} />
        </Switch>
    </Security>
  );
};


export default function App() {
  return (
    <Router>
      <Root />
    </Router>
  )
}