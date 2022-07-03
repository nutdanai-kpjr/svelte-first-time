<script lang="ts">
	import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
	import projects from '$lib/data/projects.json';
	import ProjectCard from './project/ProjectCard.svelte';
</script>

<PrimarySection
	>Project Showcase
	{#each projects as project (project.name)}
		<ProjectCard {project} />
	{/each}
</PrimarySection>

<style>
</style>
