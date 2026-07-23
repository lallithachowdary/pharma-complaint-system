import { Paper, Typography } from "@mui/material";

function AIAnalysis() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        AI Analysis
      </Typography>

      <Typography mt={3}>
        Complaint Summary
      </Typography>

      <Typography mt={2}>
        Risk Classification
      </Typography>

      <Typography mt={2}>
        Root Cause
      </Typography>

      <Typography mt={2}>
        CAPA Recommendation
      </Typography>
    </Paper>
  );
}

export default AIAnalysis;