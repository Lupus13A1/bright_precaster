import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const AboutSectionOne = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="ลักษณะการผลิต"
                paragraph="เป็นการหล่อชิ้นส่วนคอนกรีตเสริมเหล็กสำเร็จรูป (Precasting in Reinforced Concrete) คือ การหล่อคอนกรีตที่มีการเสริมเหล็กเพื่อให้ได้รูปทรงตามที่ต้องการ ตรงกับรูปทรงของแม่แบบ (Mould Shape) ที่สร้างไว้ ซึ่งการเสริมเหล็กจะทำพร้อมกับการหล่อแบบคอนกรีต เมื่อหล่อแบบออกมาเป็นชิ้นส่วนงานแล้ว จะไม่สามารถดัดแปลงรูปแบบได้อีก แล้วจึงทำการขนย้ายไปประกอบยังหน่วยงานก่อสร้าง."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/Picture3.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 transition duration-300 ease-in-out hover:scale-110 "
                  style={{ borderRadius: '10px' }}
                />
                <Image
                  src="/images/about/Picture3.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 transition duration-300 ease-in-out hover:scale-110"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
