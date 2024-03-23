export const manifestForPlugin = {
  registerType: "prompt",
  manifest: {
    name: "E-Commerecew",
    short_name: "E-Commerecew",
    description: `Your ultimate destination for effortless online shopping.
    Discover curated collections, easily add items to your cart and wishlist,
    and enjoy detailed product descriptions with captivating previews.
    Experience convenience like never before with our intuitive interface.
    Shop smarter with us today.`,
    icons: [
      {
        src: "/android-chrome-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/android-chrome-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/apple-touch-icon.webp",
        sizes: "180x180",
        type: "image/webp",
      },
      {
        src: "/android-chrome-512x512.webp",
        sizes: "maskable",
        type: "image/webp",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.webp",
        sizes: "16x16",
        type: "image/webp",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.webp",
        sizes: "32x32",
        type: "image/webp",
      },
    ],
    theme_color: "#181818",
    background_color: "#181818",
    display: "standalone",
    scope: "/",
    start_url: "https://e-commercew.netlify.app/",
    orientation: "portrait",
  },
};
