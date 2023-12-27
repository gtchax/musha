import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./components/Private";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Private />}></Route>
    </Routes>
  );
};

export default AppRouter;
