import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography>Sentence per day</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
