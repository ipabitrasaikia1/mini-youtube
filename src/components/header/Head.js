/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../utils/SearchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCaches = useSelector((store) => store.search);
  const dispatch = useDispatch()
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
    setShowSuggestions(true);
  };
  useEffect(() => {
    if (!searchQuery.length) {
      setSuggestion([]);
      setShowSuggestions(false);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCaches[searchQuery]) {
          setSuggestion(searchCaches[searchQuery])
      } else {
        handleSearch();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className=" grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenu}
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
      <div className="col-span-10 px-10 pt-3">
        <div>
          <input
            className="px-5 w-1/2 rounded-l-full border border-gray-400 p-2"
            value={searchQuery}
            type="text"
            onChange={handleChange}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="border border-gray-400 bg-gray-100  rounded-r-full px-5 py-2">
            🔍
          </button>
        </div>

        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute bg-white py-2 px-2 w-[42rem] rounded-xl shadow-xl border border-gray-100 ">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 border border-black">
        <img
          className="h-10"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Head;
