import { writable } from 'svelte/store';
import sanityClient from "$lib/utils/sanity";
import { processBlogPost } from "$lib/utils/sanity";

// typedef of store state
interface PostsStoreState {
    Home: any;
    Blog: any;
    QandA: any;
    loading: boolean;
    error: string | null;
}

// init 
export const postsStore = writable<PostsStoreState>({
    Home: null,
    Blog: null,
    QandA: null,
    loading: true,
    error: null
});

// load data
export async function fetchPosts(): Promise<void> {
    // set store as loading....
    postsStore.set({ Home: null, Blog: null, QandA: null, loading: true, error: null });
    
    try {
        const [rawHome, rawBlog, rawQandA] = await Promise.all([
            sanityClient.fetch('*[_type == "post"]'),
            sanityClient.fetch('*[_type == "post"]'),
            sanityClient.fetch('*[_type == "post"]')
        ]);

        // console.log("RawHome: \n" + rawHome + "\nRawBlog: \n" + rawBlog + "\nRawQandA: \n" + rawQandA);

        const Home: ProcessedPost[] = rawHome.map(processBlogPost);
        const Blog: ProcessedPost[] = rawBlog.map(processBlogPost);
        const QandA: ProcessedPost[] = rawQandA.map(processBlogPost);
        
        // console.log("Procesed Home :\n" + Home + "\nProcesed Blog :\n" + Blog +"\nProcesed QandA :\n" + QandA);

        postsStore.set({ Home, Blog, QandA, loading: false, error: null });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        postsStore.set({ Home: null, Blog: null, QandA: null, loading: false, error: message });
    }
}