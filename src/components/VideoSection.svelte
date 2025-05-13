<script lang="ts">
  import { ArrowRight } from "@lucide/svelte";
  import VideoModal from "./VideoModal.svelte";
  import Button from "./Button.svelte";
  import { cn } from "@/lib/utils";

  let {
    playbackId,
    text = "Need some help deciding?",
    buttonText = "Watch Video",
    buttonBgColor = "blue-700",
    textColor = "white",
    className = "",
    expandWithThumbnail = false,
    withButton = true,
    isOpen = $bindable(false),
    children,
    autoplay = false,
  }: {
    playbackId: string;
    text?: string;
    buttonText?: string;
    buttonBgColor?: string;
    textColor?: string;
    className?: string;
    expandWithThumbnail?: boolean;
    withButton?: boolean;
    isOpen?: boolean;
    children?: any;
    autoplay?: boolean;
  } = $props();

  function openModal() {
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
  }
</script>

<div
  class={`w-full italic flex items-center justify-evenly font-thin text-lg flex-col lg:flex-row`}
>
  {#if expandWithThumbnail}
    <mux-player
      thumbnail-time={0}
      on:load={(event: any) => {
        event.target.pause();
      }}
      on:click={(event: any) => {
        openModal();
        event.target.pause();
      }}
      aria-role="button"
      stream-type="on-demand"
      playback-id={playbackId}
      metadata-video-title="Taxera eCompliance Overview"
      class="md:max-w-[500px] !rounded-xl cursor-pointer"
      {autoplay}
    ></mux-player>
  {:else}
    <div
      class={`w-full italic flex justify-center xl:justify-start items-center font-thin text-lg flex-col xl:flex-row rounded-full`}
    >
      <p
        class="mb-4 lg:mb-0 rounded-full text-center lg:text-left"
        style:color={textColor}
      >
        {text}
      </p>
      {#if withButton}
        <Button
          variant="ghost"
          text={buttonText}
          bgColor={buttonBgColor}
          {textColor}
          iconName="ArrowRight"
          onClick={openModal}
          className={cn("px-4", "rounded-lg", "md:mt-4", className)}
        />
      {:else}
        <button
          class="mb-4 lg:mb-0 rounded-full text-center lg:text-left p-2 hover:bg-gray-200 transition-colors duration-200"
          on:click={openModal}
        >
          {@render children?.()}
        </button>
      {/if}
    </div>
  {/if}
</div>

<VideoModal {playbackId} {isOpen} {autoplay} onClose={closeModal} />
