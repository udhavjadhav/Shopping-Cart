
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import BottomNav from '../BottomNav/BottomNav';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Category.css'
import Navbar from '../Navbar/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function Category() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(prod => setData(prod))
    }, [])

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 2000)
    }, [])

    return (
        <>
            <Navbar />
            {
                loading
                    ?
                        <Box className="spinner">
                            <CircularProgress className='spin'/>
                        </Box>
                    :
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
                                                <button onClick={() => setCount(count + 1)} className='add'>Add To Cart</button>
                                                <button className='view'>View Product</button>
                                            </CardActions>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </div>
            }
            <BottomNav count={count} />
        </>
    );
}

