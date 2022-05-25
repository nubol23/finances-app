import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  children: React.ReactNode;
};

const PublicRouter: FC<Props> = (props) => {
  const session = useSelector((state: RootState) => state.auth.value);

  return session.accessToken ? <Navigate to="/home" /> : <>{props.children}</>;
};

export default PublicRouter;
