const { useState, useMemo } = require("react");

const Memo = () => {
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);
    const handleIncrease = () => {
        setCounter(counter+1)
    }
    const getCounter = (count) => {
        console.log("CALLING THE GETCOUNTER FUNCTION")
        for (let i = 0; i < 100000000; i++){
            
        }
        return count;
    }
    const getCounterValue = useMemo(() => {
        return getCounter(counter)
    },[counter])
    return (
        <>
            <button onClick={handleIncrease}>Increase</button>
            <div>New Value : {getCounterValue}</div>
            <div>
                <button onClick={()=>setShow(!show)}>
                    {!show ? "Click me please":"Clicked Me!!"}
                </button>
            </div>
        </>
    )
}
export default Memo;