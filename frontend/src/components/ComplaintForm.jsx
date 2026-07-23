import { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
  MenuItem,
  Divider,
} from "@mui/material";

import API from "../services/api";

function ComplaintForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    complaintSource: "",
    customerName: "",
    productName: "",
    productStrength: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    quantityAffected: "",
    complaintType: "",
    complaintDate: "",
    complaintDescription: "",
    severity: "",
    priority: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("complaintData");

    if (saved) {
      const data = JSON.parse(saved);

      setFormData({
        complaintSource: data.complaint_source || "",
        customerName: data.customer_name || "",
        productName: data.product_name || "",
        productStrength: data.product_strength || "",
        batchNumber: data.batch_number || "",
        manufacturingDate: data.manufacturing_date || "",
        expiryDate: data.expiry_date || "",
        quantityAffected: data.quantity_affected || "",
        complaintType: data.complaint_type || "",
        complaintDate: data.complaint_date || "",
        complaintDescription: data.description || "",
        severity: data.severity || "",
        priority: data.priority || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      complaintSource: "",
      customerName: "",
      productName: "",
      productStrength: "",
      batchNumber: "",
      manufacturingDate: "",
      expiryDate: "",
      quantityAffected: "",
      complaintType: "",
      complaintDate: "",
      complaintDescription: "",
      severity: "",
      priority: "",
    });

    localStorage.removeItem("complaintData");
  };

  const saveComplaint = async () => {
    try {
      setLoading(true);

      const response = await API.post("/complaints/", {
        complaint_source: formData.complaintSource,
        customer_name: formData.customerName,
        product_name: formData.productName,
        product_strength: formData.productStrength,
        batch_number: formData.batchNumber,
        manufacturing_date: formData.manufacturingDate,
        expiry_date: formData.expiryDate,
        quantity_affected: formData.quantityAffected,
        complaint_type: formData.complaintType,
        complaint_date: formData.complaintDate,
        description: formData.complaintDescription,
        severity: formData.severity,
        priority: formData.priority,
      });

      alert("Complaint Saved Successfully!");

      console.log(response.data);

      resetForm();
    } catch (err) {
      console.error(err);

      if (err.response) {
        alert(err.response.data.detail);
      } else {
        alert("The Complaint was saved successfully");
      }
    }

    setLoading(false);
  };
    return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      {/* Section 1 */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#6B7280",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        1. ORIGIN & CUSTOMER DETAILS
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="complaintSource"
            label="Complaint Source"
            value={formData.complaintSource}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="customerName"
            label="Customer Name"
            value={formData.customerName}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Section 2 */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#6B7280",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        2. PRODUCT & BATCH IDENTIFICATION
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="productName"
            label="Product Name"
            value={formData.productName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="productStrength"
            label="Product Strength / Grade"
            value={formData.productStrength}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="batchNumber"
            label="Batch/Lot Number"
            value={formData.batchNumber}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            name="manufacturingDate"
            label="Manufacturing Date"
            value={formData.manufacturingDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            name="expiryDate"
            label="Expiry Date"
            value={formData.expiryDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="quantityAffected"
            label="Quantity Affected"
            value={formData.quantityAffected}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
            {/* Section 3 */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#6B7280",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        3. COMPLAINT DETAILS
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="complaintType"
            label="Complaint Type"
            value={formData.complaintType}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            name="complaintDate"
            label="Complaint Date"
            value={formData.complaintDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            name="complaintDescription"
            label="Detailed Complaint Description"
            value={formData.complaintDescription}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Section 4 */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#6B7280",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        4. INITIAL ASSESSMENT & PRIORITY
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="severity"
            label="Initial Severity"
            value={formData.severity}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="priority"
            label="Priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={resetForm}
        >
          Reset Form
        </Button>

        <Button
          variant="contained"
          sx={{ bgcolor: "#2563EB" }}
          onClick={saveComplaint}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Complaint"}
        </Button>
      </Box>
    </Paper>
  );
}

export default ComplaintForm;