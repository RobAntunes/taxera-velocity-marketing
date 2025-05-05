<script lang="ts">
  import {
    PlayCircle,
    Receipt,
    ChartBar,
    PackageCheck,
    Truck,
    ShoppingCart,
    Factory,
    Calculator,
    Store,
  } from "@lucide/svelte";
  import VideoModal from "./VideoModal.svelte";
  import Card from "@/components/Card.svelte";
  import type { Icon as LucideIcon } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  const { withVideo, title, description, iconName, children } = $props<{
    withVideo: boolean;
    title: string;
    description: string;
    iconName: string;
    children?: Snippet;
  }>();

  const iconMap: Record<string, typeof import("@lucide/svelte").Icon> = {
    Receipt,
    ChartBar,
    PackageCheck,
    Truck,
    ShoppingCart,
    Factory,
    Calculator,
    Store,
  };

  const ResolvedIcon = $derived(iconMap[iconName]);

  let isOpen = $state<boolean>(false);

  const playbackId = "xxuxzinweRsofXLzHkQTloZl01neur3P8adgrqg1SdJI";
</script>

<Card
  className="h-full w-full flex mb-0 justify-center flex-col hover:shadow-2xl hover:translate-y-[-4px] text-balance bg-blue-600/80 text-white hover:bg-blue-600 shadow-none transition-all duration-300 rounded-xl"
>
  {#if withVideo}
    <div
      class="w-full flex flex-row justify-start md:justify-center items-center mb-6"
    >
      {#key title}
        <div class="w-full flex justify-start items-center mr-2">
          {#if ResolvedIcon}
            <ResolvedIcon class="w-6 h-6" />
          {/if}
        </div>
        <button 
          type="button" 
          onclick={() => isOpen = true} 
          class="p-0 m-0 bg-transparent border-none cursor-pointer appearance-none text-white hover:text-gray-300 transition-colors duration-200" 
          aria-label="Play video"
        >
           {@render children?.()}
        </button>
      {/key}
    </div>
  {:else}
    <div class="flex flex-row justify-between items-center mb-6">
      <div class="flex justify-center items-center">
        {#if ResolvedIcon}
          <ResolvedIcon class="w-6 h-6" />
        {/if}
      </div>
    </div>
  {/if}

  <div class="flex flex-col justify-center gap-6 mb-3">
    <h3 class="text-2xl font-normal">{title}</h3>
    <p class="text-[16px] font-thin text-pretty p-2 group-hover:text-white">
      {description}
    </p>
  </div>
</Card>

<VideoModal {playbackId} bind:isOpen={isOpen} />
