import React from 'react';
import logo from '../../../assert/img/sad-rounded-square-emoticon.png'
import WithoutJogStryle from './WithoutJog.css'

export default class WithoutJogs extends React.Component{
    render() {
        return(
            <section className={'withoutJogContainer'}>
                <div>
                    <img src={logo} className='sadFace' alt={'Jog logo'}/>
                </div>
                <div className='textNothing'>
                    <p>Nothing is there</p>
                </div>
                <div>
                    <button className='createFirstJog' onClick={this.props.hendelCreate}>Create your jog first</button>
                </div>
            </section>
        );
    }
}