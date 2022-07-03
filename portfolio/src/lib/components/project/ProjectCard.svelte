<script lang="ts">
    import PrimaryCard from "../layout/PrimaryCard.svelte"; 
    export const project: Project = {
        name: "Project Name",
        description: "Project Description",
        image: "https://via.placeholder.com/300x200",
        link: "https://www.google.com",
       startDate: "2020",
         endDate: "2021",
    };

    function getProjectTimeline(project:Project): string{
    return project.startDate + "-" + project.endDate;
}
</script>

<PrimaryCard>
    <h5>{getProjectTimeline(project)}</h5>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
<a href={project.link}>Let's see</a>

</PrimaryCard>