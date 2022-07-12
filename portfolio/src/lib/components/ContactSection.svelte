<script lang="ts">
	import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
</script>

<PrimarySection>
	<h4>Contact</h4>
	<div>
		<a href="">Github ↗︎</a>
		<a href="">LinkedIn ↗︎</a>
		<a href="">Email ↗︎</a>
	</div>
</PrimarySection>

<style>
	a {
		margin-right: var(--space-md);
		line-height: 1.5rem;
	}
	h4 {
		font-weight: 500;
		margin: var(--space-md) 0 var(--space-md) 0;
	}
	div {
		/* font-size: 1.5rem; */
		/* font-weight: bold; */
		/* text-align: ; */

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	@media (max-width: 480px) {
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 0px;
		}
	}
</style>
