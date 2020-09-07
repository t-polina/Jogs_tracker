import React from 'react';
import logo from '../../assert/img/sad-rounded-square-emoticon.png';
import './style.css';

class WithoutJogs extends React.Component {
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

    render() {
        const { createJog } = this.props;
        const { isMobileMode } = this.state;

        return (
            <div className={'empty-jogs-container'}>
                <div>
                    <img src={logo} className={`sad-face ${isMobileMode ? 'mobile-face' : 'desktop-face'}`} alt={'Sad face'} />
                    <div className='text-container'>
                        <p>Nothing is there</p>
                    </div>
                </div>

                <div>
                    <button className={`create-first-jog-button bold ${isMobileMode ? 'mobile-button' : 'desktop-button'}`} onClick={createJog}>Create your jog first</button>
                </div>
            </div>
        );
    }
}

export default WithoutJogs;