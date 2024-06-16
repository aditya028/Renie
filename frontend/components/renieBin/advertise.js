import Image from "next/image";

export default function Advertise({image , title , description , reverse = false}) {
  return (
    <div className={`flex ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-[200px] py-10 px-2`}>
      <Image
        src={image}
        alt="Renie"
        width={400}
        height={600}
      />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-[50px] font-bold leading-[60px]">
          {title}
        </h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
