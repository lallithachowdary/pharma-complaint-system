import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "#0F172A",
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          p: 3,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        AIVOA
      </Typography>

      <List>

        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#fff" }} />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/complaint")}>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: "#fff" }} />
          </ListItemIcon>

          <ListItemText primary="Complaint Intake" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/analysis")}>
          <ListItemIcon>
            <SmartToyIcon sx={{ color: "#fff" }} />
          </ListItemIcon>

          <ListItemText primary="AI Analysis" />
        </ListItemButton>

      </List>
    </Box>
  );
}

export default Sidebar;