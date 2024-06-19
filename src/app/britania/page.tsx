// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "curator",
// other metadata
};

const Britania = () => {
return (
<>
    <Breadcrumb pageName="Britania" description="Britania Ratchaphruek" />

    <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        ผลงาน – บริทาเนีย ราชพฤกษ์ นครอินทร์</h2>
        <div className="grid grid-cols-3 gap-6">
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-001.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-002.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-003.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-004.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-007.jpg" alt="Gallery image" />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src="/images/pastwork/H-008.jpg" alt="Gallery image" />
  </div>
</div>

        </div>
    </section>

</>
);
};

export default Britania;