import { Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent, KeyboardEvent, useRef } from "react";
import { baseApi } from "../../api/axiosInstance";
import { CarouselMovieType } from "../../utils/constant";
import CarouselMiniCard from "../Home/CarouselMiniCard";
import { IoClose } from "react-icons/io5";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [searchedList, setSearchedList] = useState<CarouselMovieType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      (event?.target as HTMLInputElement).blur();
    }
  };

  const toggleShow = (bool: boolean) => {
    setShowSearch(bool);
  };

  const fetchSearch = async () => {
    try {
      const response = await baseApi.get(
        `/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
      );
      setSearchedList(response.data.results);
    } catch (error) {
      console.log("fetch search error", error);
    }
  };

  useEffect(() => {
    if (search.length > 0) setShowSearch(true);
    else setShowSearch(false);
    fetchSearch();
  }, [search]);

  return (
    <nav>
      <div>
        <div className="nav-custom w-full mx-auto px-[2rem] py-[1.5rem] lx:px-[3rem]">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link to="/">
                <h1 className="text-[1rem] sm:text-[2rem] text-[#e50914]">
                  Film<span className="text-white">Reel</span>
                </h1>
              </Link>
              <Link to="/movies">
                <button className="nav-btn-custom p-[3px] rounded-[0.5em] ml-[20px] bg-[#e50914] text-[#ffffff]">
                  Explore
                </button>
              </Link>
            </div>
            <div className="flex items-center relative">
              <input
                ref={inputRef}
                onChange={handleChange}
                onClick={() => toggleShow(true)}
                onKeyDown={handleKeyPress}
                className="custom-input pl-[25px] max-w-[170px] md:w-full"
                type="text"
              />
              <MagnifyingGlassIcon
                onClick={handleIconClick}
                className="absolute ml-[5px] text-[#ffff] h-[20px]"
              />
              {showSearch && search.length > 0 && (
                <div
                  className="sm:absolute fixed z-[99999] top-[45px] right-1 cursor-pointer bg-zinc-800 text-red-500 sm:text-2xl text-xl"
                  onClick={() => toggleShow(false)}
                >
                  <IoClose />
                </div>
              )}
              {showSearch && search.length > 0 && (
                <div onClick={() => toggleShow(false)}>
                  <div className="sm:absolute fixed z-[9999] top-[35px] left-0 sm:max-w-[500px] w-full bg-zinc-800 rounded-xl">
                    <div className="py-3 pl-5">
                      <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-x-hidden overflow-y-auto">
                        {searchedList.length > 0 &&
                          searchedList.map((item, ind) => (
                            <CarouselMiniCard
                              key={ind}
                              carouselMovies={searchedList}
                              ind={ind}
                              item={ind}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
