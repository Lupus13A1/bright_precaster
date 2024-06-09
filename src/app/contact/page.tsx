import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact "
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="ติดต่อสอบถามรายละเอียดข้อมูลเพิ่มเติม"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
