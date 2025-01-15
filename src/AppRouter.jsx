import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContexxtComponent from "./ContexxtComponent";
import App from "./App";
import { ContexxtComponentSolu } from "./ContexxtComponentSolu";
import ImageUpload from "./assets/pages/ImageUpload/ImageUpload";
import ImageList from "./assets/pages/ImageUpload/ImageList";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/context" element={<ContexxtComponent />}></Route>
        <Route path="/imageList" element={<ImageList />}></Route>
        <Route path="/uploadImage" element={<ImageUpload />}></Route>
        <Route path="/contextSolution" element={<ContexxtComponentSolu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
