import { Button, Flex, Input } from "antd"

import { useEffect, useState } from "react"



const initialState={
        name:"",
        image:"",
        
      }


function CategoryForm({onSubmit, initialValues}) {
    const [prodForm, setProdForm] = useState( initialState)
    
     const handleChange = (evt)=>{
        const {name,value} = evt.target;
        setProdForm((prevForm)=>({...prevForm, [name]:value}))
     };
     const handleSubmit =()=>{
      onSubmit(prodForm)
     }
     useEffect(()=>{
    if(initialValues){
        setProdForm(initialValues)
     }

      return ()=>{
        setProdForm(initialState);
      }
     },[initialValues])

  return (
    <div>
       <form action="">
        <Flex vertical gap="middle">
              <div>
              <Input 
              placeholder="Name"
              name="name" 
              value={prodForm.name}
              onChange={handleChange}
              />
              </div>
            
              <div>
              <Input 
              placeholder="Image"
              name="image" 
              value={prodForm.image}
              onChange={handleChange}
              />
              </div>
            
              <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </Flex>
        </form> 
    </div>
  )
}

export default CategoryForm