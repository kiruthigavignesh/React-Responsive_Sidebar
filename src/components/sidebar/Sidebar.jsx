import './sidebar.scss';
import React, { useState } from 'react'
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {motion} from 'framer-motion';

const Sidebar = () => {
  const  [selected, setSelected] = useState(0);

  const [expanded,setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left:'0'
    },
    false:{
      left:'-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>

    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      <div className="bars" style={expanded?{left: '27%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
       <MenuOutlinedIcon/>
      </div>





      <div className='top'>
        <span className='logo'>AdminPanel</span>
      </div>
      {/* <hr/> */}
      <div className='center'>
<ul>
  <p className="title">MAIN</p>
    <li className=''> 
    <DashboardIcon className='icon'/>
        <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>

    <li className=''>
        <AccountCircleOutlinedIcon className='icon'/>
        <span>Users</span>
        </li>
    <li className=''>
        <ProductionQuantityLimitsOutlinedIcon className='icon'/>      <span>Products</span></li>

    <li className=''>
      <FilterFramesOutlinedIcon className='icon'/>
      <span>Orders</span></li>

    <li className=''>
      <LocalShippingOutlinedIcon className='icon'/>
      <span>Delivery</span></li>
    <li className=''>
      <InsertChartOutlinedIcon className='icon'/>
      <span>Stats</span></li>
    <li className=''>
      <CircleNotificationsOutlinedIcon className='icon'/>
      <span>Notification</span>
      
    </li>
      <p className="title">SERVICES</p>

    <li className=''>
      <SystemSecurityUpdateGoodOutlinedIcon className='icon'/>
      <span>System Health</span></li>
    <li className=''>
      <PsychologyOutlinedIcon className='icon'/>
      <span>Logs</span></li>
    <li className=''>
      <SettingsOutlinedIcon className='icon'/>
      <span>Settings</span></li>
      <p className="title">USERS</p>

    <li className=''>
      <AccountBoxOutlinedIcon className='icon'/>
      <span>Profile</span></li>

    <li className=''>
      <LogoutOutlinedIcon className='icon'/>
      <span>LogOut</span></li>

</ul>
</div >
      <div className='bottom'>
        <div className='coloroption'></div>
        <div className='coloroption'></div>
      </div>
    </motion.div>
    </>
  );
}

export default Sidebar
