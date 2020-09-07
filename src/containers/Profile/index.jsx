import React from 'react';
import { connect } from 'react-redux';
import { getJogs } from '../../redux/thunks/jogs';
import { getUser } from '../../redux/thunks/user';
import * as selectors from '../../redux/selectors';
import Jog from '../../components/Jog';
import WithoutJogs from '../../components/EmptyJogs';
import add from '../../assert/img/add.png';
import './style.css';
import moment from 'moment';
import Picker from '../../components/Picker';

class JogsPage extends React.Component {

    state = {
        startDate: new Date(0),
        endDate: new Date(),
        isMobileMode: true,
    };

    componentDidMount() {
        this.props.getUser('hello');
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
        window.innerWidth < 600 ? this.setState({ isMobileMode: true })
            : this.setState({ isMobileMode: false });
    };


    handelCreate = (...arg) => {
        (typeof arg[0] === 'object') ? this.props.history.push('/edit-jogs') :
            this.props.history.push(`/edit-jogs/${arg[0]}`);
    };

    handelChangeDate = (name, value) => this.setState({ [name]: value });

    getFilteredJogs = () => {
        const { jogs } = this.props;
        if (!jogs.length) { return jogs; }
        const { startDate, endDate } = this.state;
        return jogs.filter(jog => new Date(jog.date) > new Date(startDate)
            && new Date(jog.date) < new Date(endDate));
    }

    renderJogs = jogs => {

        if (!jogs.length) return [];
        return jogs.map(jog =>
            <Jog time={jog.time}
                speed={(jog.distance / jog.time).toFixed(2)}
                distance={jog.distance.toFixed(2)}
                date={moment(jog.date).format('DD.MM.YYYY')}
                id={jog.id}
                handelCreate={this.handelCreate}
                key={jog.id}
            />
        )
    };

    render() {
        const { isFilter } = this.props.filter;
 
        const { isMobileMode } = this.state;
        let jogsForRender = [];
        console.log(isMobileMode || isFilter)
        // if (this.props.jogs.length === 0) {
            jogsForRender = <WithoutJogs handelCreate={this.hendleCreate} />;
        // } else {
        //     const filtredJogs = this.getFilteredJogs();
    
        //     jogsForRender = this.renderJogs(filtredJogs);  
        //   if (jogsForRender.length === 0) {
        //         jogsForRender = <p>You don't have jogs for this period</p>
        //     }
        // }

        return (
            <div>
                {isFilter ?
                    <Picker
                        handelChangeDate={this.handelChangeDate}
                    /> : null
                }<div className={`jogs-container
                ${isFilter ? 'isFilter' : ''}`}>
                    {jogsForRender}
                </div>

                <button className={`create-jog ${isMobileMode ? 'modile-create-jog' : 'desktop-create-jog'}`} onClick={this.handelCreate}><img src={add} alt={'Add jogs'} /></button>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const { user, jogs } = state;
    return {
        user: selectors.userSelector(user),
        jogs: selectors.jogsSelector(jogs),
        filter: selectors.filterSelector(state)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser()),
        getJogs: userId => dispatch(getJogs(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JogsPage)