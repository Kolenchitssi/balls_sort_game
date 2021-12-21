import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router";

type Props = {
  className: String;
};

const AppRouter: FC<Props> = ({ className }) => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.element className={className} />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRouter;
