import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Routerprocess/Router";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Router} />);
