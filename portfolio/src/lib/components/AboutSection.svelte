<script lang="ts">
	import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
</script>

<PrimarySection>
	<img src="myicon.png" alt="Avartar" />
	<h2>About me</h2>
	<p>
		My name is Nutdanai Kitphermjaroen. I am CS student who interested in using web and mobile
		applications to improve people's well-being.
	</p>
	<p>
		As an undergraduate student studying computer science, I have developed web and mobile
		applications both for my personal interests and for university projects since 2019.
	</p>
	<a href="">View My CV ↗︎</a>
</PrimarySection>

<style>
	img {
		width: 125px;
		height: 125px;
	}
	h2 {
		font-size: var(--font-xl);
		font-weight: 600;
		margin: var(--space-sm) 0 var(--space-sm) 0;
		text-align: start;
	}
</style>
