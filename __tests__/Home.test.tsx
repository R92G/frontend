import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { getFirstFourArticles, getRemainingArticles } from "../utils";
import data from "../public/bundle-api.json";

describe("Utility Functions", () => {
  const articles = data.bundelItems;

  test("getFirstFourArticles returns the first four articles with titles longer than 4 characters", () => {
    const firstFour = getFirstFourArticles(articles);
    expect(firstFour.length).toBe(4);
    firstFour.forEach((article) => {
      expect(article.title).toBeTruthy();
      expect(article.title.length).toBeGreaterThan(4);
    });
  });

  test("getRemainingArticles returns the remaining articles with titles longer than 4 characters", () => {
    const remaining = getRemainingArticles(articles);
    remaining.forEach((article) => {
      expect(article.title).toBeTruthy();
      expect(article.title.length).toBeGreaterThan(4);
    });
  });
});

describe("Home Page", () => {
  it("renders the title", () => {
    render(<Home />);
    const titleElement = screen.getByText("Entertainment");

    expect(titleElement).toBeInTheDocument();
  });
});
