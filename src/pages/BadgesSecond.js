import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BoxWoman from '../components/BoxWoman';
import BoxMan from '../components/BoxMan';
import './style/BadgesSecond.css';

class BadgesSecond extends React.Component {
render() {
        return (
            <div className="BadgesSecond">
                <Header />

                <div className="BadgesSecond_container">
                  <div className="BadgesSecond_button">
                  <Link className="btn btn-primary" to="/badges">
                    <h4>Volver</h4> 
                  </Link>
                  </div>
                  <div className="row">
                <div className="col-6">
                    <h1 className="text-center">Personajes femeninos</h1>
                    <BoxWoman />
                </div>
                <div className="col-6">
                    <h1 className="text-center">Personajes masculinos</h1>
                    <BoxMan />
                </div>
                </div>
                </div>
            </div>
        )
    }
};

export default BadgesSecond;