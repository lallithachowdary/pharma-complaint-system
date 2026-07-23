import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#000",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          AI Complaint Management System
        </Typography>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Box ml={2} display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: "#2563EB" }}>
            A
          </Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;