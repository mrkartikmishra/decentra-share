import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TfiShareAlt } from "react-icons/tfi";
import { TfiShare } from "react-icons/tfi";
import { setGlobalState } from "../store";
import UploadModal from "./UploadModal";

const SideBar = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] w-52 bg-secondary top-0">
      <div className="flex items-center px-5 mt-5">
        <button
          onClick={() => setGlobalState("createModal", "scale-100")}
          className="text-secondary bg-gradient-to-r flex items-center justify-between gap-2 from-orangelight to-orangedark px-2 py-1 rounded-md hover:bg-orangedark"
        >
          Upload <AiOutlineCloudUpload />
        </button>
      </div>
      <ul className="p-5 text-gray">
        <Link to="/">
          <li className="py-1 text-sm cursor-pointer flex items-center gap-2 hover:text-orangelight hover:font-bold delay-200">
            <AiOutlineHome /> HOME
          </li>
        </Link>
        <Link to="/shared-by-me">
          <li className="py-2 text-sm cursor-pointer flex items-center gap-2  hover:text-orangelight hover:font-bold delay-200">
            <TfiShareAlt /> SHARED BY ME
          </li>
        </Link>
        <Link to="shared-by-others">
          <li className="py-2 text-sm cursor-pointer flex items-center gap-2  hover:text-orangelight hover:font-bold delay-200">
            <TfiShare /> SHARED BY OTHERS
          </li>
        </Link>
      </ul>
      <UploadModal />
    </div>
  );
};

export default SideBar;
