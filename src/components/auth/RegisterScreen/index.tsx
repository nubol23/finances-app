import React from "react";
import "../../../common/styles/form.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(8, "Contraseña demasiado corta")
    .required("Requerido"),
  confirmPassword: Yup.string().required("Requerido"),
});

const validateRegisterForm = (values: FormValues) => {
  let errors = {};
  if (values.password !== values.confirmPassword) {
    errors = {
      ...errors,
      password: "Las contraseñas no coinciden",
      confirmPassword: "Las contraseñas no coinciden",
    };
  }

  return errors;
};

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleRegister = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    validate: validateRegisterForm,
    onSubmit: handleRegister,
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
            Registro
          </Typography>

          <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

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
            sx={{ marginBottom: 2 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            id="confirmPassword"
            label="Confirmar contraseña"
            type="password"
            variant="outlined"
            size="small"
            sx={{ marginBottom: 4 }}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <div className="row">
            {formik.isSubmitting ? (
              <LoadingButton fullWidth loading variant="outlined" />
            ) : (
              <Button fullWidth variant="outlined" type="submit">
                Registrar
              </Button>
            )}

            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/login")}
              disabled={formik.isSubmitting}
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterScreen;
