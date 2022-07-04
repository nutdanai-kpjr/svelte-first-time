<script lang="ts">
</script>

<div>
	<slot />
</div>

<style>
	div {
		/* font-size: 1.5rem; */
		/* font-weight: bold; */
		/* text-align: ; */

		padding: 1rem;
		margin: 3rem 1rem 3rem 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
	}

	@media (max-width: 480px) {
		div {
			padding: 1rem;
			margin: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0px;
		}
	}
</style>
