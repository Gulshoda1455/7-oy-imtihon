import axios from "axios";
import { useEffect, useState } from "react";


function useGetProducts() {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        async function getProducts(){
                try{
                 const url = import.meta.env.VITE_BACKEND_URL;
                 const response = await axios.get(`${url}/api/products`);
                 if(response.data) setProducts(response.data);
                } catch(err){
                 console.log(err);
                }
         }
         getProducts()
       },[])
       
       return products;
       
}

export default useGetProducts