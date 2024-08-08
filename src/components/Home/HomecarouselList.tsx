// import Movies from "../../pages/Movies";
import { CarouselMovieType } from "../../utils/constant";
import CarouselMiniCardSkeleton from "../Skeleton/CarouselMiniCardSkeleton";
import CarouselMiniCard from "./CarouselMiniCard";

interface HomecarouselListProps {
  next: number[];
  carouselMovies: CarouselMovieType[];
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {
  return (
    <div>
      <div className="row">
        {carouselMovies.length > 0
          ? next.map((item, i) => (
              <CarouselMiniCard
                key={i}
                carouselMovies={carouselMovies}
                item={item}
                i={item}
              />
            ))
          : [...Array(3)].map((item, i) => (
              <CarouselMiniCardSkeleton key={i} />
            ))}
      </div>
    </div>
  );
}

export default HomecarouselList;
