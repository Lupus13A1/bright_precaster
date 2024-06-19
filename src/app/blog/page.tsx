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

    <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap m-4">
                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/Britania Ratchaphruek.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/britania">
                                Britania Ratchaphruek-Nakhon in
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/Curator.png" alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/curator">
                                Curator Ratchapruek-Surinthorn
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center"
                            src="/images/pastwork/Richton Suan Luang-Phatthanakan.jpg" alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/richton">
                                Richton Suan Luang-Phatthanakan
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/Richy Richton เพิ่มสิน.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/richyrichton">
                                Richy Richton เพิ่มสิน
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/Astoria-Ratchaphruek.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/astoria">
                                The Astoria ราชพฤกษ์ รัตนาธิเบศร์
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/logo_icopenh-1-1022x1024.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/icopenh">
                                Icopenh สุขุมวิท76
                            </a>

                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/PHC.jpg" alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/phc">
                                PHC Hierarchy
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/Cube.png" alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/cube">
                                The Cube Loft
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/logo-greenville2.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/green">
                                Green Ville II condominium
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/logo-the-muve-บางแค3.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/muve">
                                The Muve บางแค
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center" src="/images/pastwork/logo-maxxi-prime2.jpg"
                            alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/maxxi">
                                Maxxi-Prime
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:w-1/3">
                    <div className=" border-2 rounded-lg overflow-hidden">
                        <img className="object-cover object-center"
                            src="/images/pastwork/288071781_116766511053366_6415027058580615632_n.jpg" alt="blog" />
                        <div className="p-6">
                            <a className="leading-relaxed mb-3 sm:text-lg" href="/noble">
                                Noble Curve
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</>
);
};

export default Blog;