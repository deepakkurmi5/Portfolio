import React from "react";
import "styles/App.css";
import { Route, Routes } from "react-router-dom";
import Main from "view/Main";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
  );
}
