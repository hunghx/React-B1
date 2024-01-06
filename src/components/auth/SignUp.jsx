import React, { useEffect, useState } from 'react'
import { useDeferredValue } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { handleSignUp } from '../../redux/slices/authSlide';
const initState = {
    username : "",
    password : "",
    email : "",
    fullName : "",
    sex : true,
    birthday : "",
    avatarUrl : null,
}
const SignUp = () => {
    const [newUser , setNewUser] = useState(initState);

    const dispatch = useDispatch();

    const onChanngeInput = (e)=>{
        
        let prop  = e.target.id ;
        let value;
        if (prop === "avatarUrl"){
            value = e.target.files[0];
        }else{
         value = e.target.value;
        }
        setNewUser({...newUser,[prop]: value})
    }  
    let message = useSelector(state=>state.auth.message)

    console.log("newUsser ->>>>>",newUser);
    const handleSignUpForm = ()=>{
        // chuyển đổi obj thnaahf 1 đối tượng formData
        let formData = new FormData();
        for(let key in newUser){
            console.log(key);
            formData.append(key,newUser[key])
        }
        console.log("forrmData =>>>>>",formData);
        dispatch(handleSignUp(formData))
    }

    useEffect(()=>{
        if(message){
            alert(message)
            location.href="/";
        }
    },[message])


    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" id='username' value={newUser.username} onChange={e=>onChanngeInput(e)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id='password'  value={newUser.password} onChange={e=>onChanngeInput(e)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id ="email"  value={newUser.email} onChange={e=>onChanngeInput(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter fullName" id='fullName'  value={newUser.fullName} onChange={e=>onChanngeInput(e)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Sex</Form.Label>
                <Form.Select aria-label="" id='sex'  value={newUser.sex} onChange={e=>onChanngeInput(e)}>
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                </Form.Select>
            </Form.Group >
            <Form.Group className="mb-3" >
                <Form.Label>BirthDay</Form.Label>
                <input type="date" id = "birthday"  value={newUser.birthday} onChange={e=>onChanngeInput(e)}/> 
            </Form.Group >
            
            <Form.Group className="mb-3">
                <Form.Label>Avatar</Form.Label>
                <input type="file" id="avatarUrl"  onChange={e=>onChanngeInput(e)}/> 
            </Form.Group >

            <Button variant="primary" type="button" onClick={handleSignUpForm}>
                Submit
            </Button>
        </Form>
    )
}

export default SignUp
