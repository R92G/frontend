import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const SearchUser: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="#">
        <Search className="w-6 h-6 text-gray-400" />
      </Link>
      <Link
        href="#"
        className="border-2 borde-gray-400 text-gray-400 p-2 text-sm  flex items-center justify-center w-6 h-6"
      >
        H
      </Link>
    </div>
  );
};

export default SearchUser;
