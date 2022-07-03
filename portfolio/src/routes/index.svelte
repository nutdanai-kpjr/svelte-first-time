<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
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

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
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

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
