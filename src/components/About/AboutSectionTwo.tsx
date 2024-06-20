import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Picture4.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/Picture4.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                กำลังการผลิต
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                เครื่องจักร 1 ไลน์การผลิต มีกำลังการผลิต 1,000 ตรม.ต่อวัน (ชั่วโมงทำงานที่ 8 ชั่วโมงต่อวัน/2กะ) ดังนั้นจะสามารถผลิตแผ่นคอนกรีตสำเร็จรูปได้ประมาณ 300,000 ตร.ม.ต่อปี กำลังการผลิตดังกล่าวสามารถสร้างทาวน์เฮ้าส์ขนาด 2 ชั้น พื้นที่ใช้สอย 110 ตร.ม. ได้ประมาณ 1,050 ยูนิต หรือคอนโดมิเนียมขนาดห้อง 28 ตรม. ได้ประมาณ 2,700 ยูนิต
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                สถานที่ตั้ง
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                บริษัท ไบร์ท พรีแคสเตอร์ จำกัด ตั้งอยู่เลขที่ 10/10 หมู่ 10 ต.บางบัวทอง อ.บางบัวทอง จ.นนทบุรี 11110 พื้นที่ประกอบด้วยอาคารสำนักงานและอาคารโรงงาน ขนาด 5,544 ตรม.และ Stock yard ขนาด 4,500 ตรม. บนพื้นที่ 44-1-23 ไร่ เครื่องจักรที่ใช้จะเป็นระบบ Semi Automated Carrousel System ซึ่งเป็นระบบการผลิตชิ้นส่วนคอนกรีตเสริมเหล็กสำเร็จรูปอัตโนมัติ นำเข้าเครื่องจักรจากประเทศเยอรมัน
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
