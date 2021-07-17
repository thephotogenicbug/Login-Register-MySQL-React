import React,{Component} from 'react';
import './login.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Login extends Component{
    constructor(){
        super();
        this.state={
            email :'',
            password:'',
            message:''
        }
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

    login = () =>{
        var url ="http://localhost:2222/login";
        var input ={"email": this.state.email, "password": this.state.password};
        axios.post(url, input)
        .then(response =>{
            if(response.data.id==""){
                this.setState({
                    message: "Invalid email and password "
                })
            } else{
                this.setState({
                    message: "Login Successfull please wait redirecting... "
                })
                localStorage.setItem("name" , response.data[0].name);
                localStorage.setItem("id" , response.data[0].id);
                window.location.href="http://localhost:3000/#/home"
                window.location.reload();
            }
            //    console.log(response.data)
        })
        //alert(this.state.email + this.state.password)
    }


    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                     <h2>  Server Side Register & Login </h2>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h5 className="text-primary text-center fw-bold-h1 mt-2"> {this.state.message} </h5>
                        <div className="card mt-5">
                            <div className="card-header"> 
                            <span className="text-danger">
                                <i className="fas fa-lock ">
                                    </i> Login
                            </span> 

                           <Link to="/" style={{textDecoration:'none'}}>
                           <span className="text-warning">
                                <i className="fas fa-user-plus">
                                    </i> New ? Register
                            </span> 
                           </Link>
                            </div>

                            <div className="card-body">
                                <div className="form-group m-1 mb-2">
                                    <label>Email-ID</label>
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.processEmail} 
                                    />
                                </div>
                                <div className="form-group m-1 mb-2">
                                    <label>Password</label>
                                    <input type="text" 
                                    className="form-control"
                                    onChange={this.processPassword} 
                                    />
                                </div>

                            </div>
                            <div className="card-footer text-center">
                                <button className="btn" onClick={this.login}>
                                    Login <i className="fas fa-arrow-circle-right"></i>
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
export default Login