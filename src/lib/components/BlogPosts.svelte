<script lang="ts">
    interface BlogPageProp {
        blogPosts: ProcessedPost[];
    }

    let { blogPosts }: BlogPageProp = $props();
    // $inspect(bloPosts)
</script>

<section >
    <ul class="blog-container" >
        {#each blogPosts as blogPost}
        <li class="blog-card">
            <article class="blog-card">
                <a href='/blog/{blogPost.slug}'>
                    <img class="" 
                        src={blogPost.coverImageURL} 
                        alt={blogPost.coverImageAlt} 
                    />
                </a>
                    <h1 class="text-2xl">{blogPost.title}</h1>
                <p>{blogPost.author} - {blogPost.datePublished}</p>
            </article>
        </li>
        {/each}
    </ul>
</section>
