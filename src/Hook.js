import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


function UseEffectWithCleanup() {

    const [isToggleOn, setIsToggleOn] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            setIsToggleOn(!isToggleOn);
            console.log('setInterval');
        }, 1000)

        // comment this return function to see the difference
        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}


export default function App() {

    const [remove, setRemove] = useState(false);


    return (
        <>
            <Example />
            <p>=================================</p>
            <button onClick={() => setRemove(!remove)}>hide </button>
            {
                remove ? <UseEffectWithCleanup /> : null
            }
        </>
    )
}