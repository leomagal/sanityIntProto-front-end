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
            textToRender: content.children.map((child) => {
              const segment: { text: string; marks?: Array<string>; href?: string } = { text: child.text };
              if (child.marks && child.marks.length > 0) {
                segment.marks = child.marks;
                const linkMark = child.marks.find(mark => 
                  content.markDefs?.some(def => def._key === mark && def._type === 'link')
                );
                if (linkMark) {
                  const linkDef = content.markDefs?.find(def => def._key === linkMark);
                  if (linkDef && linkDef._type === 'link') {
                    segment.href = linkDef.href;
                  }
                }
              }
              return segment;
            }),
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