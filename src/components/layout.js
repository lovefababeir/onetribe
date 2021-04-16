import React from "react";
import Header from "../components/header.js";
import Head from "../components/head.js";
import Footer from "../components/footer.js";
import "../components/layout.scss";

const Layout = props => {
	const { page, children, title, id } = props;
	return (
		<>
			<Head title={title} />
			<Header page={page} />
			<main className={`siteContent ${page || ""}`} id={id}>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
