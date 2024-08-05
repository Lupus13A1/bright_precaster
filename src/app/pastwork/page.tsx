import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    // other metadata
};

const blogPosts = [
    { href: "/britania", src: "/images/pastwork/Britania Ratchaphruek.jpg", title: "Britania Ratchaphruek-Nakhon in" },
    { href: "/curator", src: "/images/pastwork/Curator(2).png", title: "Curator Ratchapruek-Surinthorn" },
    { href: "/richton", src: "/images/pastwork/Richton Suan Luang-Phatthanakan.jpg", title: "Richton Suan Luang-Phatthanakan" },
    { href: "/richyrichton", src: "/images/pastwork/Richy Richton เพิ่มสิน.jpg", title: "Richy Richton เพิ่มสิน" },
    { href: "/astoria", src: "/images/pastwork/Astoria-Ratchaphruek.jpg", title: "The Astoria ราชพฤกษ์ รัตนาธิเบศร์" },
    { href: "/icopenh", src: "/images/pastwork/logo_icopenh-1-1022x1024.jpg", title: "Icopenh สุขุมวิท76" },
    { href: "/phc", src: "/images/pastwork/PHC.jpg", title: "PHC Hierarchy" },
    { href: "/cube", src: "/images/pastwork/TB.png", title: "The Cube Loft" },
    { href: "/green", src: "/images/pastwork/green.png", title: "Green Ville II condominium" },
    { href: "/muve", src: "/images/pastwork/muve.png", title: "The Muve บางแค" },
    { href: "/maxxi", src: "/images/pastwork/max.png", title: "Maxxi-Prime" },
    { href: "/noble", src: "/images/pastwork/nc.png", title: "Noble Curve" },
];

const BlogPost = ({ href, src, title }) => (
    <div className="p-4 md:w-1/3">
        <div className="border-2 rounded-lg overflow-hidden">
            <a href={href}>
                <img className="object-cover object-center" src={src} alt="blog" />
            </a>
            <div className="p-6">
                <a className="leading-relaxed mb-3 sm:text-lg" href={href}>
                    {title}
                </a>
            </div>
        </div>
    </div>
);

const Blog = () => {
    return (
        <>
            <Breadcrumb pageName="Work" description="ผลงานที่ผ่านมาทั้งหมด" />

            <section className="body-font">
                <div className="container px-5 py-30 mx-auto">
                    <div className="flex flex-wrap m-4">
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
