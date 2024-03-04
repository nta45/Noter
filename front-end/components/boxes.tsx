import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Boxes() {
   const items = [1, 2, 3, 4]

  return (
    <div className='mt-48 flex flex-wrap gap-32 justify-center items-center'>
        {
            items.map((item) => (
                <div key={item}>
                <Card sx={{maxWidth: 500, minHeight: 500}}>
                    <CardActionArea>
                    <CardMedia 
                     component="img"
                     height="140"
                     image="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="c1"/>
                     <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                     </CardContent> 
                     </CardActionArea>
                     <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                     </CardActions>
                </Card>
            </div>
            ))
        }
    </div>
  )
}
