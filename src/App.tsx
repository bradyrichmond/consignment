import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Clients from './features/clients';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clients />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
