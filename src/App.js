import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./pages/spash.js";
import Donate from "./pages/donate.js";
import Layout from "./components/layout";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/" exact component={Splash} />
						<Route path="/donate" component={Donate} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
