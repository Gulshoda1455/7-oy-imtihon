import axios from "axios";
import { useEffect, useState } from "react";


function useGetCategory() {
    const [category, setCategory]= useState([])
    useEffect(()=>{
        async function getCategory(){
                try{
                 const url = import.meta.env.VITE_BACKEND_URL;
                 const response = await axios.get(`${url}/api/categories`);
                 console.log(response.data);
                 if(response.data){
                    setCategory(response.data);
                 } else{
                    console.log("Malumot topilmadi");
                 }
                } catch(err){
                 console.log(err);
                }
         }
         getCategory()
       },[])
       console.log(category);
       return category;

}

export default useGetCategory