import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

type CardProps = {
	title: string | undefined;
};

const Card = ({ title }: CardProps) => {
	const [hasLiked, setHasLiked] = useState(false);

	return (
		<div className="card border bg-slate-600/40 border-primary my-3 rounded-2xl">
			<h2>{title}</h2>
			<p>This is a reusable card component.</p>
			<Button
				className="btn btn-primary mt-2"
				onClick={() => setHasLiked(!hasLiked)}
			>
				{hasLiked ? "yeah BOII" : "like dat shih"}
			</Button>
		</div>
	);
};

const App = () => {
	return (
		<div className="App">
			<header>
				<h1>Welcome to My React App</h1>
				<p>This is a simple React application.</p>
			</header>
			<main>
				<Card title="Peaky Blinders" />
				<Card title="IT" />
				<Card title="Ride Along" />
			</main>
		</div>
	);
};

export default App;
