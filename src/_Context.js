import React from 'react';

const defaultValue = {
    name: 'shahul',
    age: '23',
    city: 'malappuram'
}

const Context = React.createContext(defaultValue);

export default function App() {

    const [state, setState] = React.useState({
        ...defaultValue
    })

    function changeState(key, value) {
        setState(state => ({
            ...state,
            [key]: value
        }))
    }

    return (
        <Context.Provider value={{
            ...state,
            changeState
        }} >
            <Consumer />
        </Context.Provider>
    )
}


function Consumer() {

    return (
        <Context.Consumer>

            {
                value => {
                    return (
                        <>
                            <div>
                                <h1>{value.name}</h1>
                                <h1>{value.age}</h1>
                                <h1>{value.city}</h1>
                            </div>
                            <Changer />
                        </>

                    )
                }
            }


        </Context.Consumer>
    )
}


function Changer() {

    const { changeState } = React.useContext(Context);

    return (
        <div>
            <input placeholder='Name' type="text" onChange={(e) => {
                changeState('name', e.target.value)
            }} />
            <input placeholder='Age' type="number" onChange={(e) => { changeState('age', e.target.value) }} />
            <input placeholder='Place' type="text" onChange={(e) => { changeState('city', e.target.value) }} />
        </div>
    )
}