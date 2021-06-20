import store from './store';
import * as actions from './actionType';
import { bugAdded, bugRemoved, bugResolved } from './action';
//利用store.subscribe
const unSubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

unSubscribe();

//store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));

console.log(store.getState());