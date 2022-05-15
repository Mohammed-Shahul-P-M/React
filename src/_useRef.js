import { useRef } from "react";


export default function App() {

    const ref = useRef(null);
    const ref2 = useRef(null);

    return (
        <div>
            <input type="text" ref={ref} />
            <button onClick={() => console.log(ref.current.value)} ref={ref2}>log </button>
            <button onClick={() => {
                ref.current.focus()
                ref2.current.click()
            }}>focus</button>
        </div>
    )

}