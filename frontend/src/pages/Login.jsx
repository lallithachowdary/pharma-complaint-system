import { Box, Button, Paper, TextField, Typography } from "@mui/material";

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f6f8"
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={3}>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;