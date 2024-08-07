import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";


const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
        <SectionTitle
          title="ตัวอย่างลูกค้า"
          paragraph="Customers Reference"
          center
          mb="30px"
        />
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 light:bg-gray-white sm:px-10 md:px-[50px] md:py-[40px] 2xl:py-[60px] bg-white px-8 py-11 shadow-three dark:bg-gray-dark">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill className="hidden dark:block transition duration-300 ease-in-out hover:scale-110" />
        <Image src={image} alt={name} fill className="block dark:hidden transition duration-300 ease-in-out hover:scale-110" />
      </a>
    </div>
  );
};
