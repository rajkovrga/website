<script lang="ts">
	import Technologies from "./components/technologies.svelte";
	import Main from "./components/main.svelte";
	import Projects from "./components/projects.svelte";
	import Experience from "./components/experience.svelte";
	import Contact from "./components/contact.svelte";
	import Navigation from "./components/navigation.svelte";
</script>

<Navigation />

<div class="overflow-x-hidden">
	<Main />
	<Technologies />
	<Experience />
	<Projects />
	<Contact />
</div>
