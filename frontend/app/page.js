"use client";
import Card from "@/components/Home/Card";
import Barchart from "@/components/Home/barchart";
import Leaderboard from "@/components/Home/leaderboard";
import Piechart from "@/components/Home/piechart";
import fetchData from "@/utils/fetchData";
import Image from "next/image";
import { useEffect, useState } from "react";

import { IoTrashBinOutline } from "react-icons/io5";
import { CiCloudOff, CiLocationOn } from "react-icons/ci";
import { TbWeight } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { GiIsland } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import reward from '@/public/reward.png'

export default function Home() {
  const [bins, setBins] = useState();

  const globalImpact = [
    {
      title: "Energy conservation",
      description: "132 kcal",
      Icon: SlEnergy,
      bgColor: "bg-green-600",
    },
    {
      title: "Reduced fossil fuel consumption",
      description: "7 kg",
      Icon: LuFuel,
      bgColor: "bg-green-600",
    },
    {
      title: "CO2 emission reduction",
      description: "12 kg",
      Icon: CiCloudOff,
      bgColor: "bg-green-600",
    },
    {
      title: "Reduced landfill use",
      description: "120 sq feet",
      Icon: GiIsland,
      bgColor: "bg-green-600",
    },
  ];

  useEffect(() => {
    async function fetchRespData() {
      const res = await fetchData();
      setBins(res);
    }
    fetchRespData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col  py-24 max-w-[1300px] m-auto">
      <div className="flex md:flex-row-reverse flex-col bg-[#E4E7EB] gap-10 py-[80px] px-10 rounded-[16px] mt-10">
        <Image
          src={reward}
          alt="reward"
          width={700}
          height={700}
        />
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-[35px] font-bold leading-[45px]">
            Boost Your Business: Partner with Us, Display Our QR Code, and
            Reward Your Customers
          </h1>
          <p>
            Partner with us and unlock a world of rewards for your customers By
            displaying our QR code, you offer them exclusive deals and
            discounts, fostering loyalty and boosting your brand's visibility.
            Join us in creating a seamless shopping experience that benefits
            everyone.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 py-10 px-2">
        <Image
          src="https://www.renie.io/wp-content/uploads/2023/11/fifth-step.png"
          alt="Renie"
          width={700}
          height={700}
        />
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-[50px] font-bold leading-[60px]">
            Earn while you make an impact
          </h1>
          <p>
            Our innovative platform makes it possible to generate a passive
            income from data monetization of plastic waste
          </p>
        </div>
      </div>

      <div className="bg-gray-200 px-5 py-24 flex flex-col gap-5">
        <h1 className="text-[40px] text-center">How it Works</h1>
        <p className="text-center">
          {" "}
          Turn your recycling into rewards with Renie! Simply deposit your waste
          bottles into any Renie bin and and get reward points. Then, treat
          yourself by redeeming your points for exciting items directly from the
          Renie app. Start your recycling journey with us today!
        </p>
      </div>
      <div className=" flex flex-col justify-center my-10">
        <h1 className="text-[40px] font-semibold text-center">
          What We Served
        </h1>
        <div className="m-10 flex flex-wrap justify-center gap-8">
          <Card
            title="All time Weight"
            description={bins?.total + " units"}
            bgColor="bg-blue-600"
            Icon={TbWeight}
          />
          <Card
            title="Area Covered"
            description={bins?.numOfBins}
            bgColor="bg-blue-600"
            Icon={CiLocationOn}
          />
          <Card
            title="Active Bins"
            description={bins?.numOfBins}
            bgColor="bg-blue-600"
            Icon={IoTrashBinOutline}
          />
        </div>
      </div>
      <div className="bg-gray-200 px-5 py-24 flex flex-col justify-center my-10">
        <h1 className="text-[40px] font-semibold text-center">Global Impact</h1>
        <div className="m-10 flex flex-wrap justify-center gap-8">
          {globalImpact.map((impact, index) => (
            <Card
              key={index}
              title={impact.title}
              description={impact.description}
              bgColor={impact.bgColor}
              Icon={impact.Icon}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-[40px] font-semibold text-center">Data Analysis</h1>
        <div className="flex flex-wrap">
          <Piechart data={bins} />
          <Barchart />
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-[40px] font-semibold text-center mt-10">
          Renie's Leaderboard
        </h1>
        <Leaderboard />
      </div>
    </main>
  );
}
