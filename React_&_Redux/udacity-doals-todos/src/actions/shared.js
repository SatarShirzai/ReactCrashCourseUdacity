import API from 'goals-todos-api'

export const RECIVE_DATA = 'RECIVE_DATA'

function recivedata(todos, goals) {
    return {
        type: RECIVE_DATA,
        todos,
        goals
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(recivedata(todos, goals))
        })
    }
}