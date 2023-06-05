<script lang="ts">
	import Footer from "$lib/components/layout/footer.svelte";
	import "../app.css";
	import { page } from "$app/stores";
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>
<main>
		<slot />
</main>
<Footer />
