import Header from "@/shared/Header";
import React from "react";

export default function MainLayout({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
