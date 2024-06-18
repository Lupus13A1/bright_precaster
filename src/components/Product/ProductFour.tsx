import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const ProductFour = () => {

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-1/2">
                    <SectionTitle title="Stair"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
                        mb="44px" />

                    <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[750px] md:max-w-[1800px] place-items-center">
                    <img className="hover:opacity-75" src="/images/product/stair1-1.png" />
                    <img className="hover:opacity-75" src="/images/product/Stair.png" />
                </div>

                {/* <div className="w-full px-4 lg:w-1/2">
                    <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                        <Image src="/images/about/Picture3.jpg" alt="about-image" fill
                            className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0" />
                        <Image src="/images/about/about-image-dark.svg" alt="about-image" fill
                            className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0" />
                    </div>
                </div> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFour;
