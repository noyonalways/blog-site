import React from "react";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="px-2 md:px-0 relative overflow-hidden">
			<div className="absolute h-14 w-[600px] rotate-[45deg] rounded-3xl bg-purple-600 opacity-30  filter -bottom-5 lg:bottom-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100 blur-2xl"></div>
			<div className="absolute  h-20 w-[600px] rotate-[45deg] rounded-3xl bg-primary-500 opacity-10  filter bottom-14  lg:bottom-32 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30  xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100 blur-2xl"></div>
			<div className="container">
				<div className="min-h-main -mt-20 mb-20 flex flex-col justify-center fade-in-start">
					<div className="max-w-2xl">
						<h2 className="text-4xl">Hi!</h2>
						<h1 className="text-5xl md:text-6xl mb-5 ">
							You can call me{" "}
							<span className="inline-block transition-colors bg-gradient-to-tr from-primary-500 via-primary-500 to-primary-600/40   dark:bg-none dark:text-primary-500 tracking-normal rounded-sm px-2">
								Noyon
							</span>
						</h1>
						<p className="mb-5">
							You write to teach React using mental models, helping readers
							better understand fundamental concepts by breaking them down and
							rebuilding them.
						</p>
						<div className="flex space-x-4 mb-5">
							<Link href="/blog" className="relative gruop">
								<div className="bg-gradient-to-tr from-primary-500 to-primary-600 inset-[4px] blur-md absolute"></div>
								<div className="btn">Read the blogs</div>
							</Link>
							<a href="" className="btn">
								Learn more about me
							</a>
						</div>
						<div className="flex space-x-3 text-sm">
							<a
								href="https://drive.google.com/u/0/uc?id=1uPpZ0Ma0ovSiK3ZQvYJVd_iN4ggWRD6F&export=download"
								className="hover:text-gray-700 dark:hover:text-gray-100 flex items-center space-x-1"
							>
								<HiClipboardDocumentList size={20} />
								<span>Resume</span>
							</a>
							<a
								target="_blank"
								href="https://twitter.com/noyonalways"
								className="hover:text-gray-700 dark:hover:text-gray-100 flex items-center space-x-1 group"
							>
								<AiOutlineTwitter
									size={20}
									className="group-hover:text-[#00acee]"
								/>
								<span>noyonalways</span>
							</a>
							<a
								target="_blank"
								href="https://github.com/noyonalways"
								className="hover:text-gray-700 dark:hover:text-gray-100 flex items-center space-x-1"
							>
								<AiFillGithub size={20} />
								<span>noyonalways</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
