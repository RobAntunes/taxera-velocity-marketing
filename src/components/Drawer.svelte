<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { X } from "@lucide/svelte"; // Import close icon

  export let isOpen: boolean = false;

  const dispatch = createEventDispatcher();

  function closeDrawer() {
    dispatch("close");
  }

  // Close drawer if user presses escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeDrawer();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/30 z-40"
    aria-hidden="true"
    on:click={closeDrawer}
  />

  <!-- Drawer Panel -->
  <div
    class="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out {isOpen
      ? 'translate-x-0'
      : 'translate-x-full'}"
    role="dialog"
    aria-modal="true"
    aria-labelledby="drawer-title"
  >
    <div class="flex justify-between items-center p-4 border-b">
      <h2 id="drawer-title" class="text-lg font-semibold">Menu</h2>
    </div>
    <nav class="p-4">
      <ul class="space-y-2">
        <li><a href="/" class="block px-3 py-2 rounded hover:bg-gray-100">Home</a></li>
        <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">About</a></li>
        <li><a href="/contact" class="block px-3 py-2 rounded hover:bg-gray-100">Contact</a></li>
        <!-- Add more placeholder links as needed -->
      </ul>
    </nav>
  </div>
{/if} 