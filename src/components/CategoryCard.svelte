<script lang="ts">
  import {
    // PlayCircle, // Removed as it's not a selectable iconName
    Receipt,
    ChartBar,
    PackageCheck,
    Truck,
    ShoppingCart,
    Factory,
    Calculator,
    Store,
  } from "@lucide/svelte";
  // import type { Icon as LucideIconType } from "@lucide/svelte"; // Remove this line
  import type { Snippet, ComponentType } from "svelte"; // Add ComponentType here
  import { onMount } from "svelte";
  import { PortableText } from '@portabletext/svelte'; // Import PortableText

  import Card from "@/components/Card.svelte";

  const {
    title = "Default Title",
    description = "Default description.",
    iconName = "DefaultIcon",
    playbackId = "",
    withVideo = false,
    isActive = true,
    modalContent = [] // Add modalContent prop
  } = $props<{
    title?: string;
    description?: string;
    iconName?: string;
    playbackId?: string;
    withVideo?: boolean;
    isActive?: boolean;
    modalContent?: any[]; // Type for Portable Text
  }>();

  const iconMap: Record<string, any> = { 
    Receipt: Receipt,
    ChartBar: ChartBar,
    PackageCheck: PackageCheck,
    Truck: Truck,
    ShoppingCart: ShoppingCart,
    Factory: Factory,
    Calculator: Calculator,
    Store: Store,
  };

  const ResolvedIcon = $derived(iconMap[iconName]);

  let showInternalModal = $state<boolean>(false);

  const baseCardClasses = "h-full w-full flex mb-0 justify-center flex-col text-balance bg-blue-600/80 text-white shadow-none transition-all duration-300 rounded-xl";
  const hoverCardClasses = "hover:shadow-2xl hover:translate-y-[-4px] hover:bg-blue-600";

  onMount(async () => {
    try {
      await import("@mux/mux-player");
    } catch (e) {
      console.warn("Mux player custom element could not be loaded.", e);
    }
  });

  function handleCardClick() {
    // Only open modal if it's active AND has video OR has modal text content
    if (isActive && (withVideo || (modalContent && modalContent.length > 0)) && !showInternalModal) {
      showInternalModal = true;
    }
  }

  function closeModal() {
    showInternalModal = false;
  }
</script>

<div
  class={`category-card-interactive-wrapper h-full w-full !text-left ${!isActive ? "inactive_card_state" : ""} ${isActive && (withVideo || (modalContent && modalContent.length > 0)) ? "clickable_card_state" : ""}`.trim()}
  on:click={handleCardClick}
  role={isActive && (withVideo || (modalContent && modalContent.length > 0)) ? "button" : "region"}
  tabindex={isActive && (withVideo || (modalContent && modalContent.length > 0)) ? 0 : -1}
  aria-disabled={!isActive}
  on:keydown={(e) =>
    (e.key === "Enter" || e.key === " ") &&
    isActive &&
    (withVideo || (modalContent && modalContent.length > 0)) &&
    handleCardClick()}
>
  <Card
    className={isActive ? `${baseCardClasses} ${hoverCardClasses}` : baseCardClasses}
  >
    <div class="card-content-inner p-4 md:p-6">
      <div class="mb-6 flex items-center">
        {#if ResolvedIcon}
          <svelte:component this={ResolvedIcon} class="w-6 h-6" />
        {:else if iconName && iconName !== "DefaultIcon"}
          <span class="icon-name-fallback p-1 border border-dashed rounded"
            >{iconName} (missing)</span
          >
        {/if}
      </div>

      <div class="flex flex-col justify-center gap-y-3 md:gap-y-4">
        <h3 class="text-2xl font-normal leading-tight">{title}</h3>
        <p class="text-[16px] font-thin text-pretty leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </Card>
</div>

{#if showInternalModal && isActive}
  <div
    class="modal-overlay"
    on:click={closeModal}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title-{title.replace(/\s+/g, '-').toLowerCase()}"
  >
    <div class="modal-content" on:click|stopPropagation role="document">
      <button
        class="modal-close-button"
        on:click={closeModal}
        aria-label="Close modal">&times;</button
      >
      <h2
        class="modal-title-heading"
        id="modal-title-{title.replace(/\s+/g, '-').toLowerCase()}"
      >
        {title}
      </h2>

      {#if withVideo && playbackId}
        <mux-player playback-id={playbackId} stream-type="on-demand" controls
        ></mux-player>
      {/if}

      {#if modalContent && modalContent.length > 0}
        <div class="cms-text-container !text-left">
          <PortableText value={modalContent} />
        </div>
      {:else if !withVideo} 
        <!-- Show this only if there's no video and no modal text -->
        <p>No additional details or video available for this category.</p>
      {/if}
    </div>
  </div>
{/if}

<style lang="css">
  .category-card-interactive-wrapper {
    cursor: default;
  }

  .category-card-interactive-wrapper.inactive_card_state {
    filter: grayscale(10%);
    opacity: 0.65;
    cursor: not-allowed;
  }

  .category-card-interactive-wrapper.clickable_card_state:not(
      .inactive_card_state
    ) {
    cursor: pointer;
  }

  .icon-name-fallback {
    font-style: italic;
    font-size: 0.8rem;
    color: #e2e8f0; /* Softer color for fallback text */
  }

  /* Ensure card content inner takes up space for consistent height if cards are in a grid */
  .card-content-inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allows content to fill card */
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65); /* Slightly darker overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000; /* Ensure it's on top */
    padding: 1rem; /* Padding around modal for smaller screens */
  }

  .modal-content {
    background-color: white;
    color: #1a202c; /* Darker text for better readability */
    padding: 2rem; /* More padding */
    border-radius: 0.5rem; /* Standard border radius */
    width: 100%; /* Responsive width */
    max-width: 640px; /* Max width for larger screens */
    max-height: 90vh; /* Max height to prevent overflow */
    overflow-y: auto; /* Scroll for content longer than max-height */
    position: relative;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04); /* Standard shadow */
  }

  .modal-close-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    font-size: 2rem; /* Larger close button */
    line-height: 1;
    font-weight: 300; /* Lighter font weight */
    cursor: pointer;
    color: #718096; /* Tailwind gray-500 */
  }
  .modal-close-button:hover,
  .modal-close-button:focus {
    color: #1a202c; /* Darken on hover/focus */
  }

  .modal-title-heading {
    font-size: 1.5rem; /* Slightly larger title */
    font-weight: 700; /* Bold */
    margin-bottom: 1rem;
  }

  mux-player {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.5rem;
    border-radius: 0.375rem; /* Consistent with Tailwind's rounded-md */
    overflow: hidden; /* Ensures content respects border radius */
  }

  .cms-text-container {
    margin-top: 1.5rem; /* Space above CMS content if video is present */
    font-size: 0.95rem; /* Slightly smaller base font for content */
    line-height: 1.65; /* Good line height for readability */
  }
  /* Default styling for PortableText output - can be customized further */
  .cms-text-container :global(h1),
  .cms-text-container :global(h2),
  .cms-text-container :global(h3),
  .cms-text-container :global(h4),
  .cms-text-container :global(h5),
  .cms-text-container :global(h6) {
    font-weight: 600; /* Semibold headings */
    margin-bottom: 0.75rem;
    margin-top: 1.25rem; /* Space above headings */
    color: #2d3748; /* Tailwind gray-700 */
  }
  .cms-text-container :global(h4) { /* More specific if needed */
    font-size: 1.05rem; 
  }
  .cms-text-container :global(p) {
    margin-bottom: 1rem;
  }
  .cms-text-container :global(p:last-child) {
    margin-bottom: 0;
  }
  .cms-text-container :global(ul),
  .cms-text-container :global(ol) {
    margin-left: 1.5rem; /* Indent lists */
    margin-bottom: 1rem;
  }
  .cms-text-container :global(li) {
    margin-bottom: 0.25rem;
  }
  .cms-text-container :global(a) {
    color: #2b6cb0; /* Tailwind blue-700 */
    text-decoration: underline;
  }
  .cms-text-container :global(a:hover) {
    color: #2c5282; /* Tailwind blue-800 */
  }
  .cms-text-container :global(blockquote) {
    border-left: 4px solid #cbd5e0; /* Tailwind gray-400 */
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #4a5568; /* Tailwind gray-600 */
  }
</style>
