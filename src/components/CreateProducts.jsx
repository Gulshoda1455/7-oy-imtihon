import { Button, Modal } from "antd"
import { useState } from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "../api";


function CreateProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleCreate= async (productForm)=>{
      
   const response = await createProduct(productForm)
   if(response){
    alert("Successfully product")
   }
   handleOk();
    }
  return (
    <div>
        <Button onClick={showModal} type="primary">Create</Button>
        <Modal title="Create product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ProductForm onSubmit={handleCreate}/>
      </Modal>
    </div>
  )
}

export default CreateProducts