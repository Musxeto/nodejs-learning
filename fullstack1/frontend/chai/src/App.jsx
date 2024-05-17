import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [chai, setChai] = useState([]);
  useEffect(() => {
    axios
      .get("/api/chai")
      .then((respone) => {
        setChai(respone.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Chai Full Stack</h1>
      <p>Chai : {chai.length}</p>

      {chai.map((tea, index) => (
        <div key={tea.id}>
          <h3>{tea.title}</h3>
          <p>{tea.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
