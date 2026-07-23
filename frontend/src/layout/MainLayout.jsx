import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <Box sx={{ height: "100vh", overflow: "hidden", bgcolor: "#F5F7FB" }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <Box sx={{ display: "flex", height: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;