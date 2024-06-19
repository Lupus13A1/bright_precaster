// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Green Ville II",
// other metadata
};

const Green = () => {
return (
<>
    <Breadcrumb pageName="Green Ville II " description="Green Ville II condominium @Sukhumvit 101" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                ผลงาน – Green Ville II condominium @Sukhumvit 101
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-001.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-002.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-003.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-004.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-005.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-006.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-007.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-008.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/B-009.jpg"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Green;