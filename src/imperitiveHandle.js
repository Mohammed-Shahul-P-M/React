import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => inputRef.current.focus()
        }
    })

    return <input ref={inputRef} placeholder='focus from parent' />

}

const FancyInput = forwardRef(Input);


export default function App() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    return (
        <div>
            <FancyInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>focus</button>
            <p>Normal</p>
            <NormalInput ref={inputRef2} />
            <button onClick={() => inputRef2.current.focus()}>focus</button>
        </div>
    )


}


const NormalInput = forwardRef(function Input(props, ref) {

    return <input ref={ref} placeholder='focus from parent' />

})