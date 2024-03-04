/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mwjnhcorhtvxrytiwzmv.supabase.co",
      },
    ],
  },
};

export default nextConfig;
