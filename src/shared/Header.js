import ThemeButton from "@/components/ThemeButton";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import ActiveLink from "@/components/ActiveLink";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const listLinks = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		},
	];

	return (
		<header className="backdrop-blur-2xl sticky top-0 z-50">
			<div className="h-2 bg-gradient-to-tr from-primary-500 via-primary-500 to-primary-600"></div>
			<nav className="container mx-auto flex flex-wrap justify-between items-center py-4">
				<div className="flex items-center justify-between  w-full md:w-auto px-2 md:px-0">
					<Link
						href="/"
						className="font-semibold text-2xl mr-6 text-gray-500 dark:text-gray-100"
					>
						Blogism
					</Link>
					<div className="flex space-x-2">
						<div className="md:hidden">
							<ThemeButton />
						</div>
						<button
							className="block md:hidden text-gray-500 dark:text-gray-400"
							onClick={() => setShowMenu(!showMenu)}
						>
							{showMenu ? (
								<IoCloseOutline size={30} />
							) : (
								<IoMenuOutline size={30} />
							)}
						</button>
					</div>
				</div>
				<ul
					className={`${
						showMenu ? "flex" : "hidden"
					} md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto mt-4 md:mt-0 md:space-x-2`}
				>
					{listLinks.map((link, index) => (
						<li key={index}>
							<ActiveLink href={link.href}>{link.label}</ActiveLink>
						</li>
					))}
				</ul>
				<ThemeButton className={"hidden md:block"} />
			</nav>
		</header>
	);
}
