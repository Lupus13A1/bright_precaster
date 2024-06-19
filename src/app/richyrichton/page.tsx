// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Richy Richton",
// other metadata
};

const Richyrichton  = () => {
return (
<>
    <Breadcrumb pageName="Richy Richton" description="Richy Richton เพิ่มสิน" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                ผลงาน – Richy Richton เพิ่มสิน
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-001.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-002.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-003.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-004.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-005.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-006.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-007.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-008.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/E-009.jpg"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Richyrichton ;