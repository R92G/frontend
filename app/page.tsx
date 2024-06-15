import AdSpace from "./components/AdSpace";
import Grid from "./components/ArticleGrid/Grid";
import SubLinks from "./components/SubLinks";
import data from "@/public/bundle-api.json";
import TitleSection from "./components/ArticleGrid/TitleSection";
import { getFirstFourArticles, getRemainingArticles } from "@/utils";

export default function Home() {
  const { title, label, image } = data;

  const firstFourArticles = getFirstFourArticles(data.bundelItems);
  const remainingArticles = getRemainingArticles(data.bundelItems);

  return (
    <div>
      <AdSpace />
      <SubLinks />
      <TitleSection
        title={title}
        label={label}
        image={image.imageUrl}
        firstFourArticles={firstFourArticles}
      />
      <Grid articles={remainingArticles} />
    </div>
  );
}
