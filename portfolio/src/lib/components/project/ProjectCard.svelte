<script lang="ts">
	import PrimaryCard from '../layout/PrimaryCard.svelte';
	export let project: Project = {
		name: 'Project Name',
		description: 'Project Description',
		image: 'https://via.placeholder.com/300x200',
		link: 'https://www.google.com',
		startDate: '2020',
		endDate: '2021'
	};

	function getProjectTimeline(project: Project): string {
		return project.startDate + '-' + project.endDate;
	}
</script>

<PrimaryCard>
	<div class="content">
		<h5>{getProjectTimeline(project)}</h5>
		<h3>{project.name}</h3>
		<p>{project.description}</p>
		<a href={project.link}>Let's see ↗︎</a>
	</div>
	<img class="image" src={project.image} alt={project.name} />
</PrimaryCard>

<style>
	.image {
		width: 145px;
		height: 145px;
		border-radius: 15%;
		border: 1px solid #e6e6e6;
	}
	.content {
		margin-right: 2rem;
	}
	.content > * {
		margin: 0;
	}
	.content h5 {
		/* top right buttom left */
		margin: var(--space-sm) 0 var(--space-sm) 0;
	}
	.content h3 {
		font-weight: 200;
		font-size: var(--font--size-lg);
		/* top right buttom left */
		margin: var(--space-md) 0 var(--space-md) 0;
	}
	.content p {
		/* top right buttom left */
		line-height: var(--line-height-base);
		margin: var(--space-sm) 0 var(--space-md) 0;
	}
	@media (max-width: 480px) {
		.image {
			margin: var(--space-lg) 0 var(--space-md) 0;
			width: 300px;
			height: 300px;
			border-radius: 15%;
			border: 1px solid #e6e6e6;
		}
	}
</style>
