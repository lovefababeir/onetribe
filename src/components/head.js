import React from "react";
import { Helmet } from "react-helmet";

const Head = props => {
	const { title } = props;

	return (
		<Helmet>
			<html lang="en" />
			<title>{`${title ? title + " | " : ""} #OneTribe`}</title>
			<meta
				name="description"
				content={
					"The world needs our superheros, but most importantly it needs you and me. Together we can make sure the world is safer place. We all have our jobs to do, so let's help our super heros do their's"
				}
			/>
		</Helmet>
	);
};

export default Head;
