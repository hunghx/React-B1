// {
//     type : "tên của action",
//     payload :"giá trị thâm số gửi lên"
// }


export const actionAdd = (payload)=>{
    console.log("gọi action và truyền data vào", payload);
    return{
    type : "ADD",
    payload : payload
}}

export const actionUpdate = (payload)=>{
    console.log("gọi action và truyền data vào", payload);
    return{
    type : "UPDATE",
    payload : payload
}}

export const actionDelete = (payload)=>{
    console.log("gọi action và truyền data vào", payload);
    return{
    type : "DELETE",
    payload : payload
}}

