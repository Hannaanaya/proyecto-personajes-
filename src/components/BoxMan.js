import React, { Component } from 'react';
import Image from './Image';
import './style/BoxMan.css';
import Jack from '../images/man/Jack.jpeg';
import J1 from '../images/man/j (1).jpeg';
import J2 from '../images/man/j (1).jpg';
import J3 from '../images/man/j (2).jpeg';
import J4 from '../images/man/j (3).jpeg';
import J5 from '../images/man/j (4).jpeg';
import J6 from '../images/man/j5.jpg';
import Andre from '../images/man/André.jpg';
import A1 from '../images/man/A1.jpg';
import A2 from '../images/man/A2.jpg';
import A3 from '../images/man/A3.jpg';

class BoxMan extends Component {
    render() {
        return (
            <div className="Box_man">
                <div className="Boxman_container">
                <h2>André</h2>
                    <div className="Box">
                        <Image src={Andre} />
                        <Image src={A1} />
                        <Image src={A2} />
                        <Image src={A3} />
                    </div>
                    <h2>Jack</h2>
                    <div className="Box">
                        <Image src={Jack} />
                        <Image src={J1} />
                        <Image src={J2} />
                        <Image src={J3} />
                        <Image src={J4} />
                        <Image src={J5} />
                        <Image src={J6} />
                    </div>
                </div>
            </div>
        )
    }
};

export default BoxMan;