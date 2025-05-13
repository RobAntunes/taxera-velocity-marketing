<script lang="ts">
  // import imageUrlBuilder from '@sanity/image-url'; // For advanced image transformations
  // import { client } from '@/lib/sanityClient'; // If using client here for imageBuilder

  const {
    img, // URL of the image
    alt = "Display image", // Default alt text
    className = "", // Allow passing additional classes
    // Props for Sanity hotspot/crop - currently unused in template but accepted
    // hotspot = null, // Not used directly in this basic version
    // crop = null,    // Not used directly in this basic version
  } = $props<{
    img: string; 
    alt?: string;
    className?: string;
    hotspot?: any; // Keeping for type completeness from index.astro
    crop?: any;    // Keeping for type completeness from index.astro
    // objectFit?: string;
  }>();

  // Example of how you might use hotspot/crop with @sanity/image-url if you decide to implement it:
  // let finalImageUrl = img; // Default to the raw URL
  // if (hotspot && crop && client) { // Check if client is imported and configured
  //   const builder = imageUrlBuilder(client);
  //   finalImageUrl = builder.image({ asset: { _ref: img }, hotspot, crop }).width(800).url(); // Example
  //   // Note: This assumes 'img' prop might sometimes be a Sanity asset ID or full object
  //   // if it's always a full URL from GROQ (like asset->url), this approach needs adjustment.
  //   // The current GROQ query provides asset->url directly, so image-url builder might be used differently
  //   // or if you pass the raw asset data instead of just the URL.
  // }

</script>

<img 
  src={img} 
  alt={alt}
  class={`h-full w-full object-cover rounded-xl ${className}`.trim()}
  loading="lazy" 
/>

<style>
  /* Add any specific styles for the img tag if needed beyond Tailwind classes */
  img {
    /* Example: ensure it doesn't break layout if dimensions are unexpected */
    display: block;
  }
</style>
