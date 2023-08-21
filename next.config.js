/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO:
      "mongodb://45.76.186.162:27017/fulloptions?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.4",
    NEXTAUTH_SECRET: "ababbbbaaba",
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActionsBodySizeLimit: "100mb",
  },
};

module.exports = nextConfig;
