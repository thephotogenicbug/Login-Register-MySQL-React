import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
const Home = () =>{


    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="fa fa-building"></i> Server Side Register & Login</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home.html"><i className="fa fa-home"></i> Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="services.html"><i className="fa fa-tools"></i> Our Services</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="row mt-5">
              <div className="col-lg-12 mt-5 text-center">
              <h2>Welcome : {localStorage.getItem("name")}</h2>
              <Link className="btn btn-primary" onClick={Logout}> Logout </Link>
              </div>
           
            
          </div>
          
          </>
       
    )
}

const Logout = () => {
    localStorage.clear();
    window.location.href="http://localhost:3000/#/login"
    window.location.reload();
}
export default Home