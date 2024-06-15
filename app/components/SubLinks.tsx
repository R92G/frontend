"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { subLinks } from "@/public/contants";
import Link from "next/link";

const SubLinks: React.FC = () => {
  const subLinksRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Entertainment");

  useEffect(() => {
    const checkScroll = () => {
      if (subLinksRef.current) {
        setCanScrollLeft(subLinksRef.current.scrollLeft > 0);
        setCanScrollRight(
          subLinksRef.current.scrollWidth >
            subLinksRef.current.scrollLeft + subLinksRef.current.clientWidth
        );
        setIsOverflowing(
          subLinksRef.current.scrollWidth > subLinksRef.current.clientWidth
        );
      }
    };

    if (subLinksRef.current) {
      subLinksRef.current.addEventListener("scroll", checkScroll);
    }

    checkScroll();

    window.addEventListener("resize", checkScroll);

    return () => {
      if (subLinksRef.current) {
        subLinksRef.current.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (subLinksRef.current) {
      subLinksRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (subLinksRef.current) {
      subLinksRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="custom-container">
      <div className="relative flex items-center mt-4 shadow-sm">
        {isOverflowing && canScrollLeft && (
          <button onClick={scrollLeft} className="pb-2">
            <ChevronLeft />
          </button>
        )}
        <div
          ref={subLinksRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide w-full px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {subLinks.map((link) => (
            <Link
              className={`pb-3 text-[18px] whitespace-nowrap ${
                selectedItem === link.label
                  ? "border-b-2 border-gray-700 text-gray-700"
                  : "text-gray-400 hover:text-gray-700"
              }`}
              key={link.href}
              href={link.href}
              passHref
              onClick={() => setSelectedItem(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {isOverflowing && canScrollRight && (
          <button onClick={scrollRight} className="pb-2">
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default SubLinks;
