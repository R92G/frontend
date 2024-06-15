import React from "react";
import { Article } from "@/types";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

interface FirstFourArticlesProps {
  firstFourArticles: Article[];
}

const FirstFourArticles = ({ firstFourArticles }: FirstFourArticlesProps) => {
  return (
    <div className="md:grid md:flex-col sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {firstFourArticles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default FirstFourArticles;
