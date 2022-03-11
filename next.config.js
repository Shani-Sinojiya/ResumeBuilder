/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://Shani:HJcdbkPcTgmqIGN9@rm1.vrdzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    MONGODB_PASSWORD: "HJcdbkPcTgmqIGN9",
  },
};

module.exports = nextConfig;
