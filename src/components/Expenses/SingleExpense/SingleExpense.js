import React from 'react'
import { themeActions } from '../../../store/slice/theme-slice'
import { useDispatch, useSelector } from 'react-redux'

const SingleExpense = ({ id, amount, desc, category }) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)
    const handlePremium = () => {
        console.log('Premium activated')
        dispatch(themeActions.activatePremium())
        console.log(theme)
    }
    return (
        <div>
            <div>
                <p>{desc}-{amount}-{category}</p>
                <button>Edit</button><button>Delete</button>
                {amount > 1000 && <button onClick={handlePremium}>Premium</button>}
            </div>
        </div>
    )
}

export default SingleExpense