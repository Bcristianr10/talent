// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Genera HTML estático listo para GitHub Pages
  images: {
    unoptimized: true,        // Evita errores con el optimizador de imágenes
  },
  trailingSlash: true,        // Asegura que las rutas terminen con /
  
  // 👇 Muy importante: indica la ruta base del sitio en GitHub Pages
  basePath: '/talent',
  assetPrefix: '/talent/',
};

export default nextConfig;
