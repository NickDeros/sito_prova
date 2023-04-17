import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePages";

const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path= "/home" element={<HomePage></HomePage>} />
            <Route path="/404" element={<ErrorPage></ErrorPage>} />
            <Route path="*" element={<ErrorPage></ErrorPage>} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
