type Post = {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  author: 'Magal' | 'Ornito' | 'Texugo' | 'Neto' | 'Guilherme' | 'Francis' | 'Yuri' | 'Matheus'
  slug: string
  image: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  datePublished: string
  tags?: Array<string>
  content: Array<
    | RawTextContent
    | RawImageContent
  >
};

interface RawTextContent {

    children: Array<{
      marks?: Array<string>
      text: string
      _type: 'span'
      _key: string
    }>
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string

}

interface RawImageContent {
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  
}

interface ProcessedPost {
    title: string;
    slug: string;
    author: string;
    coverImageURL: string;
    coverImageAlt: string;
    datePublished: string;
    tags: string[] | undefined;
    content: Array<ProcessedTextContent | ProcessedImageContent>;
}

interface ProcessedTextContent {
  type: 'text';
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
  textToRender: Array<{
    text: string;
    marks?: Array<string>;
    href?: string;
  }>;
}

interface ProcessedImageContent {
  type: 'image';
  url: string;
  alt?: string;
}