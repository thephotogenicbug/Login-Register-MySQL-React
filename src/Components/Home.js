import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
const Home = () =>{


    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="fa fa-user"></i> Vendor Page</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse td" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'><i className="fa fa-home"></i> Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" onClick={Logout}>
                Welcome - {localStorage.getItem("name")} <i className="fa fa-power-off text-danger"></i> Logout
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
          <div className="container mt-5 pt-4">
            <div className="row">
                <div className="col-lg-3">
                    <div className="border p-4">

                    </div>
                </div>
                <div className="col-lg-9">
                    <h1>Welcome Back</h1>
                </div>
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