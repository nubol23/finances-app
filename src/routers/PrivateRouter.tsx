import React, { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  children: React.ReactNode;
};

const PrivateRouter: FC<Props> = (props) => {
  const session = useSelector((state: RootState) => state.auth.value);

  return session.accessToken ? <>{props.children}</> : <Navigate to="/login" />;
};

export default PrivateRouter;
