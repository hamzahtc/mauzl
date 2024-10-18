/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "mauzl.com", "www.mauzl.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Capture all routes starting with /api
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`, // Forward to backend with the full path
      },
    ];
  },
};

export default nextConfig;
