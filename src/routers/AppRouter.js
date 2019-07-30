import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

import PrivateRoute from './PrivateRoute';

// subverting BrowserRouter's own history 
// to be used with login and logout in app.js
export const history = createHistory();

const AppRouter = () => (
    
    //<BrowserRouter> // not used when controlling our own history
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={DashboardPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;