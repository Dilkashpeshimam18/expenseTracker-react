import React, { useState, useEffect } from 'react'
import Logout from '../Logout/Logout'
import ProfileModal from '../ProfileModal/ProfileModal'
import VerifyEmail from '../VerifyEmail/VerifyEmail'
const Home = ({ open, setOpen, isUpdated }) => {
    useEffect(() => {
        if (isUpdated == false) {
            setOpen(true)
        }
    }, [])

    return (
        <div><h1>Welcome to Expense Tracker</h1>
            {open == true && <ProfileModal open={open} setOpen={setOpen} />}
            <VerifyEmail />
            <Logout />

        </div>
    )
}

export default Home