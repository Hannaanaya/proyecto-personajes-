import React from 'react';
import e from '../images/error.jpg';
import './style/Error.css';

class Error extends React.Component {
    render() {
        return (
            <div className="Error">
              <img src={e} width="500px" />
            </div>
        )
    }
};

export default Error;