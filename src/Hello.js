import React from "react";


const Hello = (props) => {

    return (

        <>

            <h1>Hello World !</h1>

            <p>
                {props.greeting}
            </p>

        </>
    );
}

export default Hello;