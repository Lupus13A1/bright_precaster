// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "curator",
// other metadata
};

const Curator = () => {
return (
<>
    <Breadcrumb pageName="Curator" description="Curator Ratchapruek-Surinthorn" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        ผลงาน – Curator Ratchapruek-Surinthorn


                    </h2>
        <div className="grid grid-cols-3 gap-6">
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-001.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-003.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-004.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-005.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-006.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/F-009.jpg" alt="Gallery image" />
  </div>
</div>

        </div>
    </section>

</>
);
};

export default Curator;