import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css"
//Main
import App from "./App.tsx";
import Home from "./Home.tsx";

//Projects 
import ProjectPage from "./projects/ProjectPage.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path:"/projects",
				element: <ProjectPage />,
				children: [
					{
						// Todo
					}
				]
			}
		],
	},
]);

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
