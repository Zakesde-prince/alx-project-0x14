import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: 'public', // this tells Next.js to output service worker files to the public folder
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // allow images from IMDb/media
  },
};

export default withPWA({
  ...nextConfig,
});
