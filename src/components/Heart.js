import React from 'react';

import HeartJC from './HeartJC';
import './style/Heart.css';

class Heart extends React.Component {
    render() {
        return(
          <div class="tweet-box">
            <div class="like" id="like">
                <HeartJC />
            </div>
          </div>
        )
    }
}

export default Heart;