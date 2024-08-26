import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    // other metadata
};

const blogPosts = [
    { href: "/britania", src: "/images/pastwork/Britania Ratchaphruek.jpg", title: "Britania" ,second:"Britania Ratchaphruek - Nakhon in"},
    { href: "/curator", src: "/images/pastwork/Curator(2).png", title: "Curator" ,second:"Curator Ratchapruek - Surinthorn" },
    { href: "/richton", src: "/images/pastwork/Richton Suan Luang-Phatthanakan.jpg", title: "Richton", second: "Richton Suan Luang-Phatthanakan" },
    { href: "/maxxi", src: "/images/pastwork/max.png", title: "Maxxi-Prime" ,second:"Maxxi-Prime" },
    { href: "/noble", src: "/images/pastwork/nc.png", title: "Noble Curve" ,second:"Noble Curve" },
    { href: "/richyrichton", src: "/images/pastwork/Richy Richton เพิ่มสิน.jpg", title: "Richy Richton", second: "Richy Richton เพิ่มสิน - ดอนเมือง" },
    { href: "/icopenh", src: "/images/pastwork/logo_icopenh-1-1022x1024.jpg", title: "Icopenh" ,second:"Icopenh สุขุมวิท76" },
    { href: "/cube", src: "/images/pastwork/TB.png", title: "The Cube Loft" ,second:"The Cube Loft" },
    { href: "/green", src: "/images/pastwork/green.png", title: "Green Ville II", second: "Green Ville II condominium" },
    { href: "/astoria", src: "/images/pastwork/Astoria-Ratchaphruek.jpg", title: "The Astoria", second: "The Astoria ราชพฤกษ์ รัตนาธิเบศร์" },
    { href: "/phc", src: "/images/pastwork/PHC.jpg", title: "PHC Hierarchy" ,second:"PHC Hierarchy" },
    { href: "/muve", src: "/images/pastwork/muve.png", title: "The Muve" ,second:"he Muve บางแค" },
    
];

const Blog = () => {
    return (
        <>
            <Breadcrumb pageName="Work" description="ผลงานที่ผ่านมาทั้งหมด" />
            <section className="body-font animate-fade-up animate-once animate-duration-[1500ms] animate-delay-100 animate-ease-linear">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-3 gap-6">
                        {blogPosts.map((post) => (
                            <a key={post.href} href={post.href}>
                                <div className="bg-white px-5 py-11 shadow-three dark:bg-gray-dark rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                                    <div className="w-5/6 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                        <img src={post.src} className="rounded-md" alt={post.title} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold text-black dark:text-white">{post.title}</h3>
                                        <p className="text-sm mt-2 text-black dark:text-white">{post.second}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
