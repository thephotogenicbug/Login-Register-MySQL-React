import React,{Component} from 'react';
import './login.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Register extends Component{
    constructor(){
        super();
        this.state={
          uname:'',
          email:'',
          password:'',
          mobile:'',
          message:''   
        }
    }

    processName = (obj) =>{
        this.setState({
            uname:obj.target.value
        })
    }
    processEmail = (obj) =>{
        this.setState({
            email:obj.target.value
        })
    }
    processPassword = (obj) =>{
        this.setState({
            password:obj.target.value
        })
    }
    processContact = (obj) =>{
        this.setState({
            mobile:obj.target.value
        })
    }
    
    save = () =>{
        var url = "http://localhost:2222/register";
        var jsonData = {
            "uname":this.state.uname, 
            "email":this.state.email,
            "password":this.state.password,
            "mobile":this.state.mobile,
           
         };
        axios.post(url , jsonData).then(response=>{
            this.setState({
                message:response.data
            })
       
        })
     }




    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <p className="text-center text-success"> {this.state.message}</p>
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
                                    onChange={this.processName}/>
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Email-ID</label>
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.processEmail}/>
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Password</label>
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.processPassword}/>
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Contact No</label>
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.processContact} />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                            <button className="btn" onClick={this.save}>
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