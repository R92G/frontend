import React from "react";
import Image from "next/image";

interface FirstPostProps {
  title: string;
  label: string;
  image: string;
}

const FirstPost = ({ title, label, image }: FirstPostProps) => {
  return (
    <div className="flex-1 w-full relative max-h-[500px] min-h-[408px]  overflow-hidden group">
      <Image
        className="group-hover:scale-105 transition-all duration-300 ease-in-out object-cover cursor-pointer"
        src={image}
        alt={title}
        fill
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 cursor-pointer"></div>
      <div
        style={{
          borderLeft: "20px solid rgb(254, 151, 38)",
        }}
        className="absolute h-[72px] pl-[30px] bottom-6"
      >
        <div className="text-white  flex flex-col">
          <p className="text-sm">{label}</p>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstPost;
