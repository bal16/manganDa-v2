import { PaginatedDatas, Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";

export const usePosts = (url = "/api/posts") => {
    // const [posts, setPosts] = useState<Post[]>();
    // const [paginationProps, setPaginationProps] = useState<PaginatedDatas>();
    // const [isLoading, setIsLoading] = useState(false);
    // const fetchPosts = async () => {
    //     setIsLoading(true);
    //     // fetch posts
    //     try {
    //         const response: PaginatedDatas = (await axios.get(url)).data;
    //         const posts = response.data;
    //         setPosts(posts as Post[]);
    //         setPaginationProps(response);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchPosts();
    // }, [url]);
    // return {
    //     data: posts,
    //     pagination: paginationProps,
    //     isLoading: isLoading,
    // };
    const posts = useQuery({
        queryKey: ['url', url],
        queryFn: async () => {
            const response = await axios.get<PaginatedDatas>(url);
            return response.data;
        },
    });

    return posts;
};
