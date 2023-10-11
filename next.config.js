/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "dummyimage.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname: "commondatastorage.googleapis.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
