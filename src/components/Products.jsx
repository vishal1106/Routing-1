import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
 const [product ,setProduct]=useState([])
 useEffect(()=>{
    const fetchproduct= async()=>{
        let r= await fetch("http://localhost:8080/products")
         let d=await r.json();
         setProduct(d)
        
    }
    fetchproduct();
 },[])
   

 
 
 
    return (
    <div>Products
    
     <div>
     <div style={{display:"flex", justifyContent:"space-around"}}>
       <div>Product Name</div>
       <div>Price</div>
       <div> More Details</div>
     </div>
       {
         product.map((p)=>(
           <div >
             <Link to={`/product/${p.id}`}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>{p.name}</div>
            <div>{p.price}</div>
            <Link to={"/product"}> <div>More Details </div></Link>
             </div>  
               
           </Link>
               
           </div>
         ))
       }
     </div>
        <Outlet/>
    </div>

  )
}

export default Products