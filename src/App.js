import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./pages/spash.js";
import Donate from "./pages/donate.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Splash} />
					<Route path="/donate" component={Donate} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
