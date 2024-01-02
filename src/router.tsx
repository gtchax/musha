import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./components/Private";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AddPlace from "./components/AddPlace";
import Place from "./pages/Place";

const AppRouter = () => {
  const onBlur = () => {
    document.title = "We miss you | Musha";
  };
  const onFocus = () => {
    document.title = "Musha";
  };

  useEffect(() => {
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/places" element={<Place />} />

      <Route element={<Private />}></Route>
    </Routes>
  );
};

export default AppRouter;
