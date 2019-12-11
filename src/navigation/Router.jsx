import React from 'react'
import {Redirect, Switch, withRouter} from "react-router-dom";
import StartPage from '../view/pages/StartPage'
import Info from "../view/compoments/Info/Info";
import JogPage from "../view/pages/JogPage";
import {Route} from "react-router";
import UpdateAndCreateJog from "../view/compoments/UpdateAndCreateJog/UpdateAndCreateJog";

class  Router extends React.Component{
    render() {
        return(
            <Switch>
                <Route path="/jog" component={JogPage} />
                <Route path="/login" component={StartPage} />
                <Route path="/update-jog/:jogId" component={UpdateAndCreateJog}/>
                <Route path="/create-jog" component={UpdateAndCreateJog}/>
                {/*<Router path='/info' component={Info}/>*/}
                {/*<Route path='/jog' component={JogPage}/>*/}
                {/*<PrivateRoute path='/info' component={Info}/>*/}
                <Route exact path='*'>
                    <Redirect to='/login' component={Info}/>
                </Route>
            </Switch>
        )
    }
}
export  default  withRouter(Router)