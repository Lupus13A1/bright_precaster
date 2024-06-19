// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Maxxi Prime",
// other metadata
};

const Maxxi = () => {
return (
<>
    <Breadcrumb pageName="Maxxi Prime" description="Maxxi Prime" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            ผลงาน – แม็กซี่ ไพร์ม รัชดา-สุทธิสาร
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-001.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-002.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-003.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-004.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-005.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-006.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-007.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-008.jpg"
                        alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/K-009.jpg"
                        alt="Gallery image" />
                </div>
            </div>
        </div>
    </section>

</>
);
};

export default Maxxi;