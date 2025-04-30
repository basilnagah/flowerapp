/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flower.elevateegy.com',
                pathname: '/uploads/**', // Adjust the pathname pattern as needed
            },
        ],
    },
};

export default nextConfig;
