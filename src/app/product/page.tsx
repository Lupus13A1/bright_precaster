import Product from "@/components/Product/Product";
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
    </>
  );
};

export default ProductPage;