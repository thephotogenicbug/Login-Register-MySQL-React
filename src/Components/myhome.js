import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const MyHome = () =>{

      //get product list
      const [product, updateProduct] = useState([]);
      const getProduct = () =>{
      const url = 'http://localhost:2222/product';
      fetch(url)
      .then(response => response.json())
      .then(allproduct => updateProduct(allproduct))
  }


  // always use useEffect
  useEffect(() =>{
   getProduct();  // pass in const function inside useEffect to avoid infinite call and file from crashing  and on load get product details 
   getCart();
  },[])


  // get function functional component get cart item
    const[cartitem, updateCart] = useState([]);  // get cart length
    const getCart = () =>{
    const url = 'http://localhost:2222/cartitem';
    fetch(url)
    .then(response => response.json())
    .then(result => updateCart(result))
  }


  // post function functional component add to cart
    const[message, updateMessage] = useState("");
    const addTocart = (iteminfo) =>{
    axios.post("http://localhost:2222/addtocart", iteminfo)
    .then(response =>{
        // alert(response.data);
        updateMessage(response.data); 
        getCart() // cart should get refresh
       
    })
    // console.log(iteminfo)
  }

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
                <Link className="nav-link active" aria-current="page" to='/cart'><i className="fa fa-shopping-cart"></i> ({cartitem.length}) Cart Item</Link>
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
                {
                    product.map((product, index)=>{
                        return(
                            <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3 mt-5" key={index}>
                                <div className="card p-3">
                                   <div className="card-body">
                                    <img  src={product.photo} className="img-fluid"   />
                                    <h4>{product.name}  </h4>
                                    <label> {product.details} </label>
                                    <p> Rs. {product.price}   </p>                      {/* product is holding product details */}
                                    <button className="btn btn-primary" onClick={addTocart.bind(this, product)}>
                                        Add to Cart <i className="fa fa-shopping-cart"></i>
                                    </button>
                                   </div>
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