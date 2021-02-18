import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style/Homes.css';
import M from '../images/M.gif';

export default class Home extends Component {
    render() {
      return (
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className="Home__col col-12 col-md-6">
                <img src={M} className="img-fluid mb-2"/>
                
              </div>
              <div className="Home__col col-12 col-md-6">
              <h1>¡¡¡Hi!!!</h1>
                <Link className="btn btn-primary" to="/badges">
                  <h2>Ver</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }