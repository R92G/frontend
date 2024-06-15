"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import ListItemsMobileNav from "./ListItemsMobileNav";
import { Menu } from "lucide-react";
import SearchUser from "./SearchUser";
import { Drawer, IconButton } from "@mui/material";
import { navLinks } from "@/public/contants";
import { NavLinkType } from "@/types";
import { getLastWordUppercase } from "@/utils";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("RTL Boulevard");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <nav className="flex items-center md:items-start justify-between px-5 pt-5 w-full max-w-screen-xl mx-auto shadow-sm">
      <div className="flex items-center">
        <div className="w-fit flex items-center">
          <Logo />
          <p className="font-bold invisible xs:visible md:hidden pl-2">
            {getLastWordUppercase(selectedItem)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex space-x-12 items-start">
        {navLinks.map((link: NavLinkType) => (
          <Link
            key={link.href}
            href={link.href}
            className={`pb-7 ${
              selectedItem === link.label
                ? "hover:text-gray-400 text-gray-700"
                : "hover:text-gray-700 text-gray-400"
            } ${
              selectedItem === link.label ? "border-b-2 border-gray-700" : ""
            }`}
            onClick={() => setSelectedItem(link.label)}
          >
            {link.label}
          </Link>
        ))}
        <SearchUser />
      </div>

      <div className="md:hidden">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <div className="flex gap-2">
            <SearchUser />
            <Menu className="text-gray-400 cursor-pointer" />
          </div>
        </IconButton>
        <Drawer
          PaperProps={{
            sx: {
              width: "75%", // Set the desired width here
            },
          }}
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <ListItemsMobileNav
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setDrawerOpen={setDrawerOpen}
          />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
