import { createClient, type ClientConfig } from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

const config: ClientConfig = {
    projectId: '8pgu90qr' ,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-12-01',
};

const sanityClient = createClient(config);

export default sanityClient;

export function processBlogPost(rawPost: Post) {
    const builder = imageUrlBuilder(sanityClient);
    const coverImageURL = builder.image(rawPost.image).url();
    const processedPost: ProcessedPost = {
        title: rawPost.title,
        author: rawPost.author,
        datePublished: rawPost.datePublished,
        slug: rawPost.slug,
        tags: rawPost.tags,
        coverImageURL,
        coverImageAlt: '',
        content: rawPost.content.map(processPostContent),
    }
    return processedPost;

}

function processPostContent(content: RawTextContent | RawImageContent) {
    if (content._type === 'block') {
        const processedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map((child) => child.text).join('\n'),
        };
        return processedTextContent;
    } 
    else {
        // Image
        const builder = imageUrlBuilder(sanityClient);
        const contentImageURL = builder.image(content).url();

        const processedImage: ProcessedImageContent = {
            type: 'image',
            url: contentImageURL
        }
        return processedImage;
    }
}