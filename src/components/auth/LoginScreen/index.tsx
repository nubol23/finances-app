import React from "react";
import "./login.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

type FormValues = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es requerido"),
  password: Yup.string().required("Requerido"),
});

const LoginScreen = () => {
  const handleLogin = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="center-container">
      <Paper elevation={2}>
        <form className="form-box" onSubmit={formik.handleSubmit}>
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
            label="Correo"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 4 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
