
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            const filtered = state.filter((expense) => expense.id !== action.id)
            return filtered

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })

        default:
            return state
    }
}

export default expensesReducer