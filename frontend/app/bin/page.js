import Image from "next/image";
import Advertise from "@/components/renieBin/advertise";

export default function Page() {
  const advertiseData = [
    {
      image: "https://www.renie.io/wp-content/uploads/2024/05/bin-mockup-1.webp",
      title: "Use Renie Bin as your Canvas to Advertise your Brand",
      description: "Unlock a unique advertising opportunity with Renie Bin. Our bins aren't just for recycling, they're a canvas for your brand. Gain visibility and engage with a conscious community committed to making a difference. With Renie Bin, your brand doesn't just get seen, it becomes part of a sustainable solution"
    },
    {
      image: "https://www.renie.io/wp-content/uploads/2024/03/mobile-mockup-3.webp",
      title: "Advertise with our Mobile App",
      description: "Advertise with our Mobile App and capture your audience's attention like never before. Enjoy full-screen visibility, immersive brand experience, and direct engagement with users. With our Mobile App, your advertisement isn't just a message, it's an experience that leaves a lasting impression."
    }
  ]
  return (
    <main className="flex min-h-screen flex-col  py-24 max-w-[1300px] m-auto">
      {advertiseData.map((data, index) => (
        <Advertise key={index} image={data.image} title={data.title} description={data.description} reverse={index % 2 === 0} />
      ))}
    </main>
  );
}
