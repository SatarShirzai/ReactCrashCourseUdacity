import {
    RECIVE_DATA
} from '../actions/shared'

export default function loading(state = true, action) {
    switch (action.type) {
        case RECIVE_DATA:
            return false
        default:
            return state
    }
}