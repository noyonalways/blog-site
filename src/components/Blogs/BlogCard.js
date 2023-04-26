import React from "react";

export default function BlogCard() {
	return (
		<li class="">
			<div class=" shadow-md border border-gray-200/[.3] rounded-lg  mb-5">
				<a href="#">
					<img
						class="rounded-t-lg"
						src="https://flowbite.com/docs/images/blog/image-1.jpg"
						alt="imge"
					/>
				</a>
				<div class="p-5">
					<a href="#">
						<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
							Noteworthy technology acquisitions 2021
						</h5>
					</a>
					<p class="font-normal text-gray-700 mb-3">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
					<a
						class="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
						href="#"
					>
						Read more
					</a>
				</div>
			</div>
		</li>
	);
}