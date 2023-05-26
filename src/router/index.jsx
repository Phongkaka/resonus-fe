import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Results from "../app/Result";
import Guide from "../app/Camera/guide";
import Layout from "../components/layout";
import Upload from "../app/Upload";
import Camera from "../app/Camera/camera";
import CameraLayout from "../components/layout/camera";
import Home from "../app/Home";

const AppRouter = () => {
  return (
    <div className="font-bold text-textColor tracking-wide h-full w-full">
      <Router>
        <Routes>
          <Route
            element={<CameraLayout />}
            path="camera"
          >
            <Route
              element={<Guide />}
              path="start"
            />
            <Route
              element={<Camera />}
              path=""
            />
          </Route>
          <Route
            element={<Upload />}
            path="upload"
          ></Route>
          <Route
            element={<Layout />}
            path=""
          >
            <Route
              element={<Results />}
              path="result"
            />
            <Route
              element={<Home />}
              path=""
            />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        autoClose={2000}
        position="top-center"
      />
    </div>
  );
};
export default AppRouter;
