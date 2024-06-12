import Product from "@/components/Product/Product";
import ProductTwo from "@/components/Product/ProductTwo";
import ProductThree from "@/components/Product/ProductThree";
import ProductFour from "@/components/Product/ProductFour";
import ProductFive from "@/components/Product/ProductFive";
import ProductSix from "@/components/Product/ProductSix";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product"
  // other metadata
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Product"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Product />
      <ProductTwo />
      <ProductThree />
      <ProductFour />
      <ProductFive />
      <ProductSix />
    </>
  );
};

export default ProductPage;
