import React from 'react'
import './../Forindividuals/Medical1.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
const Medical = () => {
    const navigate=useNavigate();
    const handleon4=()=>{
        navigate('/simple');
    }
        const [coun1,setCoun1]=useState(49999 )
    const [coun2,setCoun2]=useState(5678 )
    const [coun3,setCoun3]=useState(983452 )
    const handleon1=()=>
    {
       setCoun1((prev)=>prev+1)
    }
    const handleon2=()=>
    {
       setCoun2((prev)=>prev+1)
    }
    const handleon3=()=>
    {
       setCoun3((prev)=>prev+1)
    }
  return (
    <div>
        <Navbar1/>
   <div id='mains'>
        <div class='image'>
              <h1>The Sole Meaning Of Life</h1>
              <h1>Is To Serve Humanity</h1>
              <h2>Join as monthly donars and start helping human's life</h2>
             
              <Button onClick={handleon4}variant='contained'>Start Giving Monthly</Button>
        </div><br></br><br></br>
        <div class="card">
            <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://d1vdjc70h9nzd9.cloudfront.net/media/directupload/1000/1318/image/2629b1eaf767da379f3c1b99d0a84a3b80e5d7d8.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                  He is the only person in our family to earn money.
                  Now he is suffering form Brain Haemorrage.
                  Please support us by donating amount.
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                   <h4><br></br>Amy Nargunavathi</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>15 days left</h4>      
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body3">
                                <h4>{coun1}Supporters</h4>      
                            </Typography>
                        </div>
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={handleon1}size="small">Start Donating</Button>
                
            </CardActions>
        </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i0.wp.com/navjeevanexpress.com/wp-content/uploads/2020/11/corona-patient5.jpg?fit=534%2C356&ssl=1"
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                    I belong to a very humble background.
                    Before two weeks my brother went with an accident.
                    We need an medical support.Please help us by donating amount.
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                   <h4><br></br>Vignesh Raja</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>22 days left</h4>      
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body3">
                                <h4>{coun2} Supporters</h4>      
                            </Typography>
                        </div>
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={handleon2} size="small">Start Donating</Button>
               
            </CardActions>
        </Card>
        </div>
        <div>
                <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoaWTjoJEKXAwdIPGEqtFB8nE5W-fXsFplA&usqp=CAU"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                      My uncle is suffering from spinal muscular atrophy.
                      He cant't even to day-to-day works.
                     The treatment for this diseases cast 70L.
                     Please help us by donating amount..
                </Typography><br></br>
                 <Typography>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                            <h4><br></br>Udhaya Kumar</h4>
                        </Stack>
                 </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>10 days left</h4>      
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body3">
                                <h4>{coun3} Supporters</h4>      
                            </Typography>
                        </div>
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={handleon3} size="small">Start Donating</Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
        </div>
        </div>
        <div>
           <h1>Logo</h1>
           <hr style={{width:'50%'}}></hr>
           <h2>For any queries</h2>
           <h3>Email:abc@gmail.com</h3>
           <h3>Contact No: 9876543210</h3><br></br>
           <h2>Give Rating And Promote Us</h2>
           <Rating name="half-rating" defaultValue={2.5} precision={0.5} /><br></br>
           <hr></hr>
           <h5>Copyright © 2023 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
 Terms of Use |
 Privacy Policy |
 AML Policy |
 Use of cookies </h5>
       <h2>Start Monthly Donation To Save Lives</h2>
       <Button  onClick={handleon4}variant='contained'>Start Giving Monthly</Button>
        </div>
   </div>
   </div>
  )
}

export default Medical