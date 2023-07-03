import React from 'react'
import Card from './Card';

const CardList = (props) => {
    const { robots } = props;

    return (
        <>
            <div>

                {
                    robots.map((user, index) => {

                        return (
                            <Card
                                key={index}
                                id={robots[index].id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                            />
                        );
                    })
                }

            </div>
        </>
    )
}

export default CardList
