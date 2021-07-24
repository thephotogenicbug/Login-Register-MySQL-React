import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const Home = () =>{
    const[product, getProduct] = useState([]);
    const[name , pickName] = useState("");
    const[price , pickPrice] = useState("");
    const[qty , pickQty] = useState("");
    const[details , pickDetails] = useState("");
    // const[photo , pickPhoto] = useState("");
    const[message , updateMessage] = useState("Please Enter Product Information");


    const FetchProduct = () =>{
        // fetch("http://localhost:2222/vendorproduct")
        // .then(response=> response.json())
        // .then(result => getProduct(result))
        var input ={"vid":localStorage.getItem("id")};
        var url = "http://localhost:2222/vendorproduct";
        axios.post(url,input)
        .then(response => getProduct(response.data))
    }
    useEffect(()=>{
        FetchProduct();
    },[])
   

    const save = () =>{
        var vid = localStorage.getItem("id"); // vendor id
        var input = { "pname":name , "pprice":price, "pqty":qty, "pdetails":details, "vid":vid};
        var url = "http://localhost:2222/saveproduct";
        axios.post(url , input).then(response=>{
            updateMessage(response.data);
            FetchProduct(); 
            pickName(""); // to clear the text-box after onclick
            pickPrice(""); 
            pickQty(); 
            pickDetails(""); 
            // pickPhoto("");
        })
    }

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
            <div className="container mt-5 pt-4">
              <div className="row">
                  <div className="col-lg-3">
                      <h4 className="text-center"> Add New Product </h4>
                      <p className="text-center text-danger"> {message} </p>
                    <div className="mb-3">
                        <label>Enter Product Name </label>
                        <input type="text" className="form-control" value={name}
                         onChange={obj=>pickName(obj.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label>Price / Unit </label>
                        <input type="text" className="form-control" value={price}
                        onChange={obj=>pickPrice(obj.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label>Product Quantity </label>
                        <input type="text" className="form-control" value={qty}
                        onChange={obj=>pickQty(obj.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label>Product Description </label>
                        <textarea className="form-control" value={details}
                        onChange={obj=>pickDetails(obj.target.value)}></textarea>
                    </div>
                     {/* <div className="mb-3">
                        <label>Photo url</label>
                        <textarea className="form-control" value={photo}
                        onChange={obj=>pickPhoto(obj.target.value)}></textarea>
                    </div> */}
                    <div className="text-center">
                        <button className="btn btn-warning" onClick={save}> 
                        Save Product 
                        </button>
                    </div>
                  </div>
                  <div className="col-md-9 mt-1 pt-2">
                      <h4 className="text-center text-primary">Product List  </h4>
                      <p className="text-center text-primary">Total Available Products :- {product.length}</p>
                     <table className="table table-sm table-bordered  text-center">
                      <thead className="text-primary">
                      <tr>
                          <th>Product Name</th>
                          <th>Product Price</th>
                          <th>Product Quantity</th>
                          <th>Product Description</th>
                      </tr>
                      </thead>
                      <tbody>
                          {
                              product.map((xproduct, index)=>{
                                  return(
                                     <tr key={index}>
                                          <td>{xproduct.name}</td>
                                          <td>{xproduct.price}</td>
                                          <td>{xproduct.qty}</td>
                                          <td>{xproduct.details}</td>
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
export default Home;