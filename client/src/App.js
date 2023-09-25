import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  const [data, setData] = useState("Hi World");
  useEffect(() => {
    axios.get("/api/data")
    .then((response) => {
      setData(response)
    })
  },[])

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
