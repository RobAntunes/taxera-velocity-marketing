<script lang="ts">
  import inverse from "../assets/inverse-radius.svg";
  import tax from "../assets/tax.jpg";
  import { ArrowRight } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import { Marquee } from "./magicui/marquee";
</script>

<section
  class={`
  bg-[whitesmoke] lg:mx-16 mx-0 relative 
  bg-cover bg-center lg:rounded-3xl
  bg-[url('/assets/hero.jpg')]
  flex-grow flex justify-between lg:mt-24
`}
>
  <div class="relative z-10 flex flex-col lg:justify-between w-full">
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
            class="lg:grid lg:grid-cols-12 flex flex-col items-center lg:items-end lg:justify-center w-full"
          >
            <div
              class="flex flex-col col-span-8 row-start-2 lg:max-w-none justify-center lg:pb-24 lg:p-12"
            >
              <h2
                class="leading-tight font-bold text-5xl sm:text-[4em] xl:text-[5em] text-[2em] lg:text-left text-center max-w-xl md:max-w-none"
              >
                Compliance,{" "}meet Velocity
              </h2>
              <h3
                class="text-[18px] mb-12 leading-normal font-light max-w-xl lg:text-left text-center"
              >
                See Risks Before They Happen. Act Smarter Every Day.
              </h3>
              <div
                class="flex md:flex-row flex-col gap-4 justify-center lg:justify-start items-center"
              >
                <a
                  href="#how-it-works"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-600/90 w-[160px] h-[50px]"
                >
                  Get Started
                </a>
                <a
                  href={"https://fefgnmac41fborlf.public.blob.vercel-storage.com/Taxera-eCompliance-zQBDOn4VJr8pF8wNbyaFLNdS0pmvnL.pdf"}
                  download
                  target="_blank"
                >
                  <Button
                    text="Learn More"
                    variant="ghost"
                    className="w-[160px] h-[50px] bg-transparent"
                    hoverColor="blue-700"
                    textColor="white"
                  />
                </a>
              </div>
            </div>
            <div
              class="row-span-2 col-start-9 justify-end items-end relative top-[1px] hidden lg:flex"
            >
              <img
                src={inverse.src}
                alt="decoration"
                class="z-50 flex justify-end items-end rotate-[180deg] relative"
              />
            </div>
            <div
              class="flex flex-row text-white justify-end items-end w-full col-span-3 col-start-10 row-start-2"
            >
              <div class="flex flex-col">
                <div
                  class="justify-end items-end relative top-[1px] hidden lg:flex"
                >
                  <img
                    src={inverse.src}
                    alt="decoration"
                    class="z-50 flex justify-end items-end rotate-[180deg] relative"
                  />
                </div>
                <div
                  class="lg:flex hidden w-full h-full relative z-40 flex-col justify-end items-end row-start-2 lg:w-full bg-[whitesmoke] rounded-tl-2xl p-3"
                >
                  <div
                    class="flex justify-center items-center absolute top-0 -right-3 bg-[whitesmoke] rounded-full h-[60px] w-[60px] z-[60]"
                  >
                    <div
                      class="bg-blue-700 text-[whitesmoke] text-md rounded-full p-2"
                    >
                      <ArrowRight
                        class="hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:translate-x-1"
                      />
                    </div>
                  </div>
                  <div
                    class="flex flex-col justify-center items-end rounded-tl-2xl relative z-50"
                  >
                    <div
                      class="flex order-2 justify-end items-center rounded-tl-xl"
                    >
                      <div
                        class="flex flex-col gap-4 p-3 pb-0 bg-blue-700 rounded-xl"
                      >
                        <p class="text-[whitesmoke] text-[16px] text-balance">
                          Find out how Taxera can help you achieve compliance in
                          record time, with a few clicks.
                        </p>
                        <img src={tax.src} alt="tax" class="rounded-xl pb-3" />
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
