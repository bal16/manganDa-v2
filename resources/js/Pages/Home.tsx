import Header from "@/Components/layouts/Header";
import Post from "@/Components/Post";
import { usePosts } from "@/Hooks/posts";
import { Post as IPost } from "@/types";
import { useState } from "react";
import html from 'html-react-parser';
import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    const [newUrl, setNewUrl] = useState("/api/posts?limit=1");
    const { data,  isLoading } = usePosts(newUrl);
    const renderPosts = (local: IPost[]) =>
        local?.map((post: IPost) => (
            <>
                <Post data={post} />
            </>
        ));

    return (
        <>
            <Header>/Home</Header>
            <section className="sm:min-h-[90vh] min-h-[80vh]">
                {isLoading && <div>Loading</div>}
                {isLoading || renderPosts(data?.data as IPost[])}
            </section>
            {data?.links.map((link) => (
                <>
                    <button
                        onClick={(e) => setNewUrl(link.url as string)}
                        className="p-2 mx-1 rounded bg-primary-950 disabled:blur-[1px] disabled:cursor-not-allowed transition-all ease-in"
                        disabled={
                            (typeof link.url != "string" ? true : link.active) || isLoading
                        }
                    >
                        {html(link.label as string)}
                    </button>
                </>
            ))}
        </>
    );
}
Home.layout = (page:React.ReactNode) => <MainLayout children={page} title="Home"  />

