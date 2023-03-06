
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import BottomNav from '../BottomNav/BottomNav';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Products.css'

export default function MultiActionAreaCard() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(prod => setData(prod))
    }, [])

    return (
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
                                        <p className='desc' color="text.secondary">
                                            {item.description}
                                        </p>

                                        <h3 className='price'>
                                            Price: {item.price} $
                                        </h3>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='btn'>
                                    <button onClick={() => alert("Product added to cart!")} className='add'>Add To Cart</button>
                                    <button className='view'>View Product</button>
                                </CardActions>
                            </Card>
                        </>
                    )
                })
            }
            <BottomNav />
        </div>
    );
}

