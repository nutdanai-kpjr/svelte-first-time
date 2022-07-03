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
		<a href={project.link}>Let's see</a>
	</div>
	<img class="image" src={project.image} alt={project.name} />
</PrimaryCard>

<style>
	.image {
		width: 145px;
		height: 145px;
		border-radius: 15%;
		border: 1px solid #e6e6e6;
		flex: 1;
	}
	.content {
		flex: 3;
	}
	.content > * {
		margin: 0;
		/* font-weight: bold; */
		/* margin-bottom: 0.5rem; */
	}
</style>
