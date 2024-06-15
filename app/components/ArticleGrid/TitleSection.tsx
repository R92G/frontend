import React from "react";
import { iImage } from "@/types";
import Image from "next/image";
import { Article } from "@/types";
import FirstFourArticles from "./FirstFourArticles";
import FirstPost from "./FirstPost";

interface TitleSectionProps {
  title: string;
  label: string;
  image: string;
  firstFourArticles: Article[];
}

const TitleSection = ({
  title,
  label,
  image,
  firstFourArticles,
}: TitleSectionProps) => {
  return (
    <div className="custom-container pt-12 flex lg:flex-row flex-col gap-4">
      <FirstPost title={title} label={label} image={image} />
      <FirstFourArticles firstFourArticles={firstFourArticles} />
    </div>
  );
};

export default TitleSection;
