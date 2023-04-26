/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"i.ibb.co",
			"scontent.fdac138-2.fna.fbcdn.net",
			"cdn.pixabay.com",
			"cdn-images-1.medium.com",
			"flowbite.com",
		],
	},
};

module.exports = nextConfig;
