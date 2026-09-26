import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,

    async redirects() {
        return [
            // Shimla → Christmas Offer
            {
                source: "/package/himachal-pradesh/shimla",
                destination: "/offers/shimla",
                permanent: false,
            },
            {
                source: "/packages/himachal-pradesh/shimla",
                destination: "/offers/shimla",
                permanent: false,
            },

            // Goa → New Year Offer
            {
                source: "/package/goa",
                destination: "/offers/goa",
                permanent: false,
            },
            {
                source: "/packages/goa",
                destination: "/offers/goa",
                permanent: false,
            },

            // Ayodhya → Diwali Offer
            {
                source: "/package/ayodhya",
                destination: "/offers/ayodhya",
                permanent: false,
            },
            {
                source: "/packages/ayodhya",
                destination: "/offers/ayodhya",
                permanent: false,
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;