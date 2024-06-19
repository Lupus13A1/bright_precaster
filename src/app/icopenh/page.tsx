// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Icopenh",
// other metadata
};

const Icopenh  = () => {
return (
<>
    <Breadcrumb pageName="Icopenh" description="Icopenh-สุขุมวิท76" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            ผลงาน – Icopenh-สุขุมวิท76
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-000-1536x1152.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-010.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-005.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-006.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-008.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/D-009.jpg"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Icopenh ;