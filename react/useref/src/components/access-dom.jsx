import { useRef, useState } from "react"

const AccessDom = () => {
    const [data, setData] = useState('');
    const inputElementRef = useRef();
    const handleStyle = () => {
        inputElementRef.current.focus();
        inputElementRef.current.style.backgroundColor ='red';
    }
    return (
        <>
            <input type="text" value={data} ref={inputElementRef} onChange={(e) => setData(e.target.value)} />
            <button onClick={handleStyle}>Focus Input</button>
        </>
    )
}
export default AccessDom;