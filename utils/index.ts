// utils/index.ts

import { CropType, Article } from "@/types";
import { ImageCrop } from "@/types";

/**
 * Utility function to get the image with a specific crop type.
 * @param {Array} crops - List of crop objects.
 * @param {CropType} cropType - The crop type to search for.
 * @return {string | null} - The URL of the image with the specified crop type, or null if not found.
 */
export function getImageByCropType(
  crops: ImageCrop[],
  cropType: CropType
): string | null {
  const crop = crops.find((crop) => crop.type === cropType);
  return crop ? crop.path : null;
}

/**
 * Utility function to get the first four articles with necessary transformations.
 * @param {Array} bundelItems - List of articles.
 * @return {Article[]} - Array of first four articles with transformed data.
 */
export function getFirstFourArticles(bundelItems: any[]): Article[] {
  return bundelItems.slice(0, 4).map((article) => {
    const {
      titel,
      aangemaaktDatum,
      afbeelding,
      urlAlias,
      chapeau,
      showVideoIcon,
    } = article;

    const artikelTopAfbeelding =
      getImageByCropType(afbeelding.crops, CropType.ARTIKEL_TOP) ||
      afbeelding.afbeelding;

    return {
      title: titel,
      aangemaaktDatum: aangemaaktDatum.formatted,
      image: artikelTopAfbeelding,
      urlAlias,
      chapeau,
      showVideoIcon,
    };
  });
}

/**
 * Utility function to get the remaining articles after the first four with necessary transformations.
 * @param {Array} bundelItems - List of articles.
 * @return {Article[]} - Array of remaining articles after the first four with transformed data.
 */
export function getRemainingArticles(bundelItems: any[]): Article[] {
  return bundelItems.slice(4).map((article) => {
    const {
      titel,
      aangemaaktDatum,
      afbeelding,
      urlAlias,
      chapeau,
      showVideoIcon,
    } = article;

    const artikelTopAfbeelding =
      getImageByCropType(afbeelding.crops, CropType.ARTIKEL_TOP) ||
      afbeelding.afbeelding;

    return {
      title: titel,
      aangemaaktDatum: aangemaaktDatum.formatted,
      image: artikelTopAfbeelding,
      urlAlias,
      chapeau,
      showVideoIcon,
    };
  });
}

export function getLastWordUppercase(sentence: string): string {
  const words = sentence.split(" ");
  const lastWord = words[words.length - 1].toUpperCase();
  return lastWord;
}
