<script lang="ts">
    import Technologies from "./components/Parts/Technologies.svelte";
    import Main from "./components/Parts/Main.svelte";
    import Projects from "./components/Parts/Projects.svelte";
    import Experience from "./components/Parts/Experience.svelte";
    import Contact from "./components/Parts/Contact.svelte";
    import Nav from "./components/Nav.svelte";
    import Content from "./components/Content.svelte";

    const sections: NavItem[] = [
        {
            item: Main,
            id: 'main',
            title: 'Home'
        },
        {
            item: Technologies,
            id: 'skills',
            title: 'Skills'
        },
        {
            item: Experience,
            id: 'experience',
            title: 'Experience'
        },
        {
            item: Projects,
            id: 'projects',
            title: 'Projects'
        },
        {
            item: Contact,
            id: 'contact',
            title: 'Contact'
        },
    ];
    let activeSectionId = sections[0].id;
</script>


<div class="overflow-x-hidden">
    <div>
        <Content sections={sections} bind:activeSection={activeSectionId}/>
    </div>
    <div>
        <Nav sections={sections} activeSectionId={activeSectionId}/>
    </div>
</div>

