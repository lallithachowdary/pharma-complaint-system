import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        background: "#f5f5f5",
        borderRight: "1px solid #ddd",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Complaints" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="AI Analysis" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;