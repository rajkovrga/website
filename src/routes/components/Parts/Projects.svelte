<script lang="ts">
    import blaster from "$lib/assets/images/blaster-logo.jpg";
    import easyWindows from "$lib/assets/images/easy-windows-logo.png";
    import { inview } from "svelte-inview";

    let id: string;
    export let enterFunc: (id: int) => void;
</script>
<div class="flex justify-center pb-0 md:pb-20  pt-32">
    <div class="w-full xl:w-9/12 2xl:w-7/12">
        <div class="flex pl-5">
            <h3 class="border-b-4 text-xl pb-2 pr-10">Projects</h3>
        </div>
        <div class="grid pt-10 sm:pt-10 grid-cols-1 md:grid-cols-2 justify-start">
            <div class="border-0 sm:border-r-4 flex px-4"  data-aos="fade-right" data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <img class="w-24 h-24 rounded-full mr-4 pt-2" src={blaster} alt="blaster pro app"/>
                <div>
                    <h4  class="text-2xl">Blaster Pro - Bosch Home App</h4>
                    <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >January 2020 - July 2021</time
          >
                    <p>Independent development of data releasing applications for new
                        auto parts</p>
                </div>
            </div>
            <div class="flex justify-start px-4 pt-12 md:pt-0"  data-aos="fade-left" data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img class="w-24 h-24 mr-4 pt-2 " src={easyWindows} alt="easy windows app"/>
                <div>
                    <h4 class="text-2xl">Easy Windows - Vrga DEV</h4>
                    <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >October 2022 - Present</time
          >
                    <p>Client business application for bidding on different types of jobs
                        inside an engineering company</p>
                </div>
            </div>
        </div>
        <div id="{id}" use:inview on:enter={() => enterFunc(id)}></div>
    </div>
</div>
