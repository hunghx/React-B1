import React, { memo, useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { ThemeContext } from '../App';

const Product = ({productInfo,handleDelete,handleStart}) => {
    console.log("component product render lại");
    const deleteItem = (id)=>{
        console.log("id cần xóa ===>>>>>>>>",id);
        handleDelete(id);
    }

    // const value = useContext(ThemeContext);
    // console.log("value",value);
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productInfo.imgUrl} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{productInfo.price}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link onClick={handleStart} href="#">Card Link</Card.Link>
      <Card.Link variant="danger" onClick={()=>deleteItem(productInfo.id)} className='btn btn-danger'>Remove</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default memo(Product);
