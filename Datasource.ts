import Features from './Features'

export default interface Datasource {
    id: string;
    name: string;
    url: string;
    features: Features;
}