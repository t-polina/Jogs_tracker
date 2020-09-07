import React from 'react';
import logo from '../../assert/img/jog-logo.png';
import './style.css';

class Jog extends React.Component {

    handelCreate = () => {
        this.props.handelCreate(this.props.id);
    };

    render() {
        const { date, speed, distance, time } = this.props;
        return (
            <React.Fragment>
                <div className='jog-container'>
                    <img src={logo} className='jog-icon' alt={'Jog logo'} onClick={this.handelCreate} />
                    <div className='jog-info-container medium'>
                        <p className='jog-date regular'>{date}</p>
                        <p>Speed: <span>{speed}</span></p>
                        <p>Distance: <span>{distance} km</span></p>
                        <p>Time: <span>{time} min </span> </p>
                    </div>
                </div>
                <hr className={'hr'} />
            </React.Fragment>
        );
    }
}

export default Jog;