import React from 'react';
import {connect} from "react-redux";
import {getJogs, getUser} from '../../store/thunks'
import * as selectors from '../../store/selectors'
import Jog from "../compoments/Jog/Jog";
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/date-fns';
import WithoutJogs from "../compoments/WithoutJogs/WithoutJogs";

class JogPage extends React.Component {
    state = {
        startDate: new Date(0),
        endDate: new Date()
    };

    componentDidMount() {
        this.props.getUser('hello');
    };

    handelCreate =(...arg)=>{
        console.log(arg)
        arg[0]===undefined ? this.props.history.push('/create-jog') :
        this.props.history.push(`/update-jog/${arg[0]}`);
    };

    handelChangeStartPicker = date => {
        this.setState({
            startDate: date
        } )
    };
    handelChangeEndPicker = date => {
        this.setState({
            endDate: date
        });
    };

    render() {
        let allJogs = [];
        if(this.props.jogs) {
            for (let i = 0; i < this.props.jogs.length; i++) {
                let el = this.props.jogs[i];
                if (el.date > this.state.startDate.getTime() && el.date < this.state.endDate.getTime()) {
                    let date = new Date(el.date).toString();
                    date = getMonth(date.substr(4, 3), date.substr(8, 2), date.substr(11, 4));
                    allJogs.push(<Jog time = {el.time}
                                      speed = {(el.distance / el.time).toFixed(2)}
                                      distance = {el.distance.toFixed(2)}
                                      date = {date}
                                      id = {el.id}
                                      handelCreate = {this.handelCreate}
                                  />);
                }
            }
            if(this.props.jogs.length===0){
                allJogs = <WithoutJogs handelCreate={this.hendleCreate}/>;
            }
            if(allJogs.length===0) {
                allJogs = <p>You don't have jogs for this period</p>
            }
        }

        return(
            <section>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker className={'pick'}
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={this.state.startDate}
                            onChange={this.handelChangeStartPicker}
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            // label="Date at"
                            value={this.state.endDate}
                            onChange={this.handelChangeEndPicker}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                {allJogs}
                <button onClick={this.handelCreate}> </button>
            </section>

        );
    }
}
function  getMonth(monthStr, dayStr, yearStr) {
   let month = new Date(monthStr+'-1-01').getMonth()+1;
   if( month.toString().length === 1) month ='0' + month;
    return  `${dayStr}.${month}.${yearStr}`
}

const mapStateToProps = (state) => {
    return {
        user: selectors.userSelector(state),
        jogs: selectors.jogsSelector(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser()),
        getJogs: (userId) => dispatch(getJogs(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JogPage)