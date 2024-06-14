
import { Card, Input,Button, Flex} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import styles from "./styles.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Login() {

  const navigate = useNavigate();

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = async ()=>{
    try{
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/api/auth`,
      {
          email:email,
          password:password
      })
      if(response.data){
          localStorage.setItem("token", response.data);
          navigate("/"); 
      }
      
    } catch(error){
      alert("Foydalanuvchi email yoki parol xato");
      console.log("Xatolik yuz berdi", error);
    }
      
  }

  return (
    <div className={styles.root}>
   <Card hoverable title="Login" bordered={false} style={{ width: 300 }}>
       <form action="">
        <Flex gap="middle" vertical>
          <div>
          <Input 
              placeholder="Email"
               value={email} 
               onChange={(evt)=>{
               setEmail(evt.target.value)
             }}
          />

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
             <Button onClick={handleSubmit} type="primary">Login</Button>
          </div>
        </Flex>
       
       </form>
  </Card>
    </div>
  )
}

export default Login;