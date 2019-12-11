import React from 'react';
import logo from '../../../assert/img/jog-logo.png'
import JogStyle from './Jog.css'
export default class Jog extends React.Component{
    constructor(props) {
        super(props);

    }
  handelCreate = () => {
      this.props.handelCreate(this.props.id)
  };
    render() {
        return(
            <div className={'JogContainer'} onClick={this.handelCreate}>
                <div>
                <img src={logo} alt={'Jog logo'}/>
                </div>
                <div>
                <p>{this.props.date.toString()}</p>
                <p>Speed: {this.props.speed}</p>
                <p>Distance: {this.props.distance} km</p>
                <p>Time: {this.props.time} min</p>
                </div>
            </div>
        );
    }
}