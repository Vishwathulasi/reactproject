import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './../Forindividuals/Browseafund.css'
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
   
    <div
   
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
     
      {value === index && (
        <Box sx={{ p: 20 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Browseafund() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const navigate=useNavigate();
  const handleMedical=()=>{
       navigate('/medi')
  }
  const navigate2=useNavigate();
  const handleEducation=()=>{
       navigate2('/Education')
  }
  const navigate3=useNavigate();
  const handleproff=()=>{
       navigate3('/Proff')
  }
  const navigate4=useNavigate();
  const handlefin=()=>{
       navigate4('/fina')
  }
  const navigate5=useNavigate();
  const handlesmile=()=>{
       navigate5('/smile')
  }
  const navigate6=useNavigate();
  const handlehelp=()=>{
       navigate6('/help')
  }
  const navigate7=useNavigate();
  const handlecare=()=>{
       navigate7('/care')
  }
  const navigate8=useNavigate();
  const handlesave=()=>{
       navigate8('/save')
  }
  return (
   <div>
       <Navbar1/>
    <div id="main">
        <Box sx={{ bgcolor: 'background.paper', width: 1000 }}>
           
        <AppBar position="relative">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            
            <Tab style={{ color: 'black',  backgroundColor:'lavender', fontSize:'20px'}} label="For Individual" {...a11yProps(0)} />
            <Tab style={{ color: 'black',  backgroundColor:'lavender' , fontSize:'20px'}}  label="For Charity" {...a11yProps(1)} />
        

            
            </Tabs>
        </AppBar>
     
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <div class="itemone">
                <TabPanel value={value} index={0} dir={theme.direction}>
                 {/* <button onclick={handleMedical}>hi</button> */}
                    <Button onClick={handleMedical} style={{ color: 'black', fontSize:'22px' }}>Medical</Button><br></br>
                    <Button onClick={handleEducation}style={{ color: 'black', fontSize:'22px' }}>Education</Button><br></br>
                    <Button onClick={handlefin}style={{ color: 'black', fontSize:'22px' }}>Financial Emergency</Button><br></br>
                    <Button  onClick={handleproff}style={{ color: 'black', fontSize:'22px' }}>Professional needs</Button>
                </TabPanel> 
            </div>
            <div class="itemtwo">
            <TabPanel value={value} index={1} dir={theme.direction}>
                    <Button onClick={handlesmile}style={{ color: 'black', fontSize:'22px'}}>Smile Foundation</Button><br></br>
                    <Button onClick={handlehelp}style={{ color: 'black', fontSize:'22px' }}>Helpage India</Button><br></br>
                    <Button onClick={handlecare}style={{ color: 'black', fontSize:'22px' }}>Care India</Button><br></br>
                    <Button onClick={handlesave}style={{ color: 'black', fontSize:'22px' }}>Savelife Foundation</Button><br></br>
            </TabPanel>
            </div>
        </SwipeableViews>
        
        </Box>
        </div>
      </div>
  );
}