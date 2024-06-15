import React from "react";
import { Article } from "@/types";
import ArticleGridCard from "./ArticleGridCard";

interface GridProps {
  articles: Article[];
}

const Grid = ({ articles }: GridProps) => {
  return (
    <div className="custom-container pt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {articles.map((article) => (
        <ArticleGridCard key={article.urlAlias} article={article} />
      ))}
    </div>
  );
};

export default Grid;
