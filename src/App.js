import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<h1>Service Website</h1>
				<Routes>
					<Route path='/' exact />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
