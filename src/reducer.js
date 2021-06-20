import * as actions from './actionType';
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    //resloved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })

        default:
            return state;
    }

    //******在reducer裡面的運算式，也可以使用if else來寫 */

    // if (action.type === 'bugAdded')
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resloved: false
    //         }
    //     ]
    // elseif(action.type === 'bugRemoved')
    // return state.filter(bug => bug.id !== action.payload.description)

}