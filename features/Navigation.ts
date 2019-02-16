import NavigationItem from './NavigationItem'

export default interface Navigation {
    title?: {
        value: string;
        type?: string;
    },
    items?: NavigationItem[];
} 