import React from 'react';
import logo from '../../../assert/img/jog-logo.png'
import JogStyle from './Jog.css'
export default class Jog extends React.Component{
    render() {
        return(
            <section className={'JogContainer'}>
                <div>
                <img src={logo} alt={'Jog logo'}/>
                </div>
                <div>
                <p>{this.props.date.toString()}</p>
                <p>Speed: {this.props.speed}</p>
                <p>Distance: {this.props.distance} km</p>
                <p>Time: {this.props.time} min</p>
                </div>
            </section>
        );
    }
}