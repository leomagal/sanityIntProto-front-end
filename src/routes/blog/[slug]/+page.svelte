<script lang="ts">
    import TextBlock from "$lib/components/TextBlock.svelte";
    let { data } = $props();
    // $inspect(data);

    const { blogPost } = data ;
    $inspect(blogPost);
    const { title, author, datePublished, content, tags, coverImageURL, coverImageAlt} = blogPost;


</script>

<main class="mx-auto mt-8">
    <img src={coverImageURL} alt={coverImageAlt} class="cover mb-4"/>
    <h1 class="text-5xl text-extrabold mb-4">{title}</h1>
    <p class="text-2xl mb-8">{author} - {datePublished}</p>
    <div>
        {#each content as block}
            {#if block.type === 'text'}
            <TextBlock {block} />           {:else}
                <img src={block.url} alt={block.alt}>
            {/if}
        {/each}
    </div>
    <!-- <p>{content}</p> -->
</main>

<style>
    main {
        max-width: 80vw;
    }
</style>