import React, { useState, Fragment, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import BottomNav from '../BottomNav/BottomNav'
import './Cart.css';

function Summary({ }) {
  // const [cartArray, setCartArray] = useState([]);
  // const [value, setValue] = useState(1);
  // const Navigate = useNavigate();

  // const Increment = (item) => {
  //   console.log(item);
  //   setValue(value + 1);
  // }
  // const Decrement = () => {
  //   setValue(value - 1)
  // }

  // //Local Storage
  // useEffect(() => {
  //   const ls = window.localStorage;
  //   setCartArray(JSON.parse(ls.getItem('wish-list')));
  // }, []);

  // const handleDelete = (id) => {
  //   let index = cartArray.map((e) => {
  //     return e.id
  //   }).indexOf(id);
  //   cartArray.splice(index, 1);
  //   //Delete data from localstorage
  //   window.localStorage.setItem('wish-list', JSON.stringify(cartArray));
  //   Navigate('/summary');

  //   //Empty Cart
  //   if (cartArray.length < 1) {
  //   }
  // }
  return (
    <>
      <div>
        <img className='empty' src="./assets/empty.webp" alt="" srcset="" />
        <p className='empty-text'>Your Bag is Empty !</p>
      </div>
      {/* <Fragment>
        <div className="container text-center">
          <h1 className="m-5">Proceed to checkout</h1>
          <Table bordered hover size="lg">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray && cartArray.length > 0
                  ?
                  cartArray.map((item, prod) => {
                    
                    return (
                      <tr key={prod}>
                        <td>
                          {item.id}
                        </td>
                        <td>
                          <img className=' p-2 ' style={{ width: "10vw", height: '15vh' }} src={item.image} alt="product" />
                          <div className='text-center'>
                            <p className=''>{item.title} </p>
                            <p>50 % off </p>
                          </div>

                        </td>
                        <td>

                          <button disabled={value !== 1 ? false : true} onClick={Decrement} className='btn m-1'>-</button >
                          {value}
                          <button onClick={Increment} className='btn m-1'>+</button>

                        </td>
                        <td>
                          <p>Rs: {item.totalPrice * value} INR</p>
                        </td>
                        <td>
                  
                          <DeleteIcon style={{ cursor: "pointer" }} onClick={() => handleDelete(item.id)} />
                        </td>
                      </tr>
                    )
                  })
                  :
                  <img src="./assets/empty.webp" alt="" srcset="" />
              }

            </tbody>
          </Table>

          <br />
          <h3 style={{ textAlign: 'end', marginRight: '20vh' }}>Total Amount: </h3>

          <Link className="" to={'/'}>
            <Button color='success' variant="contained" startIcon={<AddIcon/>}>Add More Products</Button>
          </Link>
          <Link className="" to={'/'}>
            <Button variant="contained" sx={{ m: 2 }} startIcon={<ArrowBackIcon />}>Back to Home</Button>
          </Link>

          <Link className="d-grid mt-3" >
            <Button variant='contained' sx={{mb:5}} >Continue to checkout</Button>
          </Link>
        </div>
        <div>
        </div>
      </Fragment> */}
      <BottomNav />
    </>
  )
}

export default Summary;