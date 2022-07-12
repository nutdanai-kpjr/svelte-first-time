<script lang="ts">
	import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
</script>

<PrimarySection>
	<div><h4>Contact</h4></div>
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
		align-items: flex-start;
	}

	@media (max-width: 480px) {
		a {
			margin-right: 0;
			line-height: 1.75rem;
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 0px;
		}
	}
</style>
