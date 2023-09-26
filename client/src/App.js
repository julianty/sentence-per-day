import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import SentenceCard from "./components/SentenceCard";

function App() {
  const [activeSentence, setActiveSentence] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/api/data").then((response) => {
      console.log(response.data.sentence.text);
      setActiveSentence(response.data.sentence.text);
    });
  }, []);

  return (
    <Box>
      <Navbar />
      <Stack alignItems={"center"} sx={{ margin: "16px" }} spacing={2}>
        <SentenceCard sentence={activeSentence} />
        <SentenceCard sentence={activeSentence} />
        <SentenceCard sentence={activeSentence} />
      </Stack>
    </Box>
  );
}

export default App;
