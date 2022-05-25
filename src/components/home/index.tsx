import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import api from "../../apis/api";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(":D");

    api.get("users/test/").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
