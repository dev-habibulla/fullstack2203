import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import Registration from "./pages/Registration";
import Otp from "./pages/Otp";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/otp" element={<Otp />} />
     

      
    </Route>
  )
);



function App() {

  return (
  <>
    <RouterProvider router={router} />
  </>
  );
}

export default App;
