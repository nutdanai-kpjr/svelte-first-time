<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<ContactSection />
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		footer {
			padding: 1rem;
		}
	}
</style>
