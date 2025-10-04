/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto le dice a Next que genere HTML estático
  images: {
    unoptimized: true, // Evita errores con optimización de imágenes
  },
  trailingSlash: true, // Hace que funcione bien en GitHub Pages
};

export default nextConfig;
