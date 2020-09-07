import React from 'react';
import './style.css';

class Picker extends React.Component {
    render() {
        const { handelChangeDate } = this.props;
        return (
            <div className='picker-container'>
                <span className='date-name'>Date from</span>
                <input type='text' className='date start'
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                    onChange={(e) => handelChangeDate('startDate', e.target.value)}
                />
                <span className='date-name'>Date to</span>
                <input type='text' className='date end'
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) =>  e.target.type = 'text'}
                    onChange={(e) => handelChangeDate('endDate', e.target.value)}
                />
            </div>
        );
    }
}

export default Picker;