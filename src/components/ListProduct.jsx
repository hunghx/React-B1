import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Product from './Product';
import { datas } from './data';
import { Button, Col, Row } from 'react-bootstrap';
import ChildComponent from './ChildComponent';

const ListProduct = () => {
    const [products, setProducts] = useState(datas);

    let timeId = useRef();
    const handleDelete = (id)=>{
        // xử lí xóa 
        // console.log("id có không",id);
        let newProducts = products.filter(item=>item.id!==id);
        setProducts([...newProducts]);

       
    } ;
    const [count, setCount] = useState(60);


    const total = useMemo(()=>{
        console.log("tính toán lại");
       return products.reduce((rs,pro)=>pro.price+rs,0);
    },[products]) 

    const handleStart=useCallback(()=>{
        //  console.log("hàm được tạo");
         setCount(pre=>pre+1);

        // timeId.current = setInterval(()=>{
        //     setCount(pre=>pre-1);
        // },1000);    
    },[]);
    // console.log(timeId.current);

    const handleStop=()=>{
        clearInterval(timeId.current);
    }
    // không có dependence : hàm callback sẽ được gọi khi nào: sau khi component mount và sau mỗi lầm component update
    // useEffect(()=>{
    //     console.log("gọi hàm call back");
    // });
    // có dependeces là 1 mảng rỗng :hàm callback chỉ chạy 1 lần sau khi component mount 
    //  useEffect(()=>{
    //   fetch("http://localhost:8080/products").then(
    //     res=>res.json()
    //   ).then(res => {
    //     setProducts(res)
    //   })

    // },[]);
    // có dependeces là 1 mảng các tham số :hàm callback được gọi mỗi khi giá trị của dependences bị thay đổi

    // useEffect(()=>{
    //     console.log("gọi hàm call back");
    //     return ()=>{
    //         // hàm dọn dẹp
    //     }
    // },[products]);
    return (
        <div>
            <h1>Danh sách sản phẩm </h1>
            <p>Tổng tiền : {total}</p>
            <p>{count}s</p>

            {/* đuyệt lần lượt các phần tử trong danh sách và hiển thị ra */}
            <Row>
                {
                    products.map((item) =><Col key={item.id}  xs={6} md={4}>
                        <Product handleStart={handleStart} productInfo={item} handleDelete={handleDelete}/>
                </Col> )
                }
            </Row>

            <Button variant='primary' onClick={handleStart}>start</Button>
            <Button variant='primary' onClick={handleStop}>stop</Button>

            <ChildComponent handleStart={handleStart}></ChildComponent>
        </div>
    )
}

export default ListProduct
