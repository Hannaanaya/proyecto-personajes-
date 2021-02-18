import React from 'react'
import './style/BadgesBox.css';

const BadgesBox = ({ title, children }) => (
    <div className="BadgesBox">
      <h2 className="BadgesBox_title">{title}</h2>
      <div className="BadgesBox_container">
        <div className="row aling-items-center">
          <div className="col -sm-auto col-md col-lg">
          <div className="BadgesBox_boxing">
            { children }
          </div>
          </div>
        </div>
      </div>
    </div>
  );

export default BadgesBox;