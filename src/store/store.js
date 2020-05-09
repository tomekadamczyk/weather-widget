import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pointPositions from './reducers';

const initialState = {
    scrollingMoveDirection: {
        left: 'left',
        right: 'right'
    }
};
const middleware = [thunk];

const store = createStore(
    pointPositions, 
    initialState, 
    applyMiddleware(...middleware)
);


const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe();

export default store;