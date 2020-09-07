import React from 'react';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../containers/Login';
import JogPage from '../containers/Profile';
import { Route } from 'react-router';
import UpdateAndCreateJog from '../containers/UpdateAndCreateJog';
import Info from '../containers/Info';
import { PrivateRoute } from './PrivateRoute';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path='/jog' component={JogPage} />
                <PrivateRoute path='/info' component={Info} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/edit-jogs/:jogId' component={UpdateAndCreateJog} />
                <PrivateRoute path="/edit-jogs" component={UpdateAndCreateJog} />
                <Route exact path='*'>
                    <Redirect to='/jog' component={JogPage} />
                </Route>
            </Switch>
        )
    }
}

export default withRouter(Router);