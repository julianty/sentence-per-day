import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("Hi World");
  useEffect(() => {
    axios.get("http://localhost:3000/api/data").then((response) => {
      console.log(response);
      setData(response.data.text);
    });
  }, []);

  return <div className="App">{data}</div>;
}

export default App;
