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

export interface Store  {
    id: number;
    uuid: string;
    name: string;
    user_id: number;
    user: User;
    description: string;
    address: string;
    map_link: string;
    ratings: number;
    is_open: boolean;
    is_validate: boolean;
    post?: Post|Post[];
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
    created_at: string;
}

export interface Bookmark {
    id: string;
    user_id: number;
    user: User;
    post_id: number;
    post: Post|Post[];
    created_at: string;
}

export interface Menu {
    id: number;
    store_id: number;
    store: Store;
    name: string;
    image?: string;
    price:number;
    created_at: string;
}

export interface Rating {
    id: number;
    post_id: number;
    post: Post;
    rate: number;
    user_id:number;
    user: User;
    created_at: string;
}

export interface Report {
    id:number;
    user_id: number;
    user: User;
    post_id: number;
    post: Post;
    body:string;
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
