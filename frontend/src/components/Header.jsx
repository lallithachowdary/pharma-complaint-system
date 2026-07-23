import { Box, Chip, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Log Customer Complaint
        </Typography>

        <Typography color="text.secondary">
          API & FDF Quality Assurance Module
        </Typography>
      </Box>

      <Chip
        label="Pending Triage"
        color="warning"
      />
    </Box>
  );
}

export default Header;