import { Post as IPost, PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import { FaComment, FaStore } from "react-icons/fa";
import { Bookmark } from "./icons";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { TbThumbUp, TbThumbUpFilled } from "react-icons/tb";
import Checkbox from "./Checkbox";

const Post = ({ data }: { data: IPost }) => {
    const user = usePage<PageProps>().props.auth.user;
    return (
        <article className="block border-b-[0.1px] px-4 md:px-10 py-3 border-marshland-950 min-h-full max-w-screen flex-wrap overflow-x-hidden">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="avatar placeholder">
                        <div className="w-12 rounded-full bg-neutral text-neutral-content">
                            <img
                                src={
                                    "https://avatar.iran.liara.run/username?username=" +
                                    data.user.username
                                }
                                alt={data.user.username + "'s Profile"}
                            />
                        </div>
                    </div>
                    <div className="-mt-4 ps-2">
                        <Link
                            href={"/profile/" + data.user.username}
                            className="text-sm font-light text-start"
                        >
                            <p
                                className={
                                    data.user.role_id == 3
                                        ? "px-4 py-1 text-sm rounded-full bg-green-yellow-500 w-16"
                                        : ""
                                }
                            >
                                {data.user.name}
                            </p>{" "}
                            @{data.user.username} -{" "}
                            {moment(data.updated_at).fromNow()}
                        </Link>
                        {data.user.role_id == 3 && (
                            <span className="w-16 px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-primary-950">
                                <FaStore className="inline -mt-1 me-2" />
                                Toko
                            </span>
                        )}
                    </div>
                </div>
                {/* <div id="more" className="mb-5 dropdown dropdown-bottom dropdown-end"> */}
                {/* <button disabled={auth.user.role_id == 2} tabIndex={0} className="m-1 bg-transparent">
                        <Icon
                            icon="ep:more-filled"
                            style={{ color: "#4B5563" }}
                            width="2rem" height="2rem"
                        />
                    </button> */}
                {/* <ul tabIndex={0} className="dropdown-data z-[1] menu p-2 shadow bg-base-100 rounded-box w-30"> */}
                {/* <li style={{ display: isOwner ? "block" : "none" }}>
                            <button disabled={auth.user.role_id == 2} onClick={handleDelete}>
                                <Icon icon="material-symbols:delete" style={{ color: "#ff0000" }} width="2rem" height="2rem" />
                                <p className="text-m">delete</p>
                            </button>
                        </li> */}
                {/* <li style={{ display: isOwner ? "none" : "block" }}>
                            <button disabled={auth.user.role_id == 2} onClick={() => document.getElementById("modal_"+data.id).showModal()}>
                                <Icon icon="ic:round-report-problem" style={{ color: "#4B5563" }} width="2rem" height="2rem" />
                                <p className="text-m">report</p>
                            </button>
                        </li> */}
                {/* </ul>
                </div> */}
            </div>

            <Link
                href={"/posts/" + data.uuid}
                className="-mt-1 font-normal ms-[3.75rem] text-start break-words whitespace-pre-wrap overflow-hidden  block "
            >
                <p className="mb-2">{data.body}</p>
                {data.store_id && (
                    <Link
                        href={`/profile/${data.store?.uuid}`}
                        className="px-2 py-1 rounded bg-primary-950"
                    >
                        <FaStore className="inline-flex" /> {data.store?.name}
                    </Link>
                )}
                {data.image && (
                    <div className="overflow-hidden bg-slate-700 rounded-xl">
                        <img
                            className="w-full"
                            src={`/storage/${data.image}`}
                            alt={`postimage-${data.id}`}
                        />
                    </div>
                )}
            </Link>

            <div className="flex justify-end mt-2 space-x-4">
                <label
                    className="text-gray-600 transition-colors cursor-pointer hover:text-primary-800"
                    htmlFor={"like-" + data.uuid}
                >
                    <span className="px-2 py-1 pt-1 -mb-2 text-sm rounded bg-primary-950 text-primary-300">
                        {data.likes?.length}
                    </span>
                    <Checkbox
                        className="hidden peer/like"
                        disabled={user.role_id == 2}
                        defaultChecked={
                            data.likes?.find((like) => like.user_id == user.id)
                                ?.id != null
                        }
                        id={"like-" + data.uuid}
                        onClick={() =>
                            console.log(
                                data.likes?.find(
                                    (like) => like.user_id == user.id
                                )
                            )
                        }
                    />
                    <TbThumbUpFilled
                        size="2rem"
                        className="inline-block p-1 peer-checked/like:text-primary-900 peer-disabled/like:cursor-not-allowed"
                    />
                </label>
                {/* <button className="text-gray-600 hover:text-primary-800" disabled={user.role_id == 2} onClick={handleBookmark}> */}
                <label
                    className="text-gray-600 transition-colors cursor-pointer hover:text-primary-800"
                    htmlFor={"bookmark-" + data.uuid}
                >
                    {/* <Icon icon="material-symbols:bookmark" style={{ color: bookmarked ? "#ff0000" : "" }} width="2rem" height="2rem" /> */}
                    <Checkbox
                        className="hidden peer/bookmark"
                        disabled={user.role_id == 2}
                        defaultChecked={
                            data.bookmarks?.find(
                                (bookmark) => bookmark.user_id == user.id
                            )?.id != null
                        }
                        id={"bookmark-" + data.uuid}
                        onClick={() =>
                            console.log(
                                data.bookmarks?.find(
                                    (bookmark) => bookmark.user_id == user.id
                                )
                            )
                        }
                    />
                    <RiBookmarkFill
                        size="2rem"
                        className="p-1 peer-checked/bookmark:text-primary-900 peer-disabled/bookmark:cursor-not-allowed"
                    />
                </label>
                <Link
                    className="text-gray-600 transition-colors cursor-pointer hover:text-primary-800"
                    href={"/post/" + data.uuid}
                >
                    {/* <Icon icon="material-symbols:comment" width="2rem" height="2rem" /> */}
                    <FaComment size="2rem" className="p-1" />
                </Link>
            </div>
        </article>
    );
};

export default Post;
