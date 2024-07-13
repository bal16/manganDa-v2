import { PageProps, Store } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";



const Sidebar = () => {
    const user = usePage<PageProps>().props.auth.user;
    const number = "12345"; // ?? ISI NOMER WA UNTUK DIHUBUNGI
    const message = `Halo, Admin Saya ${user.username} ingin tanya-tanya.`;
    const [stores, setStores] = useState<Store[]>([]);

//  TODO: HOW ABOUT CHANGE TO USEQUERY() HOOKS --tanstackQuery
    useEffect(() => {
        const fetchTopRatedStores = async () => {
            try {
                const response = await axios.get("/api/top-rated-store");
                if(response.data){
                    setStores(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchTopRatedStores();
    }, []);

    return (
        <aside className="hidden w-3/5 p-2 text-center border-l-[0.1px] border-primary-950 xl:flex text-primary-950 dark:text-primary-300  sticky top-0 h-screen">
            <div className="w-full h-full px-3 py-0 text-start">
                <div className="w-full px-4 pt-3 pb-6 mb-4 border rounded-2xl border-primary-950 text-start">
                    <h3 className="text-xl font-bold">
                        Hubungi <br />
                        Kontak Kami
                    </h3>
                    <p className="py-2 mb-2 font-light">
                        Jika Anda memiliki pertanyaan atau membutuhkan bantuan,
                        jangan ragu untuk menghubungi kami. Tim kami siap
                        membantu Anda dengan informasi dan dukungan yang Anda
                        butuhkan.
                    </p>
                    <div className="grid gap-2 xl:grid-cols-2">
                        <Link
                            href={`https://wa.me/${number}?text=${encodeURI(message)}`}
                            target="_blank"
                            className=" px-4 py-2 text-center rounded-full bg-primary-300 text-primary-950 hover:text-primary-300  hover:bg-primary-900   dark:hover:bg-primary-900 w-full transition-colors ease-in"
                        >
                            Hubungi Kami
                        </Link>
                        {user.role_id == 3 || user.role_id == 2 ? (
                            ""
                        ) : (
                            <Link
                                href={"#"}
                                className="px-4 py-2 rounded-full bg-primary-900   hover:bg-primary-700   dark:hover:bg-primary-700 w-full transition-colors ease-in"
                                as="button"
                            >
                                Daftar Toko
                            </Link>
                        )}
                    </div>
                </div>
                <div className="w-full px-4 pt-3 pb-10 border rounded-2xl border-primary-950 text-start">
                    <h3 className="text-xl font-bold">
                        Rekomendasi <br />
                        Toko Untukmu
                    </h3>
                    {/* Section Makanan Populer */}
                    <section className="">
                        {stores?.filter((store:Store) => store.is_validate)
                            .map((store:Store, i:number) => (
                                <div key={i} className="py-2">
                                    <h4 className="font-semibold">
                                        <Link
                                            href={`/profile/${store.user_id}`}
                                        >
                                            {store.name}
                                        </Link>
                                    </h4>
                                    <p className="font-light">
                                        {store.description}
                                    </p>
                                </div>
                            ))}
                    </section>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
