// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Richton",
// other metadata
};

const Richton  = () => {
return (
<>
    <Breadcrumb pageName="Richton" description="Richton สวนหลวง" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                ผลงาน – Richton สวนหลวง-พัฒนาการ
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-001.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-002.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-003.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-004.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-005.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-006.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-007.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-008.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/L-009.jpg"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Richton ;