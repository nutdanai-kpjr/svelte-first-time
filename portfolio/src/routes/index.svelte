<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';
	import IntroductionSection  from '$lib/components/IntroductionSection.svelte';
	import ProjectShowCaseSection from '$lib/components/ProjectShowCaseSection.svelte';
   
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<IntroductionSection />
	<ProjectShowCaseSection/>
	<ContactSection/>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}


</style>
