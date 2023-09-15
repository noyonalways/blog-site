import React from "react";
import BlogCard from "./BlogCard";
import MainLayout from "@/layouts/MainLayout";

export default function Blog() {
	return (
		<MainLayout>
			<div className="py-10 px-3 md:px-0">
				<div className="container">
					<div className="text-center mb-10 font-inter">
						<h1 className="md:text-4xl mb-4">Popular Blogs</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad consectetur dolores incidunt dignissimos eos.</p>
					</div>
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</ul>
				</div>
			</div>
		</MainLayout>
	);
}
