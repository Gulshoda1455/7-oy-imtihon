import { Card, Input,Button, Flex} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import styles from "./styles.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Register() {
    const navigate = useNavigate();
  
    const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = async ()=>{
    try{
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/api/register`,
      {
          name:name,
          email:email,
          password:password
      })
      if(response.data){
          localStorage.setItem("token", response.data);
          navigate("/login"); 
      }
      
    } catch(error){
      alert("Ushbu foydalanuvchi avval ro'yhatdan o'tgan");
      console.log("Xatolik yuz berdi", error);
    }
      
  }
  return (
    <div className={styles.root}>
   <Card hoverable title="Register" bordered={false} style={{ width: 300 }}>
       <form action="">
        <Flex gap="middle" vertical>
        <div>
          <Input 
          placeholder="Name" 
          value={name} 
               onChange={(evt)=>{
               setName(evt.target.value)
             }}
          />
          </div>
          <div>
          <Input placeholder="Email"
          value={email} 
          onChange={(evt)=>{
          setEmail(evt.target.value)
        }} />
          </div>
          <div>
             <Input.Password
              placeholder="Password"
              value={password} 
               onChange={(evt)=>{
               setPassword(evt.target.value)
             }}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
          <div>
             <Button onClick={handleSubmit} type="primary">Register</Button>
          </div>
        </Flex>
       
       </form>
  </Card>
    </div>
  )
}

export default Register;