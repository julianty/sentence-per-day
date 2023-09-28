import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@mui/material";
import { red } from "@mui/material/colors";
export default function SummaryCard() {
  return (
    <Box sx={{ maxWidth: "250px", my: "16px", mx: "auto" }}>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>U</Avatar>}
          title={"User Name"}
        />
        <CardContent>
          <Typography>Streak: 9</Typography>
          <Typography># of Answers: 3</Typography>
          <Typography># of Likes: 3</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
