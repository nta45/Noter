import Image from "next/image";
import Header from "@/components/header"
import Boxes from "@/components/boxes";

export default function Home() {
  return (
    <div className="bg-black w-full h-full overflow-hidden">
      <Header />
      <Boxes />
    </div>
  );
}
