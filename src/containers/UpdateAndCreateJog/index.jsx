import React from 'react';
import { connect } from 'react-redux';
import { createJog, updateJog } from '../../redux/thunks/jogs';
import { getUser } from '../../redux/thunks/user';
import * as selectors from '../../redux/selectors';
import './style.css';
import { Formik, Form, Field } from 'formik';
import cancel from '../../assert/img/cancel.png';

class UpdateAndCreate extends React.Component {
    constructor(props) {
        super(props);
        this.idJog = this.props.location.pathname;
    };

    handelCancel = () => {
        this.props.history.push('/jog')
    };

    isEmpty = obj => {
        for (let key in obj) {
            return false;
        }
        return true;
    }


    handelSave = async data => {
        console.log(data)

        const { updateJog, createJog, user, location } = this.props;
        const url = location.pathname;
        if (this.isEmpty(this.props.user)) {
            await this.props.getUser('hello');
        }
        if (url.startsWith('/edit-jogs/')) {
            data.user_id = user.id;
            data.jog_id = url.replace(/\/.*\//, '');
            updateJog(data);
        } else {
            createJog(data);
        }
        this.props.history.push('/jog')
    };

    render() {
        return (
            <section className='updateForm'>
                <button className='backButton' onClick={this.handelCancel}><img className='cancel' alt='cancel' src={cancel} alr={'cancel'} /></button>
                <Formik
                    initialValues={{
                        distance: '',
                        date: '',
                        time: ''
                    }}
                    onSubmit={(values) => { this.handelSave(values) }}
                >
                    {({ handleSubmit, handleChange, isValidating, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className='field first'>
                                <span className='fieldName'>Distance</span>
                                <Field className="input" type="number" min='0' name="distance" onChange={handleChange} required />
                            </div>
                            <div className='field'>
                                <span className='fieldName'>Time</span>
                                <Field className="input" type="number" min='0' name="time" onChange={handleChange} required />
                      
                            </div>
                            <div className='field'>
                                <span className='fieldName'>Date</span>
                                <Field className="input" type='text' required name="date"
                                    onChange={handleChange}
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type = 'text'} /></div>
                            <div className='buttonContainer'><button className="saveButton bold" type="submit"> Save </button></div>
                        </Form>
                    )}
                </Formik>
            </section>

        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user: selectors.userSelector(user)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser()),
        createJog: jog => dispatch(createJog(jog)),
        updateJog: jog => dispatch(updateJog(jog))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAndCreate)