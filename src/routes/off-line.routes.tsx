import { Route, Routes } from "react-router-dom";
import SignIn from "@pages/sign-up.page";
import { Home } from "@pages/home.page";
import { Fragment } from "react";

export const OffLineRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignIn />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
