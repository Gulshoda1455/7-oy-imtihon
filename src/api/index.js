import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;
export async function createProduct(data){
    try{
        const token = localStorage.getItem("token");
            if (!token) {
                alert("Foydalanuvchi tokeni topilmadi, iltimos qayta kiriting.");
                return;
            }

            const headers = {
                "Content-Type": "application/json",
                Authorization: token,
            };
        
    const response=await axios.post(`${url}/api/products`, data, {
        headers: headers,
    });
    return response;
    }catch(err){
        console.log(err);
    }
}
export async function getProductById(productId){
    try{  
    const response=await axios.get(`${url}/api/products/${productId}`);
    return response;
    }catch(err){
        console.log(err);
    }
}
export async function editProduct(data,productId){
    try{
        
    const response=await axios.put(`${url}/api/products/${productId}`, data);
    return response;
    }catch(err){
        console.log(err);
    }
}
export async function deleteProduct(productId){
    try{ 
        const token = localStorage.getItem("token");
            if (!token) {
                alert("Foydalanuvchi tokeni topilmadi, iltimos qayta kiriting.");
                return;
            }

            const headers = {
                "Content-Type": "application/json",
                Authorization: token,
            }; 
    const resonse=await axios.delete(`${url}/api/products/${productId}`,{
        headers: headers,
    });
    return resonse;
    }catch(err){
        console.log(err);
    }
}


export async function createCategory(data){
    try{
        
    const response=await axios.post(`${url}/api/categories`, data);
    return response;
    }catch(err){
        console.log(err);
    }
}

export async function getCategoryId(categoryId){
    try{  
    const response=await axios.get(`${url}/api/products/${categoryId}`);
    return response;
    }catch(err){
        console.log(err);
    }
}
export async function editCategory(data,categoryId){
    try{
        
    const response=await axios.put(`${url}/api/categories/${categoryId}`, data);
    return response;
    }catch(err){
        console.log(err);
    }
}

export async function deleteCategory(categoryId){
    try{  
    const response=await axios.delete(`${url}/api/categories/${categoryId}`);
   return response
    
    }catch(err){
        console.log(err);
    }
}