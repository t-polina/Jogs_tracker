import React from 'react';
import {connect} from "react-redux";
import {createJog, updateJog} from '../../../store/thunks'
import * as selectors from '../../../store/selectors'


import { Formik } from 'formik';
import Button from "@material-ui/core/Button";
class UpdateAndCreate extends React.Component {
    constructor(props) {
        super(props);
        this.idJog =this.props.location.pathname;

    }
    componentDidMount() {


    }

    handelSave = data => {
        // console.log(data)
        // data.date =new Date(data.date).getTime().toString();

        // console.log(data)
        if(this.idJog.indexOf('update',1) === 1){
            data.user_id=this.props.user.id;
            data.jog_id= this.idJog.substr(12);
            this.props.updateJog(data);
        } else
        this.props.createJog(data);
    };

    render() {

        return(
            <section>
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
                            <input className="input" name="distance" onChange={handleChange} />
                            <input className="input"  name="date"  onChange={handleChange} />
                            <input className="input" name="time" onChange={handleChange} />
                            <Button type="submit" fullWidth variant="contained" color="primary"> Save </Button>
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
        createJog:(jog) => dispatch(createJog(jog)),
        updateJog: (jog) => dispatch(updateJog(jog))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAndCreate)