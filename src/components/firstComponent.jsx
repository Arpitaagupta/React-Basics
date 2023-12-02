//import React from 'react';
// In D structuring instead of props we pass name of props inside curly braces that we have used
function FirstComponent({data,fn}) {
  return (
    <div>
      {/* or use --> props.data */}
      <button onClick={()=>{fn(10)}}>Set 10</button>
      {data}
    </div>
  );
}

export default FirstComponent;
