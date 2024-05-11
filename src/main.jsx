import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Components/Routes/Routes";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
