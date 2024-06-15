import React from "react";
import { ChevronRight } from "lucide-react";
import { List, ListItem, ListItemText } from "@mui/material";
import { navLinks } from "@/public/contants";
import Link from "next/link";
import { X } from "lucide-react";

interface ListItemsMobileNavProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  setDrawerOpen: (value: boolean) => void;
}

const ListItemsMobileNav: React.FC<ListItemsMobileNavProps> = ({
  selectedItem,
  setSelectedItem,
  setDrawerOpen,
}) => {
  const onClick = (label: string) => {
    setSelectedItem(label);
    setDrawerOpen(false);
  };

  return (
    <List className="pt-12">
      <div
        className="pb-6 pl-6 text-gray-400 w-fit h-fit cursor-pointer"
        onClick={() => setDrawerOpen(false)}
      >
        <X />
      </div>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.href} passHref>
          <ListItem
            onClick={() => onClick(link.label)}
            className={`flex items-center justify-between p-6 ${
              selectedItem === link.label ? "bg-gray-200 " : ""
            } hover:underline`}
          >
            <ListItemText
              primaryTypographyProps={{
                fontSize: "24px",
                fontWeight: "bold",
              }}
              primary={link.label}
              className="hover:underline"
            />
            <ChevronRight />
          </ListItem>
        </Link>
      ))}
      <Link href="#" passHref>
        <ListItem className="flex items-center p-6 justify-between">
          <div className="flex gap-1 items-center">
            <div className="border-2 mr-2 border-gray-500 text-gray-500 p-2 text-sm flex items-center justify-center w-6 h-6">
              H
            </div>
            <span className="font-bold text-[24px]">Mijn profiel</span>
          </div>
          <ChevronRight />
        </ListItem>
      </Link>
    </List>
  );
};

export default ListItemsMobileNav;
