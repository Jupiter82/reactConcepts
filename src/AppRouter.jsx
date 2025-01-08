import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContexxtComponent from "./ContexxtComponent";
import App from "./App";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/context" element={<ContexxtComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
