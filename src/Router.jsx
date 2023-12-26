import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import { Container, NavbarBrand, Navbar, Nav, Button } from 'react-bootstrap'
import Product from './components/Product'
const isActiveStyle=({isActive})=>({
    color: isActive?"Yellow":"Black",
    backgroundColor: isActive?"red":"white"
})

const Router = () => {

    const navigate = useNavigate();
    return (
        <div>
            {/* điều hướng theo đường dẫn */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink style={isActiveStyle} to={"/"}>Home</NavLink>
                        <NavLink style={isActiveStyle} to={"/about"}>About</NavLink>
                        <NavLink style={isActiveStyle} to={"/profile"}>Profile</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            {/* định nghĩa bộ định tuyến */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/product/:id' element={<Profile/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>


            <Button onClick={()=>{
                navigate("/profile")
            }}>Send</Button>
        </div>
    )
}

export default Router
