<script lang="ts">
  import inverse from "../assets/inverse-radius.svg";
  import tax from "../assets/tax.jpg";
  import { ArrowRight } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import { Marquee } from "./magicui/marquee";
  import VideoSection from "./VideoSection.svelte";
</script>

<section
  class={`
  bg-[whitesmoke] lg:mx-16 mx-0 relative 
  bg-cover bg-center lg:rounded-3xl
  bg-[url('/assets/hero.jpg')]
  flex-grow flex justify-between lg:mt-18 h-[100vh]
`}
>
  <div class="relative z-10 flex flex-col lg:justify-between w-full h-full">
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
        eCompliance
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
                Compliance,{" "}meet Velocity
              </h2>
              <h3
                class="text-[18px] lg:mb-12 mb-4 leading-normal font-light max-w-xl lg:text-left text-center"
              >
                See Risks Before They Happen. Act Smarter Every Day.
              </h3>
              <div
                class="w-[60%] flex sm:flex-row flex-col gap-4 justify-center lg:justify-start items-center"
              >
                <a
                  href="#how-it-works"
                  class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-600/90 h-[50px]"
                >
                  Steps 4 Success
                  <ArrowRight class="w-4 h-4 ml-2" />
                </a>
                <a
                  href={"https://fefgnmac41fborlf.public.blob.vercel-storage.com/Taxera-eCompliance-zQBDOn4VJr8pF8wNbyaFLNdS0pmvnL.pdf"}
                  download
                  target="_blank"
                  class="w-full"
                >
                  <Button
                    text="Learn More"
                    variant="ghost"
                    className="!w-full h-[50px] px-4 bg-transparent rounded-lg "
                    hoverColor="blue-700"
                    textColor="white"
                  />
                </a>
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
                          <VideoSection
                            autoplay={false}
                            expandWithThumbnail={true}
                            className="rounded-xl font-bold"
                            buttonBgColor="blue-700"
                            playbackId={"xc4o4Eb62wSMeNmIgLGhAjV00DAUWJnjjbhqOWh2zh88"}
                            text=""
                            textColor="white"
                            buttonText=""
                          ></VideoSection>
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
