import React from 'react'
import './../Forindividuals/Education.css';
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
const Education = () => {
    const navigate=useNavigate();
    const handleon4=()=>{
        navigate('/simple');
    }
    const [coun1,setCoun1]=useState(499 )
    const [coun2,setCoun2]=useState(9879 )
    const [coun3,setCoun3]=useState(17823 )
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
    
        <div class='image1'>
            <br></br><br></br>
              <h1>“Education makes a people easy to lead but </h1>
              <h1>difficult to drive; easy to govern, </h1>
              <h1>but impossible to enslave.”</h1><br></br>
              <h2>Join as monthly donars and start helping student</h2>
              <h2> to learn and grow in their education</h2><br></br>
             
              <Button onClick={handleon4} style={{ color:'black', borderColor:'black'}}variant="outlined"><h2>Start Giving Monthly</h2></Button>
        </div><br></br><br></br>
        <div class="card1">
            <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.unicef.org/sites/default/files/styles/press_release_feature/public/UN07007.JPG?itok=EIZSO1UK"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                   My wife and I went with an accident. I lost my one leg and my wife.
                   I am the only person who take care of my child.
                   Please donate for my child and help her to learn.
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/dreamy-african-child-8623003.jpg" />
                   <h4><br></br>Selva Raj</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space1">
                        <div>
                            <Typography variant="body3">
                                <h4>50 days left</h4>      
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
                image="https://us.123rf.com/450wm/lakshmiprasad/lakshmiprasad2204/lakshmiprasad220400110/185201636-focus-on-boy-teenage-kids-busy-studying-or-preparing-before-examination-while-sitting-on-school.jpg?ver=6"
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                     My Brother and I lost our Parents in COVID.
                     But we both have no wealth to learn.Atleast I need my brother to learn.
                     Please donate and help him to learn and grow in education.
                </Typography><br></br>
                <Typography>
                <Stack direction="row" spacing={2}>
                   <Avatar alt="Remy Sharp" src="https://external-preview.redd.it/DEQKTyAorvqyrS4J-VKsYH-Y3FKeBvG4yrddflW5Tkk.jpg?width=640&crop=smart&auto=webp&s=c221dc91f9098e75ba567d445bc5fa116e5024c3" />
                   <h4><br></br>Jhansi Lakshmi</h4>
                   </Stack>
                </Typography><br></br>
                <div class="space">
                        <div>
                            <Typography variant="body3">
                                <h4>70 days left</h4>      
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWOTWdas7csv0GUXpkOr1YxbEBNAsFVSmrQ&usqp=CAU"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                      I got married before 18 due to family situations and I dont't have a child.
                      I lost my husband due to cancer.I wish to uplift my family's condition by learning.
                      please donate me.
                </Typography><br></br>
                 <Typography>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2021/04/12/16/38/girl-6173216_1280.jpg" />
                            <h4><br></br>Raga Varshini</h4>
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
           <h3>Contact No: 9876543210</h3>
           <hr></hr><br></br>
           <h2>Give Rating And Promote Us</h2>
           <Rating name="half-rating" defaultValue={2.5} precision={0.5} /><br></br>
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

export default Education