import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialExpenseState = {
    expenses: [],
    isEdit: false,
    isfetching: false



}
var email = localStorage.getItem('email')
let usermail;
if (email != null) {
    var splitted = email?.split("@");
    usermail = splitted[0]?.replace(/\./g, "");
}






const ExpenseSlice = createSlice({
    name: 'expenses',
    initialState: initialExpenseState,
    reducers: {
        addExpense(state, action) {
            if (Array.isArray(action.payload)) {
                state.expenses = action.payload
            } else {
                state.expenses.push(action.payload)

            }

        },
        deleteExpense(state, action) {
            let filterExp = state.expenses.filter((exp) => {
                return exp.id != action.payload
            })
            state.expenses = filterExp
        },
        editExpense(state, action) {
            state.isEdit = true
            state.expenseId = action.payload
        },
        isNotEditExpense(state) {
            state.isEdit = false
            state.expenseId = null
        },
        setIsFetching(state, action) {
            state.isfetching = action.payload
        }

    }
})

export const updateExpenseData = (data) => {
    return async () => {

        const putRequest = async () => {
            if (email != null) {
                const response = await axios.put(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses/${usermail}/${data.id}.json`, data.expense)

            } else {
                const response = await axios.put(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses/${data.id}.json`, data.expense)

            }



        }

        try {
            await putRequest().then(() => {
                getExpenseData()
                alert('Updated Successfully!')
            })

        } catch (err) {
            console.log(err)
        }
    }
}
export const postExpenseData = (expense) => {
    return async (state) => {

        const postRequest = async () => {
            if (email != null) {
                const response = await axios.post(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses/${usermail}.json`, expense)

            } else {
                const response = await axios.post('https://clone-e78d9-default-rtdb.firebaseio.com/expenses.json', expense)

            }


        }

        try {
            await postRequest().then(() => {
                getExpenseData()
                alert('Added Successfully!')
            })

        } catch (err) {
            console.log(err)
        }



    }

}

export const getExpenseData = () => {
    return async (dispatch, state) => {
        const getRequest = async () => {
            let response;
            // dispatch(expenseActions.setIsFetching(true))
            if (email != null) {
                response = await axios.get(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses/${usermail}.json`)
                // dispatch(expenseActions.setIsFetching(false))

            } else {
                response = await axios.get('https://clone-e78d9-default-rtdb.firebaseio.com/expenses.json')
                // dispatch(expenseActions.setIsFetching(false))

            }



            if (response.status == 200) {
                let res = response.data
                let data = []
                for (let key in res) {
                    data.push({
                        id: key,
                        description: res[key].description,
                        amount: res[key].amount,
                        category: res[key].category
                    })
                }

                dispatch(expenseActions.addExpense(data))
                // dispatch(expenseActions.setIsFetching(false))

            }
        }
        try {
            if (localStorage.getItem('email') && localStorage.getItem('token')) {
                await getRequest()

            }
        } catch (err) {
            console.log(err)
        }

    }
}

export const deleteExpenseData = (id) => {
    return async () => {
        const deleteRequest = async () => {
            if (email != null) {
                const response = await axios.delete(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses/${usermail}/${id}.json`)

            } else {
                const response = await axios.delete(`https://clone-e78d9-default-rtdb.firebaseio.com/expenses${id}.json`)

            }

        }
        try {
            await deleteRequest().then(() => {
                getExpenseData()
                alert('Deleted successfully!')

            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const expenseActions = ExpenseSlice.actions
export default ExpenseSlice.reducer