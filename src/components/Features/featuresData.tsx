import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <img src="/images/carrousel/01plotter-1024x922.jpg" alt="Plotter" style={{ borderRadius: '8px' }} />
    ),
    title: "เครื่องวาดแบบ (Plotter)",
    paragraph:
      "ทำหน้าที่วาดรูปร่างของชิ้นงาน และอุปกรณ์ที่กำหนดไว้  ซึ่งขั้นตอนนี้เป็นขั้นตอนที่จะสำคัญในการกำหนดขอเขตชิ้นงาน และลำดับการผลิต",
  },
  {
    id: 2,
    icon: (
      <img src="/images/carrousel/05spreader-1024x922.jpg" alt="Spreader" style={{ borderRadius: '8px' }} />
    ),
    title: "เทคอนกรีต (Spreader)",
    paragraph:
      "ทำหน้าที่ บรรจุและขนคอนกรีตมาตรงที่จุดพร้อมเท",
  },
  {
    id: 3,
    icon: (
      <img src="/images/carrousel/06compacting-1024x922.jpg" alt="Compacting" style={{ borderRadius: '8px' }} />
    ),
    title: "การทำให้คอนกรีตแน่น (Compacting)",
    paragraph:
      "ทำหน้าที่จะสั่นและเขย่า  Pallet  เพื่อให้คอนกรีตสามารถเข้าถึงทุกส่วนของชิ้นงานได้ ช่วยให้ลดการเกิดช่องว่างในชิ้นงาน ความแรงในการเขย่าขึ้นกับชิ้นงาน",
  },
  {
    id: 4,
    icon: (
      <img src="/images/carrousel/07smoothing-1024x922.jpg" alt="Smoothing" style={{ borderRadius: '8px' }}  />
    ),
    title: "ขัดผิวหน้า (Smoothing)",
    paragraph:
      "หลังจากที่ชิ้นงานผ่านการ Compacting แล้วจะนำชิ้นงานมาปาดหน้าผิวด้วยใบพัด เพื่อให้คอนกรีตเรียบสวยและเสมอกับไม้แบบให้ทั่วทั้งชิ้นงาน",
  },
  {
    id: 5,
    icon: (
      <img src="/images/carrousel/08curing-1024x922.jpg" alt="Curing" style={{ borderRadius: '8px' }}  />
    ),
    title: "ห้องบ่มคอนกรีต(Curing)",
    paragraph:
      "ทำหน้าที่ควบคุมอุณภูมิและความชื้น เพื่อให้คอนกรีตได้ค่าความแข็งแรงตามที่ออกแบบไว้",
  },
  {
    id: 6,
    icon: (
      <img src="/images/carrousel/09tilting-1024x918.jpg" alt="Tilting" style={{ borderRadius: '8px' }}  />
    ),
    title: "ถอดออกจากแบบ (Tilting)",
    paragraph:
      "หลังจากบ่มเสร็จแล้วไฮโดริกยกพาเรทและชิ้นงานเอียง เพื่อให้ยกชิ้นงานได้ง่าย",
  },
];

export default featuresData;
