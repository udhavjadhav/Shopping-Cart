import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import BottomNav from '../BottomNav/BottomNav';
import { useNavigate } from 'react-router-dom';
import './Category.css';

export default function Category() {
  const [data, setData] = useState([])
  const Navigate = useNavigate()
  useEffect(() => {
    fetch('https://mocki.io/v1/4b7f5d74-2f5a-48d1-9e5a-f14d731d9e1e')
      .then(res => res.json())
      .then(prod => setData(prod))
  }, [])
  return (
    <div className='main'>
      {
        data.map(item => {
          return (
            <Card key={item.id} onClick={()=>Navigate('/')} className='card' sx={{ maxWidth: 400 }}>
              <img className='img' src={item.image} alt="" />
              <CardContent>
                 <p className='heading'>{item.name}</p> 
                  <p className='create'>Top Offers | 70% off</p>
              </CardContent>
              <CardActions className='btn'>
                <button className='explore' size="small">Explore Now</button>
              </CardActions>
            </Card>
          )
        })
      }
      <BottomNav />
    </div>
  );
}
