import React from "react";
import "./login.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";

const LoginScreen = () => {
  return (
    <div className="center-container">
      <Paper elevation={2}>
        <form className="form-box">
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ marginBottom: 3 }}
          >
            Econ App 💵
          </Typography>

          <TextField
            id="email"
            label="email"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 4 }}
          />

          <TextField
            id="password"
            label="password"
            type="password"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 4 }}
          />

          <div className="row">
            <Button fullWidth variant="outlined" type="submit">
              Login
            </Button>

            <Button fullWidth variant="outlined">
              Registrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default LoginScreen;
