import React from 'react'
import './HomeOption.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditIcon from '@mui/icons-material/Edit';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Link } from 'react-router-dom';
const HomeOption = () => {
    return (
        <div className='homeOption'>
            <ul className='homeOption__container' style={{ listStyle: 'none' }}>
                <li className='homeOption__list'><DashboardIcon className='homeOption__icon' /><p>Dashboard</p> </li>
                <Link style={{ textDecoration: 'none' }} to='update-profile'><li className='homeOption__list'><EditIcon className='homeOption__icon' /><p>Edit Profile</p></li></Link>
                <li className='homeOption__list'><BarChartIcon className='homeOption__icon' /><p>Bar Chart</p></li>
                <li className='homeOption__list'><ShowChartIcon className='homeOption__icon' /><p>Line Chart</p></li>
                <li className='homeOption__list'><DonutLargeIcon className='homeOption__icon' /><p>Pie Chart</p></li>

            </ul>
        </div >
    )
}

export default HomeOption