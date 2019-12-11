import React from 'react';
import logo from '../../../assert/img/jog-logo.png'

export default class WithoutJogs extends React.Component{
    render() {
        return(
            <section className={'JogContainer'}>
                <div>
                    <img src={logo} alt={'Jog logo'}/>
                </div>
                <div>
                    <p>Nothing is there</p>
                </div>
                <button onClick={this.props.hendelCreate}>Create your jog first</button>
            </section>
        );
    }
}