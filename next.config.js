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
      "mongodb+srv://Shani:Twm9DVtPY9wXoTnx@rm1.ro59o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    MONGODB_PASSWORD: "Twm9DVtPY9wXoTnx",
    GOOGLE_CLIENT_ID:
      "856777061385-qo7hvr2bm0vslff4es8p6hcjsclbpq08.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "c5e8016f9a8c00422e7f",
    GITHUB_CLIENT_SECRET: "22b767bed8cdec399eaee867b3b540c0eafeb12a",
  },
};

module.exports = nextConfig;
