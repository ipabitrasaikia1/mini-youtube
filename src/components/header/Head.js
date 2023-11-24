import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

function Head() {
  const dispatch = useDispatch()
  const handleToggleMenu = () => {
  dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg text-center">
      <div className="flex col-span-1 border border-black">
        <img
        onClick={handleToggleMenu }
          className="cursor-pointer h-11 mt-2"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
          alt="hamburger-menu"
        />
        <img
          className="h-16"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="yt-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className=" w-1/2 rounded-l-full border border-gray-400 p-2"
          type="text"
        />
        <button className="border border-gray-400 bg-gray-100  rounded-r-full px-5 py-2">
          🔍
        </button>
      </div>
      <div className="col-span-1 m-auto border border-black">
        <img 
        
          className="h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Head;
