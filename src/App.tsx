import AppRouter from "./router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { Toaster } from "@/components/ui/sonner"

function Musha() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
}

export default Musha;
