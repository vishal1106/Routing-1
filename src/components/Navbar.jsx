import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate =useNavigate()

  const handleproduct=(id)=>{
 if(id)
 {
     navigate(`/product/${id}`);
 }
  };
  
    return (
    <div>
        <Link  to="/"> Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
 <button onClick={()=>handleproduct(1)}>Go to product 1</button>
    </div>
  )
}

export default Navbar