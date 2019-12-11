import React from 'react';
import {connect} from "react-redux";
import {createJog, getUser, updateJog} from '../../../store/thunks'
import * as selectors from '../../../store/selectors'
import UpdateAndCreateJogStyle from './UpdateAndCreateJog.css'
import { Formik } from 'formik';

class UpdateAndCreate extends React.Component {
    constructor(props) {
        super(props);
        this.idJog =this.props.location.pathname;
        if(this.props.user===undefined){
            this.props.getUser('hello');
        }
    };

    handelCancel = () => {
        this.props.history.push('/jog')
    };

    handelSave = data => {
        if(this.idJog.indexOf('update',1) === 1){
            data.user_id=this.props.user.id;
            data.jog_id= this.idJog.substr(12);
            this.props.updateJog(data);
        } else this.props.createJog(data);
        this.props.history.push('/jog')
    };

    render() {
        return(
            <section className='updateForm'>
                <button className='backButton' onClick={this.handelCancel}><img className='cancel' alr={'cancel'}/></button>
                <Formik
                    initialValues={{
                        distance: 0,
                        date: '',
                        time: 0
                    }}
                    onSubmit={(values) => { this.handelSave(values) }}
                >
                    {({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='field first'><span className='fieldName'>Distance</span> <input className="input" name="distance" onChange={handleChange} /></div>
                            <diV className='field'>   <span className = 'fieldName'>Time</span>  <input className="input"  name="time"  onChange={handleChange} /></diV>
                            <div className='field'>  <span className = 'fieldName'>Date</span>  <input className="input" name="date" onChange={handleChange} /></div>
                            <div className='buttonContainer'><button className="saveButton" type="submit"> Save </button></div>
                        </form>
                    )}
                </Formik>
            </section>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: selectors.userSelector(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser()),
        createJog:(jog) => dispatch(createJog(jog)),
        updateJog: (jog) => dispatch(updateJog(jog))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAndCreate)