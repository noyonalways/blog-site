import React from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
	return (
		<div className="py-10 px-3 md:px-0">
			<div className="container">
				<h1 className="mb-6">Blogs</h1>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</ul>
			</div>
		</div>
	);
}
