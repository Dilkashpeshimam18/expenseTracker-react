import React from 'react'
import './HomeRightBottom.css'
import WalletIcon from '../../../assets/wallet.png'
import { modalActions } from '../../../../store/slice/modal-slice'
import { useDispatch, useSelector } from 'react-redux'
const HomeRightBottom = () => {
    const userToken = useSelector(state => state.auth.userToken)

    const dispatch = useDispatch()
    const handleOpen = () => {
        dispatch(modalActions.handleClickOpen())
        dispatch(modalActions.handleAddNew())
    }
    return (
        <div className='homeRightBottom'>
            <div className='homeRightBottom__container1' >
                <img style={{ height: '30px', width: '30px', marginRight: '20px', paddingTop: '5px' }} src={WalletIcon} />
                <p className='homeRightBottom__text'>Missing Transaction?</p>

            </div>
            {!userToken && <div className='homeRightBottom__container2'>
                <button onClick={() => alert('You need to login first!')} className='homeRightBottom__button'>ADD NEW</button>

            </div>}
            {userToken && <div className='homeRightBottom__container2'>
                <button onClick={handleOpen} className='homeRightBottom__button'>ADD NEW</button>

            </div>}


        </div>
    )
}

export default HomeRightBottom