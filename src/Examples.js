import { useCallback, useEffect, useRef, useState } from "react";



export default function App() {

    return (
        <>
            <Form />
        </>
    )
}


function Form() {
    const [text, updateText] = useState('');
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text; // Write it to the ref
    });

    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // Read it from the ref
        alert(currentText);
    }, [textRef]); // Don't recreate handleSubmit like [text] would do

    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <ExpensiveTree onSubmit={handleSubmit} />
        </>
    );
}


function ExpensiveTree({ onSubmit }) {


    return (
        <>
            <button onClick={onSubmit}>Submit</button>
        </>
    );
}