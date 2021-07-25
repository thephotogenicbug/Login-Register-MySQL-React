import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyOrder = () =>{
    
    // fetch function 
    const[orderlist, updateOrder] = useState([]);
    const getOrder = () =>{
        var input ={"vid":localStorage.getItem("id")};
        var url = "http://localhost:2222/vendororder";
        axios.post(url,input)
        .then(response => updateOrder(response.data))
    }
    useEffect(()=>{
        getOrder();
    },[])

   
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><i className="fa fa-shopping-cart"></i> React Shopping</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                    <li  className="nav-item">
                            <Link  to='/myorder' className="nav-link" >   
                                    <i className="fa fa-suitcase"></i> Myorders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={Logout}>
                                Welcome - {localStorage.getItem("name")}   
                                  <span className="m-3">
                                    <i className="fa fa-power-off text-danger"></i> Logout
                                  </span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
              {/* use container-fluid to take full width */}
            <div className="container-fluid mt-5 pt-4"> 
              <div className="row">
                  <div className="col-md-12 mt-1 pt-2">
                      <h4 className="text-center text-primary">MyOrder List </h4>
                      <p className="text-center text-primary">Total Available Orders :- {orderlist.length}</p>
                     <table className="table table-sm table-bordered  text-center">
                      <thead className="text-primary">
                      <tr>
                          <th>Customer Name</th>
                          <th>Customer Mobile</th>
                          <th>Customer Address</th>
                          <th>Product Name</th>
                          <th>Product Price</th>
                          <th>Product Quantity</th>
                          <th>Product Details</th>
                          {/* <th>Photo</th> */}
                          <th>Order Date</th>
                      </tr>
                      </thead>
                      <tbody>
                          {
                              orderlist.map((xproduct, index)=>{
                                  return(
                                     <tr key={index}>
                                          <td>{xproduct.customername}</td>
                                          <td>{xproduct.mobile}</td>
                                          <td>{xproduct.address}</td>
                                          <td>{xproduct.name}</td>
                                          <td>{xproduct.price}</td>
                                          <td>{xproduct.qty}</td>
                                          <td>{xproduct.details}</td>
                                          {/* <td><img src={xproduct.photo} className="img-fluid"/></td> */}
                                          <td>{xproduct.orderdate}</td>
                                     </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
                </div>
              </div>
              <div className="row ">
               
              </div>
            </div>
        </>
    )
}

const Logout = ()=>{
    localStorage.clear();
    window.location.href="http://localhost:3000/#/";
    window.location.reload();
}
export default MyOrder;