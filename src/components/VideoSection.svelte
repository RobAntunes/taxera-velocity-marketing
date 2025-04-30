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
  }: {
    playbackId: string;
    text: string;
    buttonText: string;
    buttonBgColor?: string;
    textColor?: string;
    className?: string;
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
  class={`italic flex font-thin text-lg flex-col lg:flex-row rounded-full`}
>
  <p class="mb-4 lg:mb-0 rounded-full" style={textColor ? `color: ${textColor}` : ""}>
    {text}
  </p>
  <Button
    variant="ghost"
    text={buttonText}
    bgColor={buttonBgColor}
    textColor={textColor}
    icon={ArrowRight}
    onClick={openModal}
    className={cn(
      "px-4",
      "rounded-lg",
      className
    )}
  />
</div>

<VideoModal {playbackId} isOpen={isModalOpen} onClose={closeModal} />
