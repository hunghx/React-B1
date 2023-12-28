

const initState = {
    students: [
        {id:1,name:"Nguyễn Văn A",age:18,sex :'true'},
        {id:2,name:"Nguyễn Văn B",age:22,sex :'true'},
        {id:3,name:"Nguyễn Thị C",age:21,sex :'false'}
    ]
}

const studentReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            // thêm mới
            console.log("Action đi vào reducer và tiến hành thêm mới");
            return {...state, students : [...state.students,{...action.payload,id:getNewId(state.students)}]};

        case "DELETE" :
            // xóa theo id
            let newStudentList = state.students.filter(stu=>stu.id!==action.payload)
            return {...state,students: [...newStudentList]};
        case "UPDATE" : 
          // cập nhật 
           // tìm ra vị trí cần cập nhật 
           let newStudentUpdate = state.students.map(stu=> stu.id !==action.payload.id ? stu : action.payload )
           return {...state,students: [...newStudentUpdate]};
        default:
            return state;
    }

}

const getNewId=(list)=>{
    let idmax = 0;
    list.forEach(element => {
        if(element.id>=idmax){
            idmax = element.id
        }
    });
    return idmax+1;
}

export default studentReducer;