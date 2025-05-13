<script lang="ts">
  import inverse from "../assets/inverse-radius.svg";
  // import tax from "../assets/tax.jpg"; // Replaced by dynamic background
  import { ArrowRight } from "@lucide/svelte"; // Keep if used as default/fallback for CTAs
  import Button from "./Button.svelte";
  // import { Marquee } from "./magicui/marquee"; // Not used in Hero.svelte
  import VideoSection from "./VideoSection.svelte";
  import type { ComponentType } from "svelte";

  interface CallToActionData {
    text?: string;
    linkUrl?: string;
    isDownload?: boolean;
    targetBlank?: boolean;
    buttonVariant?: "primary" | "ghost" | "outline";
    iconName?: string | null;
  }

  const {
    mainHeading = "Compliance, meet Velocity",
    subHeading = "See Risks Before They Happen. Act Smarter Every Day.",
    primaryCta = null as CallToActionData | null,
    secondaryCta = null as CallToActionData | null,
    backgroundImageUrl = "/assets/hero.jpg", // Default fallback image
    // backgroundImageUrl = "", // Start with no default to see if Sanity URL loads
    backgroundImageAlt = "Hero background", // Though not directly used for CSS bg
    videoPlaybackId = "xc4o4Eb62wSMeNmIgLGhAjV00DAUWJnjjbhqOWh2zh88", // Default/fallback playbackId
    categoryLabel = "eCompliance" // Prop for the top-left label
  } = $props<{
    mainHeading?: string;
    subHeading?: string;
    primaryCta?: CallToActionData | null;
    secondaryCta?: CallToActionData | null;
    backgroundImageUrl?: string;
    backgroundImageAlt?: string;
    videoPlaybackId?: string | null;
    categoryLabel?: string;
  }>();

  // Dynamically resolve icon for primary CTA
  const PrimaryCtaIcon: ComponentType | null = $derived((() => {
    if (!primaryCta?.iconName) return null;
    const iconMap: Record<string, any> = { ArrowRight: ArrowRight }; // Add more if needed
    return iconMap[primaryCta.iconName] || null;
  })());
  
  // Dynamically resolve icon for secondary CTA (if it can have one)
  // const SecondaryCtaIcon: ComponentType | null = $derived((() => {
  //   if (!secondaryCta?.iconName) return null;
  //   const iconMap: Record<string, any> = { ArrowRight: ArrowRight }; 
  //   return iconMap[secondaryCta.iconName] || null;
  // })());

</script>

<section
  class={`
    bg-[whitesmoke] lg:mx-16 mx-0 relative 
    bg-cover bg-center lg:rounded-3xl
    flex-grow flex justify-between lg:mt-18 h-[100vh]
  `}
  style={`background-image: url('${backgroundImageUrl}');`}
>
  <div class="relative z-10 flex flex-col lg:justify-between w-full h-full bg-black/20 lg:rounded-3xl">
    <div
      class="bg-[whitesmoke] justify-center items-center relative z-50 p-6 rounded-br-2xl w-fit"
    >
      <img
        src={inverse.src}
        alt="decoration"
        class="z-50 absolute left-0 bottom-0 translate-y-[99%]"
      />
      <img
        src={inverse.src}
        alt="decoration"
        class="z-50 absolute right-0 top-0 translate-x-[99%]"
      />
      <h1
        class="text-blue-700 w-full lg:text-2xl text-lg font-bold flex justify-center items-center"
      >
        {categoryLabel}
      </h1>
    </div>
    <div
      class="h-full flex flex-col justify-center items-center lg:justify-end xl:items-start"
    >
      <div
        class="flex flex-col items-center justify-center lg:justify-end xl:justify-end"
      >
        <div
          class="lg:pl-16 pr-0 pb-0 lg:max-w-none mx-auto text-balance lg:items-end items-center justify-center lg:text-left text-white relative z-50 flex flex-col gap-4 w-full"
        >
          <div
            class="lg:grid lg:grid-cols-12 flex flex-col items-center lg:items-end lg:justify-center gap-16 sm:gap-8 md:gap-24 lg:gap-0 w-full"
          >
            <div
              class="flex flex-col col-span-8 row-start-2 lg:max-w-none justify-center items-center lg:items-start lg:pb-24 lg:p-12 md:pt-12 lg:pt-0"
            >
              <h2
                class="leading-tight font-bold text-5xl sm:text-[4em] xl:text-[5em] text-[3em] lg:text-left text-center max-w-xl md:max-w-none"
              >
                {mainHeading}
              </h2>
              <h3
                class="text-[18px] lg:mb-12 mb-4 leading-normal font-light max-w-xl lg:text-left text-center"
              >
                {subHeading}
              </h3>
              <div
                class="w-full md:w-[80%] lg:w-[60%] flex sm:flex-row flex-col gap-4 justify-center lg:justify-start items-center"
              >
                {#if primaryCta && primaryCta.linkUrl}
                  <a
                    href={primaryCta.linkUrl}
                    target={primaryCta.targetBlank ? '_blank' : '_self'}
                    rel={primaryCta.targetBlank ? 'noopener noreferrer' : ''}
                    class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-600/90 h-[50px] px-6"
                  >
                    {primaryCta.text || "Action"}
                    {#if PrimaryCtaIcon}
                      <svelte:component this={PrimaryCtaIcon} class="w-4 h-4 ml-2" />
                    {/if}
                  </a>
                {/if}
                {#if secondaryCta && secondaryCta.linkUrl}
                  <Button
                    text={secondaryCta.text || "Learn More"}
                    variant={secondaryCta.buttonVariant || "ghost"} 
                    className="!w-full h-[50px] px-4 bg-transparent rounded-lg" 
                    hoverColor="blue-700" 
                    textColor="white"
                    iconName={secondaryCta.iconName}
                    onClick={secondaryCta.linkUrl ? () => { 
                      if (secondaryCta.targetBlank) window.open(secondaryCta.linkUrl, '_blank'); 
                      else location.href = secondaryCta.linkUrl;
                    } : undefined}
                  />
                {/if}
              </div>
            </div>
            <div
              class="hidden lg:flex row-span-2 col-start-9 justify-end items-end relative top-[1px]"
            >
              <img
                src={inverse.src}
                alt="decoration"
                class="z-20 hidden lg:flex justify-end items-end rotate-[180deg] relative"
              />
            </div>
            <div
              class="flex flex-row text-white justify-end items-end col-span-3 col-start-10 row-start-2"
            >
              <div class="flex flex-col">
                <div
                  class="hidden lg:flex justify-end items-end relative top-[1px]"
                >
                  <img
                    src={inverse.src}
                    alt="decoration"
                    class="hidden z-20 lg:flex justify-end items-end rotate-[180deg] relative"
                  />
                </div>
                <div
                  class="flex relative z-40 flex-col justify-end items-end lg:w-full lg:bg-[whitesmoke] rounded-tl-2xl p-3"
                >
                  <div
                    class="hidden lg:flex justify-center items-center absolute top-0 -right-3 p-2 bg-[whitesmoke] rounded-full w-[40px] h-[40px] z-20"
                  >
                    <div class="w-full h-full rounded-full bg-blue-700"></div>
                  </div>
                  <div
                    class="w-[90%] sm:w-[60%] md:w-[100%] mx-auto flex flex-col justify-center items-end rounded-tl-2xl relative"
                  >
                    <div
                      class="flex order-2 justify-end items-center rounded-tl-xl"
                    >
                      <div
                        class="flex-col gap-4 p-3 bg-blue-700 rounded-xl justify-center items-center"
                      >
                        <div
                          class="bg-blue-700 text-[whitesmoke] text-md rounded-xl"
                        >
                          {#if videoPlaybackId}
                            <VideoSection
                              autoplay={false} 
                              expandWithThumbnail={true}
                              className="rounded-xl font-bold"
                              playbackId={videoPlaybackId.toString()} 
                              text="" 
                              buttonText="" 
                              withButton={false}                              
                            />
                          {/if}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
