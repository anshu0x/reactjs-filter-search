import React,{memo} from "react";

function Memoj({count}) {
  console.log("hello from memoi");
  return (
    <>
      <p>memo</p>
      <button onClick={count}>count memo  </button>
    </>
  );
}

export default memo(Memoj);
