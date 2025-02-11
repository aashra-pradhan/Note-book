import React from "react";
import "./App.css";
import NoteHome from "./screens/NoteHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteRoute from "../src/routes/NoteRoute";
function App() {
  return (
    <>
      <NoteRoute />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
