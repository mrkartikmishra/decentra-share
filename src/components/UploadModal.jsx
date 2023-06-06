import React from "react";
import { setGlobalState, useGlobalState } from "../store";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const UploadModal = () => {
  const [createModal] = useGlobalState("createModal");

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex 
        items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${createModal}`}
    >
      <div className="bg-gray shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 px-6 py-3">
        <div className="flex justify-between items-center">
          <h2 className="mb-5">Upload files</h2>
          <AiOutlineClose
            className="mb-5 cursor-pointer"
            onClick={() => setGlobalState("createModal", "scale-0")}
          />
        </div>
        <div className="flex flex-col gap-5">
          <input type="file" className="cursor-pointer" />
          <button
            onClick={() => setGlobalState("createModal", "scale-0")}
            className="text-secondary w-1/5 bg-gradient-to-r flex items-center justify-between gap-2 from-orangelight to-orangedark px-2 py-1 rounded-md hover:bg-orangedark"
          >
            Upload <AiOutlineCloudUpload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
