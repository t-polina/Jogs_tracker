import React from 'react';
import logo from '../../../assert/img/jog-logo.png'
import JogStyle from './Jog.css'
export default class Jog extends React.Component{
  handelCreate = () => {
      this.props.handelCreate(this.props.id)
  };
    render() {
        return(
            <React.Fragment>
            <div className={'jogContainer'} >
                <div onClick={this.handelCreate}>
                <img src={logo} alt={'Jog logo'}/>
                </div>
                <div className='infAboutJog'>
                <p id='date'>{this.props.date.toString()}</p>
                    <p>Speed: <span>{this.props.speed}</span></p>
                    <p>Distance: <span> {this.props.distance} km</span></p>
                    <p>Time: <span>{this.props.time} min </span> </p>
                </div>

            </div>
                <hr className={'hr'}/>
            </React.Fragment>
        );
    }
}