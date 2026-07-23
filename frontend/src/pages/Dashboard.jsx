import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

function Dashboard() {
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 4, background: "#f5f7fb", minHeight: "100vh" }}>
          <Typography variant="h4" mb={3}>
            Dashboard
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary">
                    Total Complaints
                  </Typography>

                  <Typography variant="h3">
                    24
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary">
                    High Risk
                  </Typography>

                  <Typography variant="h3" color="error">
                    6
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary">
                    Open Cases
                  </Typography>

                  <Typography variant="h3" color="primary">
                    10
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ mt: 4, p: 3 }}>
            <Typography variant="h5">
              Recent Complaints
            </Typography>

            <Typography mt={2}>
              • Damaged tablets received by customer
            </Typography>

            <Typography>
              • Broken blister packaging
            </Typography>

            <Typography>
              • Incorrect labeling reported
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;