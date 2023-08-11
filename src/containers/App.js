import React, { useEffect } from 'react'
import { connect } from 'react-redux';
// import Scroll from './Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {

    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

function App({ searchField, onSearchChange, onRequestRobots, robots, isPending }) {

    useEffect(() => {

        onRequestRobots();

    }, []);

    const filteredRobots = robots.filter(robot => {

        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {

        return <h1>Loading</h1>
    } else {

        return (
            <>
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>

                    <SearchBox searchChange={onSearchChange} />

                    {/* <Scroll> */}
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                    {/* </Scroll> */}
                </div>

            </>
        )
    }



}



export default connect(mapStateToProps, mapDispatchToProps)(App);
