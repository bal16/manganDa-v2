import Header from "@/Components/layouts/Header";
import Post from "@/Components/Post";
import { usePosts } from "@/Hooks/posts";
import { Post as IPost } from "@/types";
import { useEffect, useState } from "react";
import html from "html-react-parser";
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    const [newUrl, setNewUrl] = useState("/api/posts?limit=1");
    const { data, isLoading } = usePosts(newUrl);
    const [newData, setNewData] = useState<IPost[]>([]);
    useEffect(() => {
        isLoading ||
            setNewData((prev) => [...prev, ...(data?.data as IPost[])]);
    }, [isLoading]);
    const renderPosts = (local: IPost[]) =>
        local?.map((post: IPost) => (
            // <>
            <Post data={post} key={post.id} />
            // </>
        ));

    return (
        <>
            <Header>/Home</Header>
            {renderPosts(newData as IPost[])}
            {isLoading && <div className="my-10">Loading</div>}
            {data?.next_page_url && (
                <button
                    onClick={() => setNewUrl(data.next_page_url as string)}
                    className="p-2 mx-1 mt-10 transition-all ease-in rounded bg-primary-950"
                    disabled={isLoading}
                >
                    Load More
                </button>
            )}
        </>
    );
}
Home.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="Home" />
);
