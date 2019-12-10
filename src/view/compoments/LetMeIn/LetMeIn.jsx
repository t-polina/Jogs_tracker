import React from 'react';
import LetMeInStyle from './LetMeIn.css'
import {getToken} from '../../../store/thunks'
import {connect} from "react-redux";

class LetMeIn extends React.Component{
    handelClick =  () =>{
        this.props.getToken('hello');
        this.props.history.push('/jog');
    };
    render() {
        return(
            <section className={'letMeInContainer'}>
                <img className={'bearFace'} alt={'bearFace'}/>
                <button className={'letMeInButton'} onClick={this.handelClick}>Let me in</button>
            </section>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getToken: (login) => dispatch(getToken(login))
    }
};
export default connect(null, mapDispatchToProps)(LetMeIn)