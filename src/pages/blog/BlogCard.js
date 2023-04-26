import React from "react";
import Image from "next/image";

export default function BlogCard() {
	return (
		<li className="hover:scale-[1.03] duration-150">
			<div className=" shadow-md border border-gray-200/[.3] rounded-lg  mb-5">
				<a href="#">
					<Image
						width={400}
						height={300}
						className="rounded-t-lg"
						src="https://flowbite.com/docs/images/blog/image-1.jpg"
						alt="imge"
					/>
				</a>
				<div className="p-5">
					<a href="#">
						<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
							Noteworthy technology acquisitions 2021
						</h5>
					</a>
					<p className="font-normal text-gray-700 mb-3">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
					<a className="btn" href="#">
						Read more
					</a>
				</div>
			</div>
		</li>
	);
}
