import React from 'react'
import {Redirect, Switch, withRouter} from "react-router-dom";
import StartPage from '../view/pages/Start/StartPage'
import JogPage from "../view/pages/Profile/JogsPage";
import {Route} from "react-router";
import UpdateAndCreateJog from "../view/pages/UpdateAndCreateJog/UpdateAndCreateJog";
import Info from '../view/pages/Info/Info';
import {PrivateRoute} from "./PrivateRoute";

class  Router extends React.Component{
    render() {
        return(
            <Switch>
                <PrivateRoute path="/jog" component={JogPage} />
                <PrivateRoute path="/info" component={Info} />
                <Route path="/login" component={StartPage} />
                <PrivateRoute path="/update-jog/:jogId" component={UpdateAndCreateJog}/>
                <PrivateRoute path="/create-jog" component={UpdateAndCreateJog}/>

                <Route exact path='*'>
                    <Redirect to='/jog' component={Info}/>
                </Route>
            </Switch>
        )
    }
}
export  default  withRouter(Router)