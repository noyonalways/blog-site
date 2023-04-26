import ThemeButton from "@/components/ThemeButton";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	

	return (
		<header className="backdrop-blur-2xl sticky top-0 z-50">
			<div className="h-2 bg-gradient-to-tr from-primary-500 via-primary-500 to-primary-600"></div>
			<nav className="container mx-auto flex flex-wrap justify-between items-center py-4">
				<div className="flex items-center justify-between  w-full md:w-auto px-2 md:px-0">
					<Link href="/" className="font-semibold text-2xl mr-6 text-gray-500 dark:text-gray-100">
						Blog Site
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
					} md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto mt-4 md:mt-0`}
				>
					<li>
						<Link
							href="/"
							className="block md:inline-block hover:text-white dark:text-gray-400 dark:hover:text-gray-300 py-2 px-2 md:px-4 w-full hover:bg-primary-500/[.9] rounded"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/blog"
							className="block md:inline-block hover:text-white dark:text-gray-400 dark:hover:text-gray-300 py-2 px-2 md:px-4 w-full hover:bg-primary-500/[.9] rounded"
						>
							Blog
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="block md:inline-block hover:text-white dark:text-gray-400 dark:hover:text-gray-300 py-2 px-2 md:px-4 w-full hover:bg-primary-500/[.9] rounded"
						>
							About
						</Link>
					</li>
				</ul>
				<ThemeButton className={"hidden md:block"} />
			</nav>
		</header>
	);
}
