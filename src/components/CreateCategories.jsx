import { Button, Modal } from "antd"
import { useState } from "react";
import { createCategory } from "../api";
import CategoryForm from "./CategoryForm";


function CreateCategories() {
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
   const response = await createCategory(productForm)
   if(response){
    alert("Successfully product")
   }
   handleOk();
    }
  return (
    <div>
        <Button onClick={showModal} type="primary">Create</Button>
        <Modal title="Create product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <CategoryForm onSubmit={handleCreate}/>
      </Modal>
    </div>
  )
}

export default CreateCategories