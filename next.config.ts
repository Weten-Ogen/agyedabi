import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
        {
            protocol:"https",
            hostname:"l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com",
            pathname: "/images",
            port: ""

        },
        {
            protocol:"https",
            hostname:"l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com",
            port: ""
        },
        {
            protocol:"https",
            hostname:"**",
            port:""
        }
    ]
}
};

export default nextConfig;
