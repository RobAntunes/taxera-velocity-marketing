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

  import Card from "@/components/Card.svelte";

  const {
    title = "Default Title",
    description = "Default description.",
    iconName = "DefaultIcon",
    playbackId = "",
    withVideo = false,
    isActive = true,
  } = $props<{
    title?: string;
    description?: string;
    iconName?: string;
    playbackId?: string;
    withVideo?: boolean;
    isActive?: boolean;
  }>();

  const iconMap: Record<string, ComponentType> = {
    // Change LucideIconType to ComponentType
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
    if (isActive && withVideo && !showInternalModal) {
      showInternalModal = true;
    }
  }

  function closeModal() {
    showInternalModal = false;
  }
</script>

<div
  class={`category-card-interactive-wrapper h-full w-full !text-left ${!isActive ? "inactive_card_state" : ""} ${isActive && withVideo ? "clickable_card_state" : ""}`.trim()}
  on:click={handleCardClick}
  role={isActive && withVideo ? "button" : "region"}
  tabindex={isActive && withVideo ? 0 : -1}
  aria-disabled={!isActive}
  on:keydown={(e) =>
    (e.key === "Enter" || e.key === " ") &&
    isActive &&
    withVideo &&
    handleCardClick()}
>
  <Card
    className={isActive ? `${baseCardClasses} ${hoverCardClasses}` : baseCardClasses}
  >
    <div class="card-content-inner p-4 md:p-6">
      <div class="mb-6 flex items-center">
        {#if ResolvedIcon}
          <ResolvedIcon class="w-6 h-6" />
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

{#if showInternalModal && isActive && withVideo}
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

      {#if playbackId}
        <mux-player playback-id={playbackId} stream-type="on-demand" controls
        ></mux-player>
      {:else}
        <p>Video content is currently unavailable for this section.</p>
      {/if}

      <div class="cms-text-container">
        <h4>Additional Information</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
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
    color: #e2e8f0;
  }

  .card-content-inner {
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    padding: 1rem;
  }

  .modal-content {
    background-color: white;
    color: #1a202c;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .modal-close-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    cursor: pointer;
    color: #718096;
  }
  .modal-close-button:hover,
  .modal-close-button:focus {
    color: #1a202c;
  }

  .modal-title-heading {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  mux-player {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.5rem;
    border-radius: 0.375rem;
    overflow: hidden;
  }

  .cms-text-container {
    margin-top: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.65;
  }
  .cms-text-container h4 {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  .cms-text-container p {
    margin-bottom: 1rem;
  }
  .cms-text-container p:last-child {
    margin-bottom: 0;
  }
</style>
