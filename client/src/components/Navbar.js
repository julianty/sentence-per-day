import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography>Setence per day</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
