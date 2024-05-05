<script lang="ts">
    import { inview } from "svelte-inview";
    export let sections = [];
    export let activeSection;
    const handleEnter = id => (activeSection = id);
</script>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
</style>

{#each sections as section}
    <div id={section.id}>
        <svelte:component this={section.item} id={section.id} enterFunc={() => handleEnter(section.id)} />
    </div>
{/each}
