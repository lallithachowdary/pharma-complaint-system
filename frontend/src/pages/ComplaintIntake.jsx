import MainLayout from "../layout/MainLayout";
import Header from "../components/Header";
import ComplaintForm from "../components/ComplaintForm";
import UploadPanel from "../components/UploadPanel";
import { Box } from "@mui/material";

function ComplaintIntake() {
  return (
    <MainLayout>
      <Header />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 2 }}>
          <ComplaintForm />
        </Box>

        <Box sx={{ flex: 1 }}>
          <UploadPanel />
        </Box>
      </Box>
    </MainLayout>
  );
}

export default ComplaintIntake;