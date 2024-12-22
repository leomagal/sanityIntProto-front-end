// import type { DevExperience } from "$lib/types/sanity";
import sanityClient from "$lib/utils/sanity";
import { processBlogPost } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {

    const rawPosts: Post[] = await 
        sanityClient.fetch('*[_type == "post"]');
    
    // console.log("Rawposts: \n" + rawPosts);

    const blogPosts: ProcessedPost[] = rawPosts.map(processBlogPost);
    // console.log("Procesed Post :\n" + blogPosts);


    return { blogPosts };
}

