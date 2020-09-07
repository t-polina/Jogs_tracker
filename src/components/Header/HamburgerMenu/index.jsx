import React from 'react';
import './style.css';
import whiteLogo from '../../../assert/img/white-logo.png';
import logo from '../../../assert/img/logo.png';
import onFilter from '../../../assert/img/filter-active.png';
import offFilter from '../../../assert/img/off-filter.png';

class HamburgerMenu extends React.Component {

    render() {
        const { pathname } = window.location;
        const { isFilter, setIsFilter } = this.props;
        const filter = isFilter ? onFilter : offFilter;
        return (
            <div className='hamburger-container'>
                <img className='logo' src={logo} alt={'logo'}/>
                <input type='checkbox' id='menuToggle' />
                <label className='menu-button' for={'menuToggle'}>
                    <span></span>
                </label>
                {
                    pathname === '/jog' || pathname.startsWith('/edit-jogs') ?
                        <img alt='logo' className={`mobile-filter ${isFilter? 'on-filter on-mobile' :'off-filter off-mobile'}`} src={filter} onClick={setIsFilter}/> : null
                }
                <div className='menu-container'>
                    <div>
                        <img className='white-logo' alt='logo' src={whiteLogo} />
                    </div>
                    <ul className='menu-bar'>
                        <li className={`${pathname === '/jog' ? 'active' : ' '} bold`}><a href={'/jog'}>JOGS</a></li>
                        <li className={`${pathname === '/info' ? 'active' : ' '} bold`}><a href={'/info'}>INFO</a></li>
                        <li className='bold'><a>CONTACTS AS</a></li>
                    </ul>
                </div>

            </div >

        );
    }
}

export default HamburgerMenu