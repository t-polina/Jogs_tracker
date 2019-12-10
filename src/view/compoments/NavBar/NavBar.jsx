import React from 'react';
import NavBarStyle from './NavBar.css'

export default class NavBar extends React.Component{
    // isLogin=false;
    isLogin=true;
    render() {
        return(
            <section className={'navBar'}>
                <img className={'logo'} alt={'logo'}/>
                {this.isLogin ?
                    <section className={'menuBar'}>
                        <ul>
                            <li><a>JOG</a></li>
                            <li><a>INFO</a></li>
                            <li><a>CONTACTS AS</a></li>
                        </ul>
                </section>:null}
            </section>

        );
    }
}