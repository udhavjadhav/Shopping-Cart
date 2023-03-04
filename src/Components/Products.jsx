
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
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
                            <Card className='card' sx={{ maxWidth: 400}}>
                                <CardActionArea>
                                    <CardMedia className='img'
                                        component="img"
                                        height="300"
                                        image={item.images[0]}
                                        alt="green iguana"
                                    />
                                    <CardContent className='content'>
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
                                    <Button variant='contained' size="small" color="primary">
                                        Add To Cart
                                    </Button>  
                                    <ShareOutlinedIcon className='icon'/>
                                </CardActions>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    );
}

