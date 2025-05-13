<script lang="ts">
  // Import specific icons you expect to use, or handle more dynamically if many icons
  import { ArrowRight, PlayCircle } from "@lucide/svelte"; // Add any other icons you might pass by name
  import type { ComponentType } from "svelte";

  const {
    text = "Button Text",
    variant = "primary", // primary, ghost, outline (default)
    bgColor = "blue-700", // Default for primary, transparent for others if not set
    textColor = "black",
    hoverColor = "blue-500", // Used for bg or border based on variant
    iconName = null, // Expecting a string like "ArrowRight"
    className = "",
    onClick = null,
    // href = null, // If this button can also be a link
  } = $props<{
    text?: string;
    variant?: "primary" | "ghost" | "outline";
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    iconName?: string | null;
    className?: string;
    onClick?: (() => void) | null;
    // href?: string | null;
  }>();

  // Correctly declare and initialize IconComponent with $derived
  const IconComponent: ComponentType | null = $derived((() => {
    if (!iconName) return null;
    // Use 'any' for map values to satisfy linter with Lucide icon types
    const iconMap: Record<string, any> = {
      ArrowRight: ArrowRight,
      PlayCircle: PlayCircle,
      // Add other icons here as needed
    };
    return iconMap[iconName] || null;
  })());

  const getButtonClass = (v: "primary" | "ghost" | "outline") => {
    let effectiveTextColor = textColor;
    if (v === "primary" && textColor === "black" && bgColor !== "transparent" && bgColor !== "white") {
      effectiveTextColor = "white"; // Default primary buttons on dark bg to white text
    }
    if ((v === "ghost" || v === "outline") && textColor === "black"){
        effectiveTextColor = "blue-700"; // Default ghost/outline to theme color if original textColor is black
    }

    switch (v) {
      case "primary":
        return `bg-${bgColor} text-${effectiveTextColor} border border-${bgColor} hover:bg-opacity-80`;
      case "ghost":
        // Ensure hoverColor is defined, provide a fallback if necessary for opacity classes
        return `text-${effectiveTextColor} border border-${effectiveTextColor} hover:bg-${hoverColor || 'gray-200'} hover:bg-opacity-20`;
      case "outline":
        return `text-${effectiveTextColor} border border-${effectiveTextColor} hover:bg-${hoverColor || effectiveTextColor} hover:text-${(hoverColor && hoverColor !== effectiveTextColor) ? 'white' : effectiveTextColor} hover:border-${hoverColor || effectiveTextColor}`;
      default:
        return `bg-${bgColor} text-${effectiveTextColor} border border-${effectiveTextColor}`;
    }
  };

  const commonClasses = "px-6 py-2 text-md rounded-full flex flex-row gap-x-2 justify-center items-center group transition-all duration-300 hover:scale-105 hover:shadow-md";

</script>

{#if onClick}
  <button
    type="button"
    on:click={onClick}
    class={`${commonClasses} ${getButtonClass(variant)} ${className}`.trim()}
  >
    {text}
    {#if IconComponent}
      <svelte:component this={IconComponent} class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    {/if}
  </button>
{:else}
  <!-- Fallback or could be an anchor tag if href is provided -->
  <span
    class={`${commonClasses} ${getButtonClass(variant)} ${className}`.trim()}
    role="button" 
    aria-disabled="true" 
  >
    {text}
    {#if IconComponent}
      <svelte:component this={IconComponent} class="w-5 h-5" />
    {/if}
  </span>
{/if}

<style>
  /* You can add specific hover shadow colors here if needed based on props */
  /* For example, if you want hoverColor to define shadow color: */
  /* button:hover {
    box-shadow: 0 4px 14px 0 var(--hover-shadow-color, rgba(0,0,0,0.1));
  } */
</style>
