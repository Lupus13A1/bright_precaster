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
  {/* <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        <div className="rounded-2xl p-1 cursor-pointer hover:-translate-y-2 transition-all relative text-body-color duration-300 hover:text-red dark:text-body-color-dark dark:hover:text-red">
            <a href="/britania">
          <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          <div>
            <h3 className="text-lg font-extrabold ">Britania</h3>
            <p className="text-sm mt-2">Britania Ratchaphruek-Nakhon in</p>
          </div>
          </a>
        </div>
        
    </div>
  </div>
   */}
  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        <a>
        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
           <img src="/images/pastwork/Britania Ratchaphruek.jpg" className="rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-800">Product Name</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </a>

        
    </div>
  </div>


            </section>
        </>
    );
};

export default Blog;
