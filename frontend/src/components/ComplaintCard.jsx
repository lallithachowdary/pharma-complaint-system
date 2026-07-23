import { Card, CardContent, Typography, Chip } from "@mui/material";

function ComplaintCard({ complaint }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {complaint.product_name}
        </Typography>

        <Typography>
          Customer: {complaint.customer_name}
        </Typography>

        <Typography>
          Batch: {complaint.batch_number}
        </Typography>

        <Typography sx={{ marginTop: 1 }}>
          {complaint.complaint}
        </Typography>

        <Chip
          label={complaint.status}
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </CardContent>
    </Card>
  );
}

export default ComplaintCard;