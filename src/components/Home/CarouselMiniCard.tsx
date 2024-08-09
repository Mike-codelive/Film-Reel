import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CarouselMovieType } from "../../utils/constant";
import { imagepath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

interface CarouselMiniCardProps {
  carouselMovies: CarouselMovieType[];
  item: number;
  i: number;
}

function CarouselMiniCard({ carouselMovies, item, i }: CarouselMiniCardProps) {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Link to={`/details/${carouselMovies[item].id}`} className="col-xl-12 col">
      <div
        key={i}
        className="flex gap-2"
        onMouseEnter={() => setHover(i)}
        onMouseLeave={() => setHover(null)}
      >
        <img
          src={imagepath + carouselMovies[item]?.poster_path}
          className="w-[100px] aspect-[4/6]"
          alt=""
        />
        <div className="flex flex-col justify-between py-2">
          <div className="leading-5">
            <h1 className="text-zinc-300 mb-[10px]">
              {carouselMovies[item]?.title}
            </h1>
            <h1 className="text-md text-zinc-300 line-clamp-3">
              {carouselMovies[item]?.overview}
            </h1>
          </div>
          <div className="flex gap-1 text-zinc-100 text-center">
            <FiThumbsUp className="text-green-600" />
            <h2>{carouselMovies[item]?.vote_count}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarouselMiniCard;
