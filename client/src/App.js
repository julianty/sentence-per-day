import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SentenceCard from "./components/SentenceCard";
import SummaryCard from "./components/SummaryCard";

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
      <Grid container>
        <Grid item md={3}>
          <SummaryCard />
        </Grid>
        <Grid item md={6}>
          <Stack alignItems={"center"} sx={{ margin: "16px" }} spacing={2}>
            <SentenceCard sentence={activeSentence} />
            <SentenceCard sentence={activeSentence} />
            <SentenceCard sentence={activeSentence} />
          </Stack>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}

export default App;
