/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        // pathname: "/dryhnlf4u/**",
      },
    ],
  },
};

module.exports = nextConfig;
