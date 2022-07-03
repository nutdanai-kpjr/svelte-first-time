<script lang="ts">
    import PrimarySection from '$lib/components/layout/PrimarySection.svelte';
    import projects from '$lib/data/projects.json';
	// type Project = {
	// 	name: string;
	// 	description: string;
	// 	image: string;
	// 	link: string;
	// 	startDate:Date;
	// 	endDate:Date;
	// }
</script>

<PrimarySection>Project Showcase
	{#each projects as project (project.name)}
    <p>{project.name}</p>
    {/each}

</PrimarySection>

<style>

</style>