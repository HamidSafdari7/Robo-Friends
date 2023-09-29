import {

    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from './constants.js'

import * as reducers from './reducers';


describe('searchRobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('Should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})


describe('requestRobots', () => {

    const initialStateRobots = {

        isPending: false,
        robots: [],
        error: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('Should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        }
        )
    })

    it('Should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{

                id: 7,
                name: 'cr7',
                gmail: 'cr7@gmail.com'

            }]
        })).toEqual({
            robots: [
                {

                    id: 7,
                    name: 'cr7',
                    gmail: 'cr7@gmail.com'

                }
            ],
            isPending: false,
            error: ''
        }
        )
    })


    it('Should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Erroooooor!!!!!!!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'Erroooooor!!!!!!!'
        }
        )
    })
})