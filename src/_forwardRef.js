import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} />
    )
})


export default function App() {

    const _ref = React.useRef(null);

    return (
        <>
            <Input ref={_ref} />
            <button onClick={() => { _ref.current.focus(); }}>Focus from parent</button>
            <br />
            <br />
            <MouseTracker />
            <br />
            <br />
            <WebComponent name="React" />
        </>
    )
}



function MouseTracker(props) {

    const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMouse({ x: event.clientX, y: event.clientY });
    }

    return (
        <div
            style={{
                minHeight: '300px',
                backgroundColor: '#c5a4c1',
            }}
            onMouseMove={handleMouseMove}>
            <p>The current mouse position is:</p>
            <p>X: {mouse.x}, Y: {mouse.y}</p>
        </div>

    )
}



function WebComponent(props) {

    return (
        <div>
            Hello <x-search>{props.name}</x-search>!
        </div>
    )
}