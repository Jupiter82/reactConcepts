import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContexxtComponent from "./ContexxtComponent";
import App from "./App";
import { ContexxtComponentSolu } from "./ContexxtComponentSolu";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/context" element={<ContexxtComponent />}></Route>
        <Route path="/contextSolution" element={<ContexxtComponentSolu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
