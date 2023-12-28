import React, { useEffect } from 'react'
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { actionAdd, actionDelete } from '../redux/actions/studentAction';
import { Link } from 'react-router-dom';
import { fetchAllStudent } from '../redux/slices/studentSlice';

const Home = () => {
  // console.log("store",store.getState());

  const dispatch = useDispatch();

  // Sử dụng useSelector
  const students = useSelector((state)=> state.student.data); // khi state thây đổi thì re render lại component

  // const handleAdd =()=>{
  //   // dispatch action thêm mới
  //   let data = {
  //     id :1,
  //     name:'Nguyễn Văn A',
  //     age : 21,
  //     sex: true
  //   }
  //   dispatch(actionAdd(data));
  // }

// hàm xóa theo id
  const handleDelete = (idDel)=>{
    // if(!window.confirm('Bạn có chắc chắn muốn xóa không')){
    //   return
    // }
    //   dispatch(actionDelete(idDel)) ; // gửi action lên reducer
  } 

  useEffect(()=>{
      dispatch(fetchAllStudent())
  },[])

  return (
    <div>
      <h1>Home</h1>
      <table border={10} cellPadding={10} cellSpacing={20}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th colSpan={2}>Action</th>
        </tr>
        {
          students.map((st,index)=><tr key={index+1}>
            <td>{st.id}</td>
            <td>{st.name}</td>
            <td>{st.age}</td>
            <td>{st.sex ==='true'?"Nam":"Nữ"}</td>
            <td><button onClick={()=>handleDelete(st.id)}>Xóa</button></td>
            <td><Link to={"/student/edit/"+st.id}>Sửa</Link></td>
          </tr>)
        }
      </table>
      <Link to={"/student/add"}>Add</Link>
    </div>
  )
}

export default Home
