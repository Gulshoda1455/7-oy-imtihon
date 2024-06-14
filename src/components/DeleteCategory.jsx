import { Button } from "antd"
import { deleteCategory } from "../api"


function DeleteCategory({categoryId}) {
    const handleDelete = async()=>{
        const isAgree = confirm("Are you agree to delete product")
        if(isAgree){
          const response = await deleteCategory(categoryId)
          console.log(response);
          if(response){
            alert("Product delete");
          }
        }
    }
  return (
    <div>
        <Button onClick={handleDelete} type="primary">Delete</Button>
    </div>
  )
}

export default DeleteCategory