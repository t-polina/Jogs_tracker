import React from 'react';
import LetMeIn from '../../components/LetMeIn';
import './style.css';

class Login extends React.Component {
    render() {
        return (
            <div className='login-container'>
                <LetMeIn history={this.props.history} />
            </div>
        );
    }
}

export default Login;