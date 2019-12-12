import React from 'react';
import NavBarStyle from './NavBar.css'
import filter from '../../../assert/img/filter-active.png'
import * as selectors from "../../../store/selectors";
import {getJogs, getUser, setDate} from "../../../store/thunks";
import {connect} from "react-redux";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.startDate='';
        this.endDate='';
    };

    handelClick = () =>{
        // if(this.startDate && this.endDate ){
            console.log(new Date(this.startDate).getTime().toString())
            this.props.setDate(new Date(this.startDate).getTime().toString(),
                new Date(this.endDate).getTime().toString());
        // } else
            console.log('dddd')
        // console.log(new Date(this.startDate));

    };

    render() {
        return(
            <React.Fragment>
                    <div className='navBar' id='n'>
                        <img className={'logo'} alt={'logo'}/>
                        <img className='mobile' src={filter} alt={'filter'} onClick={this.handelClick}/>
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
                        <img className='web' src={filter} alt={'filter'} onClick={this.handelClick}/>
                    </div>
                <div className='pickerContainer'>
                    <span id={'fieldDate'}>Date from</span>
                    <input type='text' className='date start'
                           onFocus={(e) => e.target.type='date'}
                           onBlur={(e)=>e.target.type='text'}
                           onChange={(e)=>this.startDate=e.target.value}
                    />
                    <span id={'fieldDate'}>Date to</span>
                    <input type='text' className='date end'
                           onFocus={(e) => e.target.type='date'}
                           onBlur={(e)=>e.target.type='text'}
                           onChange={(e)=> this.endDate= e.target.value}
                    />
                </div>
            </React.Fragment>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDate: (start, end) => dispatch(setDate(start, end))
    }
};

export default connect(null, mapDispatchToProps)(NavBar)