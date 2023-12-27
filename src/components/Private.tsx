import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, setCredentials } from "@/lib/slices/authSlice";
import { useVerifyLoginQuery } from "@/lib/api/auth";

const Private = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { isSuccess } = useVerifyLoginQuery("");
  if (!isAuth) {
    if (isSuccess) dispatch(setCredentials(true));
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Private;
