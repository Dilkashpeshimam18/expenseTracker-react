import React, { useState, useEffect } from 'react'
import HomeCategory from './Home/HomeCategory/HomeCategory'
import HomeGraph from './Home/HomeGraph/HomeGraph'
import HomeSub from './Home/HomeSub/HomeSub'
import IncomeModal from './Home/IncomeModal/IncomeModal'
import { useSelector } from 'react-redux'
import './HomeMain.css'
import HomeChart from './Home/HomeChart/HomeChart'
import HomeBar from './Home/HomeBar/HomeBar'

const HomeMain = () => {
    const [remaining, setRemaining] = useState(true)
    const [open, setOpen] = useState(false);
    const [income, setIncome] = useState(() => {
        return localStorage.getItem('userIncome') || 0
    })
    const [userIncome, setUserIncome] = useState(() => {
        return localStorage.getItem('userIncome')
    })
    const allExpenses = useSelector(state => state.expenses.expenses)
    let map = new Map()
    for (let exp of allExpenses) {
        let category = exp.category
        let amount = Number(exp.amount)
        map.set(category, map.get(category) + amount || amount)
    }
    let allKeys = [...map.keys()]
    let allValues = [...map.values()]
    let data = {
        labels: allKeys,
        datasets: [{
            barThickness: 40,
            label: 'Total Expense By Category',
            data: allValues,
            backgroundColor: ['rgb(1, 140, 140)', '#3bc4d4']
        }]
    }

    let totalExpense = allExpenses.reduce((curr, expense) => {
        return curr + Number(expense.amount)
    }, 0)
    let remainingAmount = income - totalExpense

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleIncome = () => {

        localStorage.setItem('userIncome', income)
        let Income = localStorage.getItem('userIncome')
        setUserIncome(Income)
    }
    const handleChange = (e) => {
        setIncome(e.target.value)
    }

    return (
        <div className='homeMain'>
            <div className='home__subContainer'>
                <HomeSub title='Income' amount={userIncome} handleClickOpen={handleClickOpen} />
                <HomeSub title='Expense' remaining={remaining} amount={totalExpense} />
                <HomeSub title='Remaining' remaining={remaining} amount={remainingAmount} />
            </div>
            <div className='home__graphContainer'>
                <HomeGraph />
            </div>
            <div className='home__chartContainer'>
                <HomeChart />
                <HomeBar chartData={data} />
            </div>
            <IncomeModal handleClose={handleClose} open={open} handleIncome={handleIncome} handleChange={handleChange} />
        </div>
    )
}

export default HomeMain