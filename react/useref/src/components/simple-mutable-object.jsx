
import { useEffect, useRef, useState } from "react";
function SimpleMutableObject() {
  const count = useRef(0);
  console.log("count:", count);
  const [data, setData] = useState("");
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <h1> USE REF</h1>
      <p>
        Useref creates a mutable variable which will not re-render the component{" "}
      </p>
      <p>Easily we can access the DOM elements directly by using useref</p>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <p>Number of renders {count.current}</p>
    </>
  );
}

export default SimpleMutableObject;
