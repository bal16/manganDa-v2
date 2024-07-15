export interface Role {
    id: number;
    name: string;
    created_at: string;
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role_id: number;
    role: Role;
    store?: Store;
    created_at: string;
}

export interface Store {
    id: number;
    uuid: string;
    name: string;
    user_id: number;
    user: User;
    description: string;
    address: string;
    map_link: string;
    ratings: number;
    rating?: Rating | Rating[];
    is_open: boolean;
    is_validate: boolean;
    post?: Post | Post[];
    created_at: string;
}

export interface Post {
    id: number;
    uuid: string;
    user_id: number;
    user: User;
    body: string;
    store_id?: number;
    store?: Store;
    image?: string;
    likes?: Like[];
    bookmarks?: Bookmark[];
    created_at: string;
    updated_at: string;
}

export interface Bookmark {
    id: number;
    user_id: number;
    user: User;
    post_id: number;
    post: Post | Post[];
    created_at: string;
}

export interface Menu {
    id: number;
    store_id: number;
    store: Store;
    name: string;
    image?: string;
    price: number;
    created_at: string;
}

export interface Rating {
    id: number;
    post_id: number;
    post: Post;
    rate: number;
    user_id: number;
    user: User;
    created_at: string;
}

export interface Report {
    id: number;
    user_id: number;
    user: User;
    post_id: number;
    post: Post;
    body: string;
    created_at: string;
}

export interface Comment {
    id: number;
    user_id: number;
    user: User;
    post_id: number;
    post: Post;
    body: string;
    created_at: string;
}

export interface Like {
    id: number;
    user_id: number;
    user: User;
    post_id: number;
    post: Post;
    created_at: string;
}

export interface PaginatedDatas {
    current_page: number;
    data?: (Post | Store | Report | Comment)[];
    first_page_url?: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [
        {
            url?: string;
            label: string;
            active: boolean;
        },
        {
            url: string;
            label: string | number;
            active: boolean;
        },
        {
            url?: string;
            label: string;
            active: boolean;
        }
    ];
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}
