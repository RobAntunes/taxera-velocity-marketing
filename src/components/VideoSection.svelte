<script lang="ts">
  import { ArrowRight } from "@lucide/svelte";
  import VideoModal from "./VideoModal.svelte";
  import Button from "./Button.svelte";
  import { cn } from "@/lib/utils";

  let {
    playbackId,
    text,
    buttonText,
    buttonBgColor,
    textColor,
    className,
    expandWithThumbnail = false,
    withButton = true,
    isOpen = $bindable(false),
    children
  }: {
    playbackId: string;
    text: string;
    buttonText: string;
    buttonBgColor?: string;
    textColor?: string;
    className?: string;
    expandWithThumbnail?: boolean;
    withButton?: boolean;
    isOpen?: boolean;
    children?: any;
  } = $props();

  let isModalOpen = $state(false);

  function openModal() {
    console.log("openModal called, setting isModalOpen to true");
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
</script>

<div
  class={`w-full italic flex items-center justify-evenly font-thin text-lg flex-col lg:flex-row`}
>
  {#if expandWithThumbnail}
   <mux-player
      thumbnail-time={0}
      onclick={(event: any) => {
        openModal();
        event.target.pause();
      }}
      aria-role="button"
      stream-type="on-demand"
      playback-id={playbackId}
      metadata-video-title="Taxera eCompliance Overview"
      class="md:max-w-[500px] !rounded-xl"
      autoplay={false}
    ></mux-player>
  {:else}
    <div
      class={`w-full italic flex justify-center xl:justify-start items-center font-thin text-lg flex-col xl:flex-row rounded-full`}
    >
      <p
        class="mb-4 lg:mb-0 rounded-full text-center lg:text-left"
        style={textColor ? `color: ${textColor}` : ""}
      >
        {text}
      </p>
      {#if withButton}
        <Button
          variant="ghost"
          text={buttonText}
          bgColor={buttonBgColor}
          {textColor}
          icon={ArrowRight}
          onClick={openModal}
          className={cn("px-4", "rounded-lg", "w-full", className)}
        />
      {:else}
        <button
          class="mb-4 lg:mb-0 rounded-full text-center lg:text-left"
          onclick={openModal}
        >
          {@render children?.() }
        </button>
      {/if}
    </div>
  {/if}
</div>

<VideoModal {playbackId} isOpen={isModalOpen} onClose={closeModal} />
