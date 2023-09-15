import React from "react";

export default function HeroSection() {
	return (
		<section className="bg-grid bg-no-repeat bg-cover -mt-">
			{/* <img className='-top-10 absolute w-full h-auto -z-10' src="/grid-bg.svg" alt="background" /> */}
			<div className="container min-h-main items-center flex justify-center">
				<div>
					<h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold text-center">
						A modern, beautiful way to learn.
					</h1>
					<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal text-center">
						We&apos;re on a mission to bring transparency to finance. We charge as
						little as possible, and we always show you upfront. No hidden fees.
						No bad exchange rates. No surprises.
					</p>
					<form className="flex justify-center space-x-2">
						<label className="col-auto lg:col-span-4">
							<span className="sr-only">Your Email</span>
							<input
								className="w-full p-2 border dark:bg-transparent border-gray-200 dark:border-gray-600/20 rounded"
								type="email"
								placeholder="Enter your email..."
								required={true}
							/>
						</label>
						<button
							className="btn"
							type="submit"
						>
							Get Started
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
