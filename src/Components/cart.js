import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Cart = () =>{

  
  useEffect(() =>{ 
   getCart(); // pass in const function inside useEffect to avoid infinite call and file from crashing  and on load get product details 
  },[])


  // get cart item
    const[cartitem, updateCart] = useState([]);
    const getCart = () =>{
    const url = 'http://localhost:2222/cartitem';
    fetch(url)
    .then(response => response.json())
    .then(result => updateCart(result))
  }

  
    const[message, updateMessage] = useState("");

    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="fa fa-shopping-cart "></i> React Shopping App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse td" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'><i className="fa fa-home"></i> Home</Link>
            </li> 
            <li className="nav-item">                                                                                        
                <Link className="nav-link active" aria-current="page" to='/'><i className="fa fa-shopping-cart"></i> ({cartitem.length}) Cart Item</Link>
            </li>  
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/login'><i className="fa fa-lock"></i> Vendor Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/register'><i className="fa fa-user-plus"></i> Vendor Register</Link>
            </li>
            </ul>
            </div>
        </div>
        </nav>
        <br/>
        <p className="text-center text-primary mt-5"> {message}</p>
        <div className="container mt-5">
            <div className="row text-center">
               <div className="col-lg-4"></div>
               <div className="col-lg-8">
                   <h3>Items in Cart</h3>
                   <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Photo</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              cartitem.map((product, index)=>{
                                  return(
                                      <tr key={index}>
                                        <th>{product.name}</th>
                                        <th>{product.qty}</th>
                                        <th><img src={product.photo} height="50px"/></th>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                   </table>
               </div>
            </div>
        </div>
        </>
    )

}
export default Cart;