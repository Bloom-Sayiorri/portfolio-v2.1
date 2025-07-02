import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="App">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
