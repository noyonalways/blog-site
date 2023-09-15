import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="border-t border-t-gray-200 dark:border-t-gray-200/10 py-10 relative overflow-hidden">
			<div className="container ">
				<div className="w-[250px] h-[250px] bg-violet-500 rounded-full absolute -top-36 left-1/2 -translate-x-1/2 filter blur-3xl opacity-20 -z-10"></div>
				<div className="flex md:flex-row flex-col items-center md:justify-between space-y-5 md:space-y-0" >
					<h3 className="text-base font-medium">
						&copy; Blogism {new Date().getFullYear()}
					</h3>
					<ul className="flex items-center space-x-5">
						<li>
							<a
								className="text-xl dark:hover:text-gray-50 hover:text-gray-700"
								href="https://youtube.com/@deskofnoyon"
                                target="_blank"
							>
								<FaYoutube />
							</a>
						</li>
						<li>
							<a
								className="text-xl dark:hover:text-gray-50 hover:text-gray-700"
								href="https://facebook.com/noyonalways"
                                target="_blank"
							>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a
								className="text-xl dark:hover:text-gray-50 hover:text-gray-700"
								href="https://linkedin.com/in/noyonalways"
                                target="_blank"
							>
								<FaLinkedin />
							</a>
						</li>
					</ul>
					<div className="flex items-center space-x-4">
						<a
							className="font-medium dark:hover:text-gray-50 hover:text-gray-700"
							href="#"
						>
							Subscribe
						</a>
						<a
							className="font-medium dark:hover:text-gray-50 hover:text-gray-700"
							href="#"
						>
							Latest Blogs
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
