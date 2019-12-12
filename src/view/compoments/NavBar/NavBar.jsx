import React from 'react';
import NavBarStyle from './NavBar.css'
import filter from '../../../assert/img/filter-active.png'

export default class NavBar extends React.Component{

    path= window.location.pathname;
    render() {
        return(

                    <div className='navBar' id='n'>
                        <img className={'logo'} alt={'logo'}/>
                        <img className='mobile' src={filter} alt={'filter'}/>
                        <input type={'checkbox'} id='menuToggle'/>
                        <label className='menuButton' for={'menuToggle'}>
                               <span></span>
                        </label>

                        <ul className='menuBar'>
                            {this.path==='/jog' ? <li><a href={'/jog'} className = 'active'>JOGS</a></li> :
                            <li><a href={'/jog'}>JOGS</a></li>}
                            {this.path==='/info' ? <li><a href={'/info'} className = 'active'>INFO</a></li> :
                                <li><a href={'/info'}>INFO</a></li>}
                            <li><a>CONTACTS AS</a></li>
                        </ul>
                        <img className='web' src={filter} alt={'filter'}/>
                    </div>


        );
    }
}