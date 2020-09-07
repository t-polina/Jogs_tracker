import React from 'react';
import './style.css';
import { getToken } from '../../redux/thunks/user';
import { connect } from 'react-redux';
import mobileBear from '../../assert/img/bear-face-mobile.png';
import desktopBear from '../../assert/img/bear-face-desktop.png';

class LetMeIn extends React.Component {
    state = {
        isMobileMode: true,
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        window.innerWidth < 600 ? this.setState({ isMobileMode: true })
            : this.setState({ isMobileMode: false });
    };

    handelClick = async () => {
        await this.props.getToken('hello');
        this.props.history.push('/jog');
    };

    render() {
        const { isMobileMode } = this.state;
        const bearFace = isMobileMode ? mobileBear : desktopBear;
        return (
            <div className={`let-me-in-container ${isMobileMode ? 'mobile-container' : 'desktop-container'}`}>
                <img className={'bear-face'} alt={'Bear face'} src={bearFace} />
                <button className={`let-me-in-button bold ${isMobileMode ? 'mobile-button' : 'desktop-button'}`} onClick={this.handelClick}>Let me in</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: login => dispatch(getToken(login))
    }
};
export default connect(null, mapDispatchToProps)(LetMeIn)