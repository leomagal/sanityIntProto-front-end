<script lang="ts">
    import BlogPosts from "$lib/components/BlogPosts.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
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

<!-- title section -->
<section class="text-center py-20">
    <h1 class="text-3xl md:text-5xl font-bold">
      Web3 para as massas
    </h1>
    <p class="text-lg text-gray-600 mt-4 leading-relaxed">
      Escalabilidade sem limites, segurança sem precedentes <br>
      e uma experiência simples e poderosa.
    </p>
    <p class="text-md text-gray-500 mt-6">
      Descubra o futuro da Web3 com a Radix!
    </p>
</section>

<!-- first set of posts -->
<BlogPosts  {blogPosts} />

<section class="text-center py-20">
    <h2 class="text-3xl md:text-3xl font-bold">
        Pronto para uma experiência radicalmente diferente?
    </h2>
</section>

<!-- second set of posts -->
<BlogPosts  {blogPosts} />

<section class="text-center py-20">
    <h2 class="text-3xl md:text-3xl font-bold">
        Participe da nossa comunidade
    </h2>
</section>

<div class="flex justify-center">
    <Button variant="secondary" size="lg" class="rounded-full">
        <svg class="w-10 h-10 fill-current text-black dark:text-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.67,38.57l-.82,11.54A2.88,2.88,0,0,0,28.14,49l5.5-5.26,11.42,8.35c2.08,1.17,3.55.56,4.12-1.92l7.49-35.12h0c.66-3.09-1.08-4.33-3.16-3.55l-44,16.85C6.47,29.55,6.54,31.23,9,32l11.26,3.5L45.59,20.71c1.23-.83,2.36-.37,1.44.44Z" stroke-linecap="round"/>
        </svg>
        <div class="text-xl font-bold">&nbsp;&nbsp;Telegram</div>
    </Button>
</div>
<br><br><br><br><br>