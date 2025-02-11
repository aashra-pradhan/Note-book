import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteHome from "../screens/NoteHome";
import NotePage from "../screens/NotePage";

const NoteRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<NoteHome />} />
          <Route path="/" element={<NoteHome />} />
          <Route path="/note/:noteid" element={<NotePage />} />

          <Route path="*" element={<>404 - given route not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NoteRoute;
