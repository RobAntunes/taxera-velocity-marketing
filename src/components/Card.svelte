<script lang="ts">
  import { Children } from "react";

  const { className } = $props();
</script>

<div class={`rounded-xl p-6 h-[80%] ${className}`}>
  <slot />
</div>
