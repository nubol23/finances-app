import React from "react";
import "./login.scss";
import "../../../common/styles/form.scss";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import authApi from "../../../apis/authApi";
import jwtDecode from "jwt-decode";
import {AuthData, AuthResponse, TokenData} from "../../../common/types/authTypes";
import {AxiosResponse} from "axios";
import {useDispatch} from "react-redux";
import {login} from "../../../store/slices/authSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {

    authApi
      .post("users/token/", {
        email: values.email,
        password: values.password,
      })
      .then((response: AxiosResponse<AuthResponse>) => {
        const decoded = jwtDecode<TokenData>(response.data.access);
        const payload: AuthData = {
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
          issuedAt: decoded.iat,
          expiresAt: decoded.exp,
          userId: decoded.user_id,
          name: decoded.name,
          email: decoded.email,
        };
        dispatch(login(payload));
      })
      .catch((error) => {
        console.log("Credenciales inválidas");
      })

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
            {formik.isSubmitting ? (
              <LoadingButton fullWidth loading variant="outlined" />
            ) : (
              <Button fullWidth variant="outlined" type="submit">
                Login
              </Button>
            )}

            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/register")}
              disabled={formik.isSubmitting}
            >
              Registrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default LoginScreen;
