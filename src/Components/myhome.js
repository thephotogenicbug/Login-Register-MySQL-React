import React,{useState, useEffect} from 'react';
import Apple from './apple.jpg';
import {Link} from 'react-router-dom'
const MyHome = () =>{
const [product, updateProduct] = useState([]);

      const getProduct = () =>{
      const url = 'http://localhost:2222/products';
      fetch(url)
      .then(response => response.json())
      .then(allproduct => updateProduct(allproduct))
  }

  useEffect(() =>{
   getProduct();  // pass in const function inside useEffect to avoid infinite call and file from crashing
  },[])

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
                <Link className="nav-link active" aria-current="page" to='/register'><i className="fa fa-shopping-cart"></i> Cart Item</Link>
            </li>  
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/login'><i className="fa fa-lock"></i> Vendor Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'><i className="fa fa-user-plus"></i> Vendor Register</Link>
            </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="container mt-5">
            <div className="row text-center">
                {
                    product.map((product, index)=>{
                        return(
                            <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 mt-5" key={index}>
                                <div className="border rounded p-3">
                                    {/* <img src={Apple} className="img-fluid" style={{background:'transparent'}} /> */}
                                    <h4>  {product.name}  </h4>
                                    <p> {product.details} </p>
                                    <p> Rs. {product.price}   </p>
                                    <button className="btn btn-primary">
                                        Add to Cart <i className="fa fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )

}
export default MyHome;