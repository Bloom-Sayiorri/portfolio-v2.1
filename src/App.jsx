import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<main className="">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
