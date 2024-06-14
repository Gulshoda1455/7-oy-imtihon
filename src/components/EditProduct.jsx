import { Button, Modal } from "antd"
import { useState } from "react";
import ProductForm from "./ProductForm";
import {  editProduct, getProductById } from "../api";


function EditProduct({productId}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [singleProduct, setSingleProduct] = useState(null);
    const showModal =async () => {
      setIsModalOpen(true);
      const product = await getProductById(productId)
      setSingleProduct(product.data)
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleEdit= async (productForm)=>{
        const {_id, __v, ...product}= productForm;
   const response = await editProduct(product, productId)
   if(response){
    alert("Successfully editProduct")
   }
   handleOk();
    }
  return (
    <div>
        <Button onClick={showModal} type="primary">Edit</Button>
        <Modal title="Edit product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ProductForm onSubmit={handleEdit} initialValues={singleProduct}/>
      </Modal>
    </div>
  )
}

export default EditProduct