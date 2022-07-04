<script lang="ts">
	import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
</script>

<PrimarySection>
	<img src="avartar.png" alt="Avartar" />

	<h3>I craft web.</h3>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptas molestiae perferendis
		animi in! Numquam dignissimos tempore ipsam, sunt asperiores suscipit esse quidem amet accusamus
		aliquid delectus ad eius pariatur!
	</p>
	<a href={'/about'}>Let's see →</a>
</PrimarySection>

<style>
	h3 {
		font-weight: 600;
		margin: var(--space-sm) 0 var(--space-sm) 0;
	}
	img {
		width: 80px;
		height: 80px;
	}
</style>
