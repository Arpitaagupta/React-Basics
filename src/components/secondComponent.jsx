import React, { useRef, useState } from 'react';

//input field

/* 
  Use ref
  --> Use ref is a react hook using that we can take refrence from any element.
*/
function SecondComponent() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  return (
    <div>
      <input ref = {inputRef} type = "text"/> 
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item, index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  );
}

export default SecondComponent;
