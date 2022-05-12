import React, { useEffect } from "react";


export default function App() {

    const _ref = React.useRef(null);

    return (
        <>
            <Input />

            <div>
                <h1>Focus from Parent</h1>
                <Input2 inputRef={_ref} />
                <button onClick={() => { _ref.current.focus(); }}>Focus from parent</button>
            </div>
            <br />
            <OuterClickExample />
        </>
    )

}


const Input = (props) => {

    const textInput = React.createRef(null);
    return (
        <>
            <input
                placeholder="Enter your name"
                ref={textInput}
            />
            <button
                onClick={() => {
                    textInput.current.focus();
                }}
            >focus</button>
        </>
    )
}


function Input2(props) {

    return <input ref={props.inputRef} />
}



//  mouse and pointer effect  


function OuterClickExample() {

    const [open, setOpen] = React.useState(false);
    const toggleContainer = React.createRef(null);

    function onClickHandler() {
        setOpen(!open);
    }

    function onClickOutsideHandler(e) {
        if (open && !toggleContainer?.current?.contains(e.target)) {
            setOpen(false);
        }
    }


    useEffect(() => {
        window.addEventListener("click", onClickOutsideHandler);
    })


    return (
        <div ref={toggleContainer}>
            <button onClick={onClickHandler}>Select an option</button>
            {open && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
    )
}