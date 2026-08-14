/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;