import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/country/:name",
				element: <Details />,
			},
		],
	},
]);

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
