import React from "react";
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute =({component: Component, ...rest})=>(
    <Route {...rest}
           render={props =>{
               const token =localStorage.getItem(('token'));
               return token ? <Component {...props}/> : <Redirect to={{pathname: '/login'}}/>}
           }
    />
);