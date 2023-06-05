<script lang="ts">
    import svelte from "$lib/images/svelte.png";
    import dotnet from "$lib/images/dotnet.png";
    import jira from "$lib/images/jira.png";
    import laravel from "$lib/images/laravel.png";
    import postgres from "$lib/images/postgres.png";
    import mongo from "$lib/images/mongo.png";
</script>

<div id="skills" class="flex justify-center  pt-32">
    <div class="w-full xl:w-9/12 2xl:w-7/12"> 
           <div class="flex pl-5">
        <h3 class="border-b-4 text-xl pb-2 pr-10">Skills</h3>
    </div>
    <div
        class="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-16 justify-around"
    >
        <div class="pb-10 flex justify-center">
            <img class="w-24 h-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={dotnet} alt="dotnet" />
        </div>
        <div class="pb-10 flex justify-center">
            <img class="w-24 h-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={laravel} alt="laravel" />
        </div>
        <div class="pb-10 flex justify-center">
            <img class="w-24 h-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={svelte} alt="svelte" />
        </div>
        <div class="pb-10 flex justify-center">
            <img class="w-24 h-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={postgres} alt="sql" />
        </div>
        <div class="pb-10 flex justify-center">
            <img class="h-24 w-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={mongo} alt="nosql" />
        </div>
        <div class="flex justify-center">
            <img class="w-24 h-24 grayscale hover:grayscale-0 transition duration-500 ease-in-out" src={jira} alt="jira" />
        </div>
    </div>
</div>

</div>