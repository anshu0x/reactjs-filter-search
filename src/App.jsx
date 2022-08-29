import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    setinputvalue(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={handleInput} value={inputvalue} />
      </form>
      {data
        .filter((value) => {
          if (inputvalue == "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(inputvalue.toLowerCase())
          ) {
            return value;
          }
        })
        .map((d) => {
          return (
            <div key={d.id}>
              {d.id} {d.title}
            </div>
          );
        })}
    </div>
  );
};

export default App;
