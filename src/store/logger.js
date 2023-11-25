import { actions } from ".";


function logger(reducer) {
    return (prev, action) => {
        const nextState = reducer(prev, action)

        return nextState
    }
}

export default logger