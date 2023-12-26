import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProduct from './components/ListProduct'
import Router from './Router'
  
export const ThemeContext = createContext(); // tạo ngữ cảnh


function App() {
  // Usestate - hook dùng để quản lí trang thái của 1 components
  const [product, setProduct] = useState({
    id: 1,
    name:"Sản phẩm A",
    imgUrl:"data:image/jpeg;base64,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",
    price: 100000
  }); // destructoring của mảng


  const handleChangeProductInfo= ()=>{
    // thực hiện thay đổi thông tin
    setProduct({...product, imgUrl:"https://i.pinimg.com/736x/80/63/6e/80636ed6c9de5088bf024275065557ec.jpg",
      price: 9999})
  }

  return (
    <ThemeContext.Provider value={product}>
      {/* <Product productInfo={product} /> */}
      {/* <Button variant="primary" onClick={handleChangeProductInfo}>Primary</Button> */}

          {/* <ListProduct change = {handleChangeProductInfo}/> */}
          <Router/>
    </ThemeContext.Provider>
  )
}

export default App
