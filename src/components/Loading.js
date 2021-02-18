import React from 'react';

import carga from '../images/loader.gif';
import './style/Loading.css';

class Loading extends React.Component {
    render() {
        return(
            <div className="Loading">
                <img src={carga} width="150px" height="150px"/>
            </div>
        )
    }
};

export default Loading;