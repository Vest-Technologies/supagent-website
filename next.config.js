/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

module.exports = nextConfig 