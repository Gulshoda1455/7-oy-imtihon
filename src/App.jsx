import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Categories from './assets/pages/Categories'
import Products from './assets/pages/Products'
import GeneralLayout from './assets/pages/GeneralLayout'
import './App.css';
import Login from './assets/pages/Auth/Login'
import Register from './assets/pages/Auth/Register'


function App() {
  

  return (
    <>
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<GeneralLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='/category' element={<Categories/>}/>
             <Route path='/products' element={<Products/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

