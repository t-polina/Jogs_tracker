import React from 'react';
import './style.css';
import { setIsFilter } from '../../redux/thunks/filter';
import { connect } from 'react-redux';
import HamburgerMenu from './HamburgerMenu';
import NavigationMenu from './NavigationMenu';
import * as selectors from '../../redux/selectors';

class Header extends React.Component {
    state = {
        isMobileMode: true,
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        window.innerWidth < 650 ? this.setState({ isMobileMode: true })
            : this.setState({ isMobileMode: false });
    };

    render() {
        const { isMobileMode } = this.state;
        return (
            <div className='header-container'>
                {
                    isMobileMode ? <HamburgerMenu isFilter={this.props.filter.isFilter} setIsFilter={this.props.setIsFilter} />
                        : <NavigationMenu isFilter={this.props.filter.isFilter} setIsFilter={this.props.setIsFilter} />
                }
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        filter: selectors.filterSelector(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setIsFilter: () => dispatch(setIsFilter())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);