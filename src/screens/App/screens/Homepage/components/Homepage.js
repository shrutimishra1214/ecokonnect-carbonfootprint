import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../../shared/stylesheet/app.css';
import earthbg from '../images/earthbg.jpg';

/** Home page shows button to start the questionnaire */

const Homepage = () => {
  const style = {
    backgroundImage: `url(${earthbg})`,
    backgroundSize: 'auto',
    height: '90vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
  };

  return (
    <div className="Homepage" style={style}>
      <div className="container header">
        <h2 className="Homepage-header">
          Welcome to Carbon Footprint Calculator
        </h2>
        <div className="d-flex justify-content-center">
          <Link to="/household1" className="btn btn-warning text-center stepBtn">
            For Individuals
          </Link>
          </div>
          <div className="d-flex justify-content-center">
            <a to="/household1" className="btn btn-warning text-center stepBtn1">
            For Organisations
          </a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="https://mlco2.github.io/impact/" className="btn btn-warning text-center stepBtn2">
            For Coders
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
