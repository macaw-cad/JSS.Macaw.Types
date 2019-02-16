import { Image, Video, Link, StringItem } from './FeatureTypes';

export default interface RelatedItems {
    relatedMedia: {
        items: Array<Image | Video>
    }
    // everything that's 'any' type, we don't use yet
    relatedDocuments?: any
    relatedImages?: any
    relatedVideos?: any
    relatedPage?: Link | null
    relatedPages?: any
    relatedPageText?: StringItem
}