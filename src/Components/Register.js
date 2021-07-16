import React,{Component} from 'react';
import './login.css'
import {Link} from 'react-router-dom';
class Register extends Component{


    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card mt-5">
                            <div className="card-header">
                            <span className="text-danger">
                                <i className="fas fa-user-plus "></i> Register
                            </span> 

                            <Link to="/login" style={{textDecoration:'none'}}>
                            <span className="text-warning" >
                                <i className="fas fa-user-plus"></i> Already Register ?
                            </span>
                            </Link>

                            </div>
                            <div className="card-body">
                                <div className="form-group m-1 mb-2">
                                    <label>Full Name</label>
                                    <input type="text" 
                                    className="form-control"
                                    />
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Email-ID</label>
                                    <input type="text" 
                                    className="form-control"
                                    />
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Password</label>
                                    <input type="text" 
                                    className="form-control"
                                    />
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Contact No</label>
                                    <input type="text" 
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                            <button className="btn">
                                <i className="fas fa-user-plus"></i> Register 
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
export default Register