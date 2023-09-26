import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";

export default function SentenceCard({ sentence }) {
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];
  return (
    <Card sx={{ minWidth: 275, width: "50vw" }}>
      <CardHeader title="Sentence of the Day" subheader={today}></CardHeader>
      <CardContent>
        <Typography>{sentence}</Typography>
        <form>
          <TextField
            variant="outlined"
            placeholder={"Type your translation here"}
            size="small"
            sx={{ width: 1 }}
          />
        </form>
      </CardContent>
    </Card>
  );
}
