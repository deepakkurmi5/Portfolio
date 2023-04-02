import React from "react";
import "styles/App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "view/MainPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  );
}
