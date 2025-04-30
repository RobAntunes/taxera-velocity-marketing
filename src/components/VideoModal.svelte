<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { X } from "@lucide/svelte";

  // Use $props rune for component properties
  let { 
    isOpen = $bindable(false), // Use $bindable if parent needs two-way binding (though here only used for visibility)
    playbackId,
    onClose 
  }: { 
    isOpen?: boolean, 
    playbackId: string, 
    onClose: () => void 
  } = $props();

  function close() {
    if (onClose) onClose();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (isOpen && event.key === "Escape") {
      close();
    }
  }

  onMount(async () => {
    await import("@mux/mux-player");
    // Scroll lock logic can potentially be moved to reactive statement
  });

  onDestroy(() => {
    // Ensure scroll is restored if component is destroyed while open
    if (typeof document !== "undefined") {
      document.body.style.overflow = ""; 
    }
  });

  // Reactive statement for scroll lock using $effect (Svelte 5)
  $effect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
    // Cleanup function for the effect
    return () => {
      if (typeof document !== "undefined") {
         // Only restore if we are cleaning up the effect while it was 'hidden'
         // This might be redundant with onDestroy but ensures cleanup if props change rapidly
         // However, simple onDestroy is usually sufficient for this pattern.
         // Let's rely on onDestroy for simplicity.
      }
    };
  });

</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-black/70 backdrop-blur-sm"
      aria-hidden="true"
      onclick={close}
    ></div>
    <div
      class="relative z-10 bg-transparent rounded-lg w-full max-w-3xl aspect-video overflow-hidden"
    >
      <button
        onclick={close}
        aria-label="Close video player"
        class="absolute top-2 right-2 z-20 p-1 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors"
      >
        <X size={24} />
      </button>

      {#key playbackId}
        <mux-player
          stream-type="on-demand"
          playback-id={playbackId}
          metadata-video-title="Taxera eCompliance Overview"
          class="w-full h-full block"
          autoplay
        ></mux-player>
      {/key}
    </div>
  </div>
{/if}
