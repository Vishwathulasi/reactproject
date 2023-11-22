import React from 'react'
import './../Forindividuals/Proffessionalneeds.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './../Forindividuals/Financial.css';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
const FinancialEmergency = () => {
    const navigate=useNavigate();
    const handleon4=()=>{
        navigate('/simple');
    }
    const [coun1,setCoun1]=useState(6499 )
    const [coun2,setCoun2]=useState(89879 )
    const [coun3,setCoun3]=useState(417823 )
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
    
        <div class='image3'>
            <br></br><br></br>
              <h1>"It's not how much money you make, but how much  </h1>
              <h1>money you keep,how hard it works for you, and how</h1>
              <h1>many generations you keep it for." </h1><br></br>
              <h2>Join as monthly donars and start helping people</h2>
              <h2> to grow in their Finance</h2><br></br>
             
              <Button onClick={handleon4}style={{ color:'white', borderColor:'white'}}variant="outlined"><h2>Start Giving Monthly</h2></Button>
        </div><br></br><br></br>
        <div class="card">
            <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://thumbs.dreamstime.com/b/money-problems-29147521.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                   My Husband and I went with an accident. I lost my one leg and my Husband.
                   I am the only person who take care of my child.
                   Please donate for me to grow my child.
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrRzMHOQhfdPpheBMjL3Li2eLeKOpJ2O6eWRSqkh-9C3ikFpBrLsYk0H6Z0hbwVIhN78&usqp=CAU" />
                   <h4><br></br>Sowbarneka</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>33 days left</h4>      
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
                image="https://images.freeimages.com/images/large-previews/bef/where-s-the-money-gone-1513359.jpg"
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                     My Brother and I lost our Parents in COVID.
                     But we both have no wealth to learn.Atleast I need my brother to learn.
                     Please donate and help me  to grow in my carrier. 
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="https://c8.alamy.com/comp/JBBRMT/1-indian-teeanger-girl-photographer-camera-clicking-photos-in-park-JBBRMT.jpg" />
                   <h4><br></br>Harsha Priya</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>89 days left</h4>      
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9n52v-kSD0Lmy51U-ESpK6_tBkmcBZj930AArg-mm2L9LU_Zg2Dz082cTjDdJTsMRLI&usqp=CAU"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                      I got married before 18 due to family situations and I dont't have a child.
                      I lost my husband due to cancer.I wish to uplift my family's condition by working.
                      please donate me.
                </Typography><br></br>
                 <Typography>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-photo/portrait-happy-young-indian-woman-260nw-104609255.jpg" />
                            <h4><br></br>Ramya</h4>
                        </Stack>
                 </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>111 days left</h4>      
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
       <Button onClick={handleon4}variant='contained'>Start Giving Monthly</Button>
        </div>
   </div>
   </div>
  )
}

export default FinancialEmergency