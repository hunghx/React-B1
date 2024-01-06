import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import { Container, NavbarBrand, Navbar, Nav, Button } from 'react-bootstrap'
import Product from './components/Product'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'
import { ClipLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import SignUp from './components/auth/SignUp'
const isActiveStyle = ({ isActive }) => ({
    color: isActive ? "Yellow" : "Black",
    backgroundColor: isActive ? "red" : "white"
})
const  cSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Router = () => {
    const isLoading = useSelector(state=>state.student.isLoading)

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

            {/* Loding */}
            <ClipLoader
                color={"#ffffff"}
                loading={isLoading}
                cssOverride={cSSProperties}
                size={250}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {/* định nghĩa bộ định tuyến */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/product/:id' element={<Profile />} />
                <Route path='/student/add' element={<AddStudent />} />
                <Route path='/student/edit/:id' element={<EditStudent />} />
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>


            {/* <Button onClick={()=>{
                navigate("/profile")
            }}>Send</Button> */}
        </div>
    )
}

export default Router
