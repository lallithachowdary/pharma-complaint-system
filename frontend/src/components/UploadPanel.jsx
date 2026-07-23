import { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
  LinearProgress,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import API from "../services/api";

function UploadPanel() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const uploadFile = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setProgress(30);

      const res = await API.post("/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("========== AI RESPONSE ==========");
      console.log(res.data);
      console.log(JSON.stringify(res.data, null, 2));

      setResult(res.data);
      setProgress(100);

      alert("AI Extraction Completed");
    } catch (err) {
      console.error("Upload Error:", err);

      if (err.response) {
        console.log("Backend Response:", err.response.data);
      }

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        AI Complaint Intake Assistant
      </Typography>

      <Box
        sx={{
          border: "2px dashed #ccc",
          borderRadius: 2,
          p: 5,
          textAlign: "center",
          mb: 2,
        }}
      >
        <CloudUploadIcon
          sx={{
            fontSize: 50,
            color: "#1976d2",
          }}
        />

        <Typography mt={2}>
          Drag & Drop Complaint PDF
        </Typography>

        <Typography variant="body2">
          or click to browse
        </Typography>

        <Button
          component="label"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Browse File

          <input
            hidden
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={uploadFile}
          />
        </Button>
      </Box>

      {loading && (
        <>
          <Typography gutterBottom>
            Uploading...
          </Typography>

          <LinearProgress
            variant="determinate"
            value={progress}
          />
        </>
      )}

      {result && (
        <Box mt={3}>
          <Typography variant="h6">
            AI Extracted Data
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={12}
            value={JSON.stringify(result, null, 2)}
            sx={{ mt: 2 }}
          />
        </Box>
      )}
    </Paper>
  );
}

export default UploadPanel;