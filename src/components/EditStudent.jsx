
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionAdd, actionUpdate } from '../redux/actions/studentAction';
import { useNavigate, useParams } from 'react-router-dom';
const initState = {
    id:"",
    name:"",
    age :18,
    sex:'true'
}


const EditStudent = () => {
    const [editStudent, setEditStudent] = useState(initState);
    const idEdit = +useParams().id;
    // const students = useSelector(state=> state.student.students) || []

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeInput=(e)=>{
        let key = e.target.id;
        let value = e.target.value;
        setEditStudent({...editStudent,[key]:value});
    }
    // hàm xử lí thêm mới
    const handleUpdate =()=>{
        // dispatch(actionUpdate(editStudent)); // gửi aaction lên reducer
        navigate("/"); // điều hướng về router "/"
    }
    useEffect(()=>{
        // console.log("vào useEffect");
        // students.forEach(stu=> {
        //     if(stu.id === idEdit){
        //         console.log(idEdit);
        //         setEditStudent(stu);
        //     }
        // });
    },[idEdit])
  return (
    <div>
      <h1>Chỉnh sửa sinh viên</h1>
      <form>
        <div>
            <label htmlFor="id">Id</label>
            <input type="text" id='id' value={editStudent.id} readOnly/>
        </div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'value={editStudent.name} onChange={(e)=>handleChangeInput(e)} />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" min={18} id='age' value={editStudent.age} onChange={(e)=>handleChangeInput(e)}/>
        </div>
        <div>
            <label htmlFor="sex">Sex</label>
            <select id="sex" value={editStudent.sex} onChange={(e)=>handleChangeInput(e)}>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
            </select>
        </div>
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  )
}

export default EditStudent
