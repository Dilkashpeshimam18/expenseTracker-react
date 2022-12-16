import React from 'react'
import './HomeSub.css'
import AddIcon from '../../../../assets/plus.png'
const HomeSub = ({ title, remaining, amount, handleClickOpen }) => {
    return (
        <div className='homeSub'>
            <div className='homeSub__container1'>
                <p style={{ marginLeft: '5px' }}>{title}</p>
                {!remaining && <img style={{ height: '20px', width: '20px', cursor: 'pointer', marginRight: '5px', marginTop: '12px' }} onClick={handleClickOpen} src={AddIcon} />}

            </div>
            <div className='homeSub__container2'>
                <p style={{ fontWeight: 'bold', margin: '0', paddingTop: '5px', color: 'rgb(1, 140, 140)' }}>Rs {amount}</p>
            </div>
        </div>
    )
}

export default HomeSub