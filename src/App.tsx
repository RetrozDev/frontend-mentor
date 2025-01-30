import { Outlet, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	console.info(location);

	return (
		<div className="App">
			<Outlet />
		</div>
	);
}

export default App;
