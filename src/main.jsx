import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Pages 
import Home from './page/Home.jsx';
import ProductDetails from './page/ProductDetails.jsx';
import SearchQuery from './page/SearchQuery.jsx';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, 
  
  {
    path: "/product/:id",
    element: <ProductDetails />,
  }, 
  {
    path: "/search",
    element: <SearchQuery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);