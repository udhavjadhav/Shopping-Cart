
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import BottomNav from '../BottomNav/BottomNav';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Category.css'
import Navbar from '../Navbar/Navbar';

export default function Category() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(prod => setData(prod))
    }, [])

    return (
        <>
            <Navbar/>
        <div className='products'>
            {
                data.map(item => {
                    return (
                        <>
                            <Card key={item.id} className='card' sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <img className='img' src={item.images[0]} alt="" />
                                    <CardContent className='content'>
                                        <FavoriteIcon className='fav' />
                                        <h3 className='title'>
                                            {item.title}
                                        </h3>
                                        <p className='offer'>Upto 50% off | Best Offer </p>
                                        <p className='price'>
                                            Price: {item.price} $
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='btn'>
                                    <button onClick={() => setCount(count+1)} className='add'>Add To Cart</button>
                                    <button className='view'>View Product</button>
                                </CardActions>
                            </Card>
                        </>
                    )
                })
            }
            <BottomNav count = {count}/>
        </div>
        </>
    );
}

