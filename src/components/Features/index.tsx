import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="CARROUSEL SYSTEM"
            paragraph="ระบบ CARROUSEL เป็นระบบการผลิตแผ่นพรีคาสท์แบบอัตโนมัติที่มีประสิทธิภาพสูง แบ่งออกเป็นสถานี  แต่ละสถานีจะทำหน้าที่เฉพาะอย่างหนึ่งในกระบวนการผลิต ดังนี้"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
