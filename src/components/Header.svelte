<script lang="ts">
  import MobileNav from "./MobileNav.svelte";
  import DesktopNav from "./DesktopNav.svelte";
</script>

<header class="fixed mb-24 top-0 left-0 right-0 z-[90] bg-white border-b h-16">
  <div
    class="container mx-auto flex h-full items-center justify-start px-4 md:px-6"
  >
    <h1 class="text-2xl font-bold">Taxera <span class="text-blue-700 font-thin italic">Velocity</span></h1>
    <div class="hidden lg:flex lg:flex-1 justify-start ml-8">
      <DesktopNav />
    </div>

    <div class="lg:hidden">
      <MobileNav />
    </div>
  </div>
</header>
