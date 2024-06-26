import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Product = () => {
    return (
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle title="Wall" paragraph="" mb="44px" />
                            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[750px] md:max-w-[1800px] place-items-center">
                            <a href="/images/product/wall4-1.jpg" target="_blank" rel="noopener noreferrer">
                                <img className="hover:opacity-75" src="/images/product/wall4-1.jpg" style={{ borderRadius: '9px' }} />
                            </a>
                            <a href="/images/product/wall5-1.jpg" target="_blank" rel="noopener noreferrer">
                                <img className="hover:opacity-75" src="/images/product/wall5-1.jpg" style={{ borderRadius: '9px' }} />
                            </a>
                            <a href="/images/product/wall6-1.png" target="_blank" rel="noopener noreferrer">
                                <img className="hover:opacity-75" src="/images/product/wall6-1.png" style={{ borderRadius: '9px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
