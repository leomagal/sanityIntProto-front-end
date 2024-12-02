import sanityClient, { processBlogPost } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
// import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
    const {slug} = params;
    const rawPosts: Post[] = await 
        sanityClient.fetch(
            `*[_type == "post" && slug == $slug]`, {slug}
        );

    if (rawPosts.length !== 1) {
        throw error(404, `Post not found`);
    } else {
        const blogPost: ProcessedPost = processBlogPost(rawPosts[0]);
        console.log("Successfully loaded post");
        return { blogPost };
    }
}