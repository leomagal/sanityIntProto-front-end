<script lang="ts">
    import BlogPosts from "$lib/components/BlogPosts.svelte";
    // interface PageProps {
    //     data: {
    //         rawPosts: Post[];
    //     };
    // }

    let pageData = $props();
    // $inspect(pageData);

    const { blogPosts } = pageData.data;
    // $inspect(blogPosts);
</script>

<BlogPosts  {blogPosts} />

