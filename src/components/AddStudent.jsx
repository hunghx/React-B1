
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionAdd } from '../redux/actions/studentAction';
import { useNavigate } from 'react-router-dom';
import { postNewStudent } from '../redux/slices/studentSlice';
import { fetchAllStudent } from '../redux/slices/studentSlice';
const initState = {
    name:"",
    age :18,
    sex:'true'
}

const AddStudent = () => {
    const [newStudent, setNewStudent] = useState(initState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeInput=(e)=>{
        let key = e.target.id;
        let value = e.target.value;
        setNewStudent({...newStudent,[key]:value});
    }
    // hàm xử lí thêm mới
    const handleAdd =()=>{
        dispatch(postNewStudent(newStudent)); // gửi aaction lên reducer
        // dispatch(fetchAllStudent())
        navigate("/"); // điều hướng về router "/"
    }

  return (
    <div>
      <h1>Thêm mới sinh viên</h1>
      <form>
        {/* <div>
            <label htmlFor="id">Id</label>
            <input type="text" id='id' value={newStudent.id} onChange={(e)=>handleChangeInput(e)}/>
        </div> */}
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'value={newStudent.name} onChange={(e)=>handleChangeInput(e)} />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" min={18} id='age' value={newStudent.age} onChange={(e)=>handleChangeInput(e)}/>
        </div>
        <div>
            <label htmlFor="sex">Sex</label>
            <select id="sex" value={newStudent.sex} onChange={(e)=>handleChangeInput(e)}>
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
            </select>
        </div>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}

export default AddStudent
