<script>
  const {
    text,
    variant = "primary",
    size = { height: "100px", width: "150px" },
    bgColor = "blue-700",
    textColor = "white",
    hoverColor = "blue-500",
    icon = null,
    class: className = "",
  } = $props();

  const Icon = icon;

  const getButtonClass = (variant) => {
    return variant === "primary"
      ? `bg-${bgColor} text-${textColor} text-md rounded-xl border border-${bgColor} hover:bg-${bgColor} hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-${hoverColor} hover:bg-opacity-80 transition-all duration-300 hover:cursor-pointer`
      : variant === "ghost"
        ? `bg-transparent text-${textColor} border border-${textColor} text-md rounded-xl hover:bg-${hoverColor} hover:scale-105 transition-all duration-300 hover:cursor-pointer`
        : `border border-${textColor} text-${textColor} text-md rounded-xl hover:bg-${hoverColor} hover:border-${hoverColor} bg-${bgColor} hover:text-white hover:scale-105 transition-all duration-300 hover:cursor-pointer`;
  };
</script>

{#snippet button(text, variant, size, className)}
  <button
    class="{getButtonClass(variant)} {className} flex flex-row gap-x-2 justify-center items-center group"
    style={`height: ${size.height}; width: ${size.width};`}
  >
    {text}
    {#if icon}
      <Icon class="group-hover:cursor-pointer group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
    {/if}
  </button>
{/snippet}

{@render button(text, variant, size, className)}
