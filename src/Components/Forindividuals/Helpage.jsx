import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './Helpage.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Navbar1 from './Navbar1';
import { useNavigate } from 'react-router-dom';
const Helpage = () => {
  const navi=useNavigate();
  const handleon1=()=>{
    navi('/simple')
  }
  return (
    <div>
      <Navbar1/>
    <div>
    <div className='imag5'></div>
    <br></br>
     <div className='donate5'>
      <div>

         <h1>
        <VolunteerActivismIcon /><br></br>
          Donate Now
          </h1>
         <h4>Your financial contribution can make a real difference .Every Rupee you <br></br>donate goes directly toward our projects.
         </h4>
         <Button onClick={handleon1}variant="outlined"><h4>Get Started</h4></Button>
      </div>
      <hr></hr>
      <div>
         <h1>
        <VolunteerActivismIcon /><br></br>
          Become a Volunteer
          </h1>
         <h4>Join our team of dedicated volunteers and actively participate in our<br></br> projects and event .Your time and skills are invaluable</h4>
         <Button onClick={handleon1} variant="outlined"><h4>Get Started</h4></Button>
      </div>
     </div>
    <br></br>
    
    <br></br>
  <div className='fle5'>
    <div className='fle15'>
  <ul>
    <ul>
    <Card sx={{ height: 220 ,width:600}}>
    <div className='flei5'>
       <div >
      <CardMedia
        sx={{ height: 230 ,width:300}}
        image="https://www.shutterstock.com/image-photo/cute-indian-child-studying-home-260nw-1689916468.jpg"
      />
      </div>
      <div >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bright Future Through Education
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Education is a powerful tool that can break the cycle of proverty and create a brighter future for children in underserved communties
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Donate Now</Button>
      </CardActions>
      </div>
      </div>
    </Card>
      <br></br>
    <Card sx={{ height: 200 ,width:600 }}>
    <div className='flei5'>
       <div >
      <CardMedia
        sx={{ height: 200 ,width:300}}
        image="https://www.thestatesman.com/wp-content/uploads/2022/07/Untitled-design-19.jpg"
      />
      </div>
      <div >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Feedind Hope , One Meal at a Time
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Our Hunger Relief initiative aims to combat this crisis by nutuitious meals to families facing food insecurity.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Donate Now</Button>
      </CardActions>
      </div>
      </div>
    </Card>
    <br></br>
    <Card sx={{ height: 200 ,width:600 }}>
    <div className='flei5'>
       <div >
      <CardMedia
        sx={{ height: 200 ,width:300}}
        image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/13/full/1589365742-8383.jpg?im=FeatureCrop,size=(826,465)"
      />
      </div>
      <div >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Quenching Thrist, Saving Lives
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join us in our mission to provide pure, clean and safe drinking water to communties in need around the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button >Donate Now</Button>
      </CardActions>
      </div>
      </div>
    </Card>
  </ul>
  </ul>
  </div>
  </div>
  
  <div className='end5'>

  </div>
    <div style={{backgroundColor:'black',color:'white'}}>
      <div className='asd5'>
        <div >
        <h4>Making a difference,<br></br>Once Act of Kindness at a Time</h4>
            <Button variety="text"><InstagramIcon/></Button> 
           <Button variety="text"><WhatsAppIcon/></Button> 
           <Button variety="text"><FacebookSharpIcon/></Button> 
           <Button variety="text"><TelegramIcon/></Button> 
        </div>
        <div className='sdf5'>
            <h4>Company</h4>
            <p>Terms & Condition<br></br><br></br>
             Privacy policy<br></br><br></br>Performance</p>
        </div>
        <div className='back5'>
               <h3>Have questions or want <br></br>to get invo
               led?<br></br>
               <Button><h4 style={{backgroundColor:'yellow'}}>Contact us</h4></Button></h3>
        </div>
    </div>
    <br></br>
        <h4 >Copyright &copy; 2023 All right reserved.</h4>
   
    </div>
    </div>
    </div>
  )
}

export default Helpage