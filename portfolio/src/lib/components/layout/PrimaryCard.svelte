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
		margin: 0 0 3rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
	}

	@media (max-width: 480px) {
		div {
			border: 1px solid red;
			padding: 1rem;
			margin: 0 0 3rem 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 0px;
		}
	}
</style>
