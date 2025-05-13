import { createClient } from "@sanity/client";
// import imageUrlBuilder from '@sanity/image-url'; // Uncomment if you plan to use it

export const client = createClient({
  projectId: 'dnouayr4',
  dataset: 'production',
  useCdn: true, // Set to true for production, false for development to always get fresh data
  apiVersion: '2024-03-11', // Use a recent ISO date
});

// Optional: Helper for image URLs
// const builder = imageUrlBuilder(client);
// export function urlFor(source: any) {
//   if (!source || !source.asset) {
//     return ''; // Or a placeholder image URL
//   }
//   return builder.image(source);
// }

// You might want to ensure your Sanity CORS settings in manage.sanity.io
// allow your development and production URLs if you set useCdn to false during dev. 