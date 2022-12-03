import React, { useState, useEffect } from 'react'
import Expenses from '../Expenses/Expenses'
import Logout from '../Logout/Logout'
import ProfileModal from '../ProfileModal/ProfileModal'
import VerifyEmail from '../VerifyEmail/VerifyEmail'
const Home = ({ open, setOpen, isUpdated }) => {
    const [userToken, setUserToken] = useState(() => {
        return localStorage.getItem('token') || null
    })
    useEffect(() => {
        if (isUpdated == false) {
            setOpen(true)
        }
    }, [])

    return (
        <div><h1>Welcome to Expense Tracker</h1>
            {userToken && <>
                {open == true && <ProfileModal open={open} setOpen={setOpen} />}
                <VerifyEmail />
                <Logout />
            </>


            }

            {userToken && <Expenses />}


        </div>
    )
}

export default Home