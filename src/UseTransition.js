import { useTransition, useState } from "react";


export default function App() {

    const [count, setCount] = useState(0);
    const res = useTransition()

    console.log(res)

    function handleCount() {
        // startTransition(() => {
        //     setCount(count + 1);
        // })
    }

    return (
        <>
            {/* <p>Count {count} {loading && <>loading...</>}</p> */}
            <button onClick={handleCount}>Count</button>
        </>
    )
}