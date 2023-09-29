import React, { useEffect } from 'react'
// import Scroll from './Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './MainPage.css';
import ErrorBoundry from '../components/ErrorBoundry';



function MainPage({ searchField, onSearchChange, onRequestRobots, robots, isPending }) {

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



export default MainPage;
