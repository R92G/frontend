import React from "react";
import { Article } from "@/types";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

interface ArticleGridCardProps {
  article: Article;
}

const ArticleGridCard = ({ article }: ArticleGridCardProps) => {
  return (
    <Link href={article.urlAlias}>
      <article className="flex flex-col w-full mb-4">
        <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden">
          <Image
            src={
              "https://redactie.rtl.nl/sites/default/files/content/images/2024/06/14/ANP-501051543.jpg?itok=xZS2yhzJ&offsetX=0&offsetY=27&cropWidth=1023&cropHeight=575&width=1024&height=576&impolicy=dynamic"
            }
            alt={article.title}
            layout="fill"
            className="absolute inset-0 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
          {article.showVideoIcon && (
            <div className="absolute bottom-0 right-0 bg-[rgb(254,151,38)] w-6 h-6 flex items-center justify-center">
              <Play color="white" size={16} />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-xs leading-tight text-gray-500 pt-4">
            {article.chapeau}
          </p>
          <h2 className="font-bold text-[rgb(2,2,3)] mt-1 mb-1 text-lg leading-[1.2em]">
            {article.title}
          </h2>
          <p className="text-xs leading-tight text-gray-500">
            {article.aangemaaktDatum}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleGridCard;
