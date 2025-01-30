import { Outlet, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<Outlet />
		</div>
	);
}

export default App;
