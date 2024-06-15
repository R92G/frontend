import React from "react";
import { Article } from "@/types";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={article.urlAlias}>
      <article className="flex h-[90px] w-full md:w-[430px]">
        <div className="relative w-[160px] h-[90px] flex-shrink-0 overflow-hidden">
          {/* Hardcoded IMG - website is niet bereikbaar */}
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="absolute inset-0 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
          {article.showVideoIcon && (
            <div className="absolute bottom-0 right-0 bg-[rgb(254,151,38)] w-6 h-6 flex items-center justify-center">
              <Play color="white" size={16} />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center pl-4">
          <p className="text-xs leading-tight">{article.chapeau}</p>
          <h2 className="font-bold text-[rgb(2,2,3)] mt-0 mb-0 overflow-hidden text-lg leading-[19.8px]">
            {article.title}
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
