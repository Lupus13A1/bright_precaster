import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Bright Precaster Co.,Ltd ปัจจุบัน บริษัทพัฒนาอสังหาริมทรัพย์ หลายราย ได้ทำการก่อสร้าง โครงการต่างๆโดยใช้ระบบ Wall Bearing System เพื่อความรวดเร็วในการก่อสร้าง ได้ผลงานที่มีคุณภาพ ลดจำนวนแรงงานก่อสร้างลง เนื่องจากแรงงานที่มีคุณภาพหายากขึ้น และด้วยข้อดีของการใช้ผลิตภัณฑ์คอนกรีตเสริมเหล็กสำเร็จรูปข้างต้น ทำให้เป็นที่ยอมรับจากผู้ประกอบการในการเปลี่ยนการก่อสร้างจากระบบเดิมมาใช้ระบบนี้กันมากขึ้นเรื่อยๆ จึงส่งผลกระทบทำให้การสรรหาผู้ผลิตชิ้นส่วนคอนกรีตสำเร็จรูปที่มีคุณภาพ ทำได้ยากลำบากขึ้น"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
