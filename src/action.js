import * as actions from './actionType';

export const bugAdded = desc => ({
    type: actions.BUG_ADDED,
    payload: {
        description: desc
    }
});


export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        id //= id:id
        //js中key和value一樣的話可以省略只寫一個
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})
// export function bugAdded(desc) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: desc
//         }
//     }
// }