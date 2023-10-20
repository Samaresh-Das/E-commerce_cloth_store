import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./router/root.tsx";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ErrorPage from "./error-page.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Cart from "./Components/Cart/Cart.tsx";

import { Provider } from "react-redux";
import { store } from "./Components/store/store.ts";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: (
      <div className="flex justify-center md:mt-[100px]">
        <SignIn redirectUrl="/" signUpUrl="/sign-up" />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: (
      <div className="flex justify-center md:mt-[100px]">
        <SignUp redirectUrl="/" signInUrl="/auth" />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
