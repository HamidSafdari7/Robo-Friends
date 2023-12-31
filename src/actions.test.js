import {

    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants.js'

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('actions->setSearchField', () => {

    it('Should create an action to search robots', () => {
        const text = 'Hello world!';

        const expectedAction = {

            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

it('handle requesting robots API', () => {

    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }

    expect(action[0]).toEqual(expectedAction);
})