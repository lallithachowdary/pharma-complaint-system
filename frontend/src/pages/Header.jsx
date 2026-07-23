import { Box, Typography, Chip } from "@mui/material";

function Header() {
  return (
    <Box
      mb={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Log Customer Complaint
        </Typography>

        <Typography color="gray">
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