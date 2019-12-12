import React from 'react';
import LetMeIn from "../../compoments/LetMeIn/LetMeIn";
export default class StartPage extends React.Component{
    render() {
        return(
            <LetMeIn history={this.props.history}/>
        );
    }
}

