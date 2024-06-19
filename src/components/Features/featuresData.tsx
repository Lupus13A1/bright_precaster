import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>
    
    ),
    title: "เครื่องวาดแบบ (Plotter)",
    paragraph:
      "ทำหน้าที่วาดรูปร่างของชิ้นงาน และอุปกรณ์ที่กำหนดไว้  ซึ่งขั้นตอนนี้เป็นขั้นตอนที่จะสำคัญในการกำหนดขอเขตชิ้นงาน และลำดับการผลิต",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>

    ),
    title: "เทคอนกรีต (Spreader)",
    paragraph:
      "ทำหน้าที่ บรรจุและขนคอนกรีตมาตรงที่จุดพร้อมเท",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>
    ),
    title: "การทำให้คอนกรีตแน่น (Compacting)",
    paragraph:
      "ทำหน้าที่จะสั่นและเขย่า  Pallet  เพื่อให้คอนกรีตสามารถเข้าถึงทุกส่วนของชิ้นงานได้ ช่วยให้ลดการเกิดช่องว่างในชิ้นงาน ความแรงในการเขย่าขึ้นกับชิ้นงาน",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>
    ),
    title: "ขัดผิวหน้า (Smoothing)",
    paragraph:
      "หลังจากที่ชิ้นงานผ่านการ Compacting แล้วจะนำชิ้นงานมาปาดหน้าผิวด้วยใบพัด เพื่อให้คอนกรีตเรียบสวยและเสมอกับไม้แบบให้ทั่วทั้งชิ้นงาน",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>
    ),
    title: "ห้องบ่มคอนกรีต(Curing)",
    paragraph:
      "ทำหน้าที่ควบคุมอุณภูมิและความชื้น เพื่อให้คอนกรีตได้ค่าความแข็งแรงตามที่ออกแบบไว้",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        fill="red"
      />
      <path 
        d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" 
        fill="red"
      />
    </svg>
    ),
    title: "การทำให้คอนกรีตแน่น (Compacting)",
    paragraph:
      "หลังจากบ่มเสร็จแล้วไฮโดริกยกพาเรทและชิ้นงานเอียง เพื่อให้ยกชิ้นงานได้ง่าย",
  },
 
  
];
export default featuresData;
