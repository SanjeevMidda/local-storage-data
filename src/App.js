import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [userData, setUserData] = useState(localStorage);
  const [userInput, setUserInput] = useState("");
  const [getData, setGetData] = useState(() => {
    let data = localStorage.getItem("one");
    let returnData = data;

    return returnData;
  });

  let setItem = () => {
    localStorage.setItem(userInput, userInput);
  };

  console.log(JSON.parse(localStorage));

  // useEffect(() => {
  //   console.log(localStorage);
  // }, [userData]);

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <div className="addItem">
        <h1
          onClick={() => {
            setUserData([...userData, userInput]);
            setItem();
            setUserInput("");
          }}
        >
          +
        </h1>
      </div>

      {getData}
    </div>
  );
}

export default App;
