<script lang="ts">
  import { Hamburger } from "svelte-hamburgers";
  import Drawer from "./Drawer.svelte";

  let isOpen = false;

  function toggleDrawer() {
    isOpen = !isOpen;
  }
</script>

<button class="relative z-[99]" on:click={toggleDrawer} aria-label="Toggle menu">
  <Hamburger type="emphatic" bind:open={isOpen} --color="gray" />
</button>

<Drawer isOpen={isOpen} on:close={toggleDrawer} /> 