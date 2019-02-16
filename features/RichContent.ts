import { StringItem, Image, Video } from './FeatureTypes';

export default interface RichContent {
    richContentComplete: StringItem;
    richContentPlaceholderImages: { 
        items: Image[];
    };
    richContentPlaceholderVideos: {
        items: Video[];
    };
    richContentMedium: StringItem;
    richContentSimple: StringItem;
}