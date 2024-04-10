import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import SignupPage from "./Pages/SignupPage/SignupPage.jsx";
import CreateProfile from "./Pages/CreateProfile/CreateProfile.jsx";
import ChooseRole from "./Pages/ChooseReason/ChooseRole.jsx";
import VerifyEmail from "./Pages/VerifyPage/VerifyEmail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/createProfile" element={<CreateProfile />}></Route>
      <Route path="/chooseRole" element={<ChooseRole />}></Route>
      <Route path="/verifyEmail" element={<VerifyEmail />}></Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
