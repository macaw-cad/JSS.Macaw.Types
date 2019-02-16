export type Tweet = {
    full_text: string;
    text: string;
    created_at: string;
    user: TwitterUser;
    entities: any; // todo
    extended_entities: any // todo
}

type TwitterUser = {
    screen_name: string;
    url: string;
}