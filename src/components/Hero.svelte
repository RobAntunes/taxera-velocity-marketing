<script lang="ts">
  import inverse from "../assets/inverse-radius.svg";
  import tax from "../assets/tax.jpg";
  import { ArrowRight } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import hero from "../assets/hero.jpg";
</script>

<section
  class="p-12 pt-0 bg-[whitesmoke] h-screen w-screen flex justify-center items-center"
>
  <div class="relative w-full h-full max-w-7xl max-h-[80vh] rounded-3xl">
    <!-- Image takes full container size and is positioned absolutely -->
    <img
      src={hero.src}
      alt="hero"
      class="absolute inset-0 w-full h-full object-cover rounded-3xl bg-blend-multiply"
    />

    <!-- Top-left Logo Box -->
    <div
      class="absolute top-0 left-0 bg-[whitesmoke] isolate rounded-br-2xl p-8 pt-0"
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
        class="text-blue-700 text-2xl font-bold flex justify-center items-center"
      >
        Taxera<span class="font-regular mx-3">|</span>eCompliance
      </h1>
    </div>

    <!-- Main Text Area -->
    <div
      class="absolute h-full pb-12 left-12 text-white drop-shadow-2xl flex flex-col gap-4 justify-end flex-grow-1"
    >
      <h2 class="text-[96px] leading-tight font-bold">
        Compliance,<br />meet Velocity
      </h2>
      <h3 class="text-[18px] leading-normal font-light max-w-xl">
        See Risks Before They Happen. Act Smarter Every Day.
      </h3>
      <div class="flex justify-start items-center space-x-4 mt-4">
        <Button
          text="Get Started"
          variant="primary"
          size={{ height: "50px", width: "160px" }}
        />
        <Button
          text="Learn More"
          variant="ghost"
          size={{ height: "50px", width: "160px" }}
          bgColor="blue-700"
          hoverColor="blue-700"
          textColor="white"
        />
      </div>
    </div>

    <div
      class="flex bottom-0 right-0 text-white justify-end items-end w-full h-full"
    >
      <p
        class=" text-white drop-shadow-2xl font-regular text-md relative z-50 p-4 bottom-1 w-1/4 text-balance leading-normal h-full flex items-end flex-wrap break-words"
      >
        Streamlining tax compliance for complex regulatory environments.
      </p>
      <!-- Bottom-right Box -->
      <div
        class="flex flex-col justify-end items-end bottom-0 right-0 w-1/4 h-[40%] bg-[whitesmoke] isolate rounded-tl-2xl"
      >
        <div class="flex order-1 justify-start items-start">
          <img
            src={inverse.src}
            alt="decoration"
            class="z-50 right-0 top-0 rotate-[180deg] translate-y-[101%]"
          />
        </div>
        <div class="flex order-3 justify-start items-end w-full">
          <img
            src={inverse.src}
            alt="decoration"
            class="z-50 left-0 bottom-0 translate-x-[-99%] rotate-[180deg] translate-y-[1%]"
          />
        </div>
        <div
          class=" relative flex order-2 justify-center items-center w-full rounded-tl-xl h-full"
        >
          <div
            class="flex justify-center items-center absolute bg-[whitesmoke] top-5 right-1 rounded-full h-[60px] w-[60px]"
          >
            <div class="bg-blue-700 text-[whitesmoke] text-md rounded-full p-2">
              <ArrowRight
                class="hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:translate-x-1"
              />
            </div>
          </div>
          <div
            class="grid grid-cols-2 grid-rows-3 justify-around items-center p-3 bg-blue-700 rounded-xl h-[90%] w-full mx-3 mt-6"
          >
            <!-- <div class="flex order-1 justify-center items-start">
              <img
                src={inverse.src}
                alt="decoration"
                class="z-50 right-0 top-0 rotate-[180deg] translate-y-[-99%]"
              />
            </div>
            <div class="flex order-3 justify-start items-end w-full">
              <img
                src={inverse.src}
                alt="decoration"
                class="z-50 left-0 bottom-0 translate-x-[-99%] rotate-[180deg]"
              />
            </div> -->
            <p class="text-[whitesmoke] gap-y-4 text-[16px] text-balance col-span-2">
              Find out how Taxera can help you achieve compliance in record time, with a few clicks.
            </p>
            <img
              src={tax.src}
              alt="tax"
              class="object-cover w-full h-6/7 rounded-lg row-start-2 col-span-2 row-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
