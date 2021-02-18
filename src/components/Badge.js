import React from 'react';

// import Exon from '../images/Exon.png';
import heart from '../images/heart.gif';
import './style/Badge.css';

const Badge = ({ cover, name, old, raza, title }) =>  (
    <div className="Badge">
        <div className="Badge__section">
            <img  className="Badge-photo" src={cover}  width="400" height="300" alt="Foto"/>
        </div>
        <div className="Badge-info">
            <ul className="list-unstyled">
                <li>
                    <p><strong>Nombre: </strong>{name}</p>
                </li>
                        
                <li>
                    <p><strong>Edad: </strong> {old}</p>
                </li>
                <li>
                    <p><strong>Raza: </strong> {raza}</p>
                </li>
             </ul>
        </div>
        <div className="Badge__footer">#{title} 
            <img src={heart} />
        </div>
    </div>
);

export default Badge;