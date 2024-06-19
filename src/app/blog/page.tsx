import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "pastwork",
// other metadata
};

const Blog = () => {
return (
<>
    <Breadcrumb pageName="pastwork" description="ผลงงานที่ผ่านมาทั้งหมด" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงงานที่ผ่านมาทั้งหมด
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                            <img src="/images/pastwork/Curator.png" alt="Heroicons"
                                className="w-full h-64 object-cover" />
                            <div className="p-4 md:p-6">
                                <h3 className="text-xl font-semibold text-orange-500 dark:text-orange-300 mb-2">
                                    Curator
                                </h3>
                                <a href="/curator"
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                            <img src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
                                alt="Hero Patterns" className="w-full h-64 object-cover" />
                            <div className="p-4 md:p-6">
                                <h3 className="text-xl font-semibold text-cyan-500 dark:text-cyan-300 mb-2">
                                    Hero Patterns
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                                    A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use
                                    in your web projects.
                                </p>
                                <a href="#"
                                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full">
                                    Learn More
                                </a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Blog;