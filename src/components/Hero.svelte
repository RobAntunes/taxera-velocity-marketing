<script lang="ts">
  import inverse from "../assets/inverse-radius.svg";
  import tax from "../assets/tax.jpg";
  import { ArrowRight } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import hero from "../assets/hero.jpg";
</script>

<section
  class="p-6 pt-0 lg:p-12 lg:pt-0 bg-[whitesmoke] min-h-screen w-screen flex justify-center items-center"
>
  <div class="relative h-full max-h-[80vh] rounded-3xl w-full">
    <!-- Image takes full container size and is positioned absolutely -->
    <img
      src={hero.src}
      alt="hero"
      class="absolute inset-0 w-full h-full object-cover rounded-3xl"
    />

    <!-- Top-left Logo Box -->
    <div
      class="absolute top-0 left-0 bg-[whitesmoke] isolate rounded-br-2xl p-4 pt-0 lg:p-8 lg:pt-0"
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
        class="text-blue-700 text-xl lg:text-2xl font-bold flex justify-center items-center"
      >
        Taxera<span class="font-regular mx-2 lg:mx-3">|</span>eCompliance
      </h1>
    </div>

    <!-- Main Text Area -->
    <div
      class="h-full px-6 md:px-12 lg:pl-24 text-white relative z-50 flex flex-col gap-4 justify-end"
    >
      <div class="grid grid-cols-1 md:grid-cols-12 items-end h-full">
        <div class="col-span-1 md:col-span-7 lg:col-span-6 flex flex-col justify-end row-start-2 pb-12 md:pb-24">
          <h2 class="leading-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[96px]">
            Compliance, {" "}meet Velocity
          </h2>
          <h3 class="text-base md:text-[18px] leading-normal font-light max-w-md md:max-w-xl">
            See Risks Before They Happen. Act Smarter Every Day.
          </h3>
          <div class="flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <Button
              text="Get Started"
              variant="primary"
              class="w-[140px] h-[44px] lg:w-[160px] lg:h-[50px]"
            />
            <Button
              text="Learn More"
              variant="ghost"
              bgColor="blue-700"
              hoverColor="blue-700"
              textColor="white"
              class="w-[140px] h-[44px] lg:w-[160px] lg:h-[50px]"
            />
          </div>
        </div>
        <div
          class="hidden md:flex row-span-2 col-start-9 lg:col-start-9 lg:flex justify-end items-end relative top-[1px]"
        >
          <img
            src={inverse.src}
            alt="decoration"
            class="z-50 flex justify-end items-end rotate-[180deg] relative"
          />
        </div>
        <div
          class="flex flex-row text-white justify-end items-end w-full col-span-1 md:col-span-4 lg:col-span-3 md:col-start-9 lg:col-start-10 row-start-3 md:row-start-2 mt-8 md:mt-0"
        >
          <div class="flex flex-col w-full">
            <div class="hidden md:flex justify-end items-end relative top-[1px]">
              <img
                src={inverse.src}
                alt="decoration"
                class="z-50 flex justify-end items-end rotate-[180deg] relative"
              />
            </div>
            <!-- Bottom-right Box -->
            <div
              class="w-full relative z-40 flex flex-col justify-end items-end bg-[whitesmoke] rounded-tl-2xl p-3"
            >
              <div
                class="flex justify-center items-center absolute top-0 -right-3 bg-[whitesmoke] rounded-full h-[50px] w-[50px] md:h-[60px] md:w-[60px] z-[60]"
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
                class="flex flex-col justify-center items-center rounded-tl-2xl relative z-50"
              >
                <div
                  class="flex order-2 justify-end items-center rounded-tl-xl"
                >
                  <div
                    class="flex flex-col gap-3 lg:gap-4 p-3 pb-0 bg-blue-700 rounded-xl"
                  >
                    <p class="text-[whitesmoke] text-sm lg:text-[16px] text-balance">
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
</section>
