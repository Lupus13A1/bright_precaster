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
        description="สินค้า Precast เป็นนวัฒกรรมที่ลดระยะเวลาในการก่อสร้าง ด้วยคุณสมบัติที่ทันสมัยและการควบคุมคุณภาพที่เป็นเอกลักษณ์"
      />
      <Product />
      <ProductTwo />
      {/* <ProductThree /> */}
      <ProductFour />
      <ProductFive />
      <ProductSix />
    </>
  );
};

export default ProductPage;
