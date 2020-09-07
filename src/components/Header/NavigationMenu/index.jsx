import React from 'react';
import './style.css';
import onFilter from '../../../assert/img/filter-active.png';
import offFilter from '../../../assert/img/off-filter.png';
import logo from '../../../assert/img/logo.png';

class NavigationMenu extends React.Component {
    
    render() {
        const { pathname } = window.location;
        const { isFilter, setIsFilter } = this.props;
        const filter = isFilter ? onFilter : offFilter;
    
        return (
            <div className='desktop-header-container'>
                <img className={'desktop-logo'} alt={'logo'} src={logo} />
                <div className='desktop-action'>
                    <ul className='desktop-menu-bar'>
                        <li className={`${pathname === '/jog' ? 'active-desktop' : ' '} bold`}><a href={'/jog'}>JOGS</a></li>
                        <li className={`${pathname === '/info' ? 'active-desktop' : ' '} bold`}><a href={'/info'}>INFO</a></li>
                        <li className='bold'><a>CONTACTS AS</a></li>
                    </ul>
                    {
                        pathname === '/jog' || pathname.startsWith('/edit-jogs') ?
                            <img className={`desktop-filter ${isFilter? 'on-filter on-desktop' :'off-filter off-desktop'}`} src={filter} onClick={setIsFilter} /> : null
                    }
                </div>
            </div>

        );
    }
}

export default NavigationMenu;