/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: [
			'upload.wikimedia.org',
			'localhost',
			'begcpslinmhxdorgenrj.supabase.co'
		]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/catalog/books/humor',
				permanent: true
			}
		]
	},
	env: {
		SERVER_URL: process.env.SERVER_URL
	}
}

export default nextConfig
