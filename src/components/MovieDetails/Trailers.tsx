import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import Youtube from "react-youtube";

function Trailers({ movieId }: { movieId: string }) {
  const [trailer, setTrailers] = useState<{ key: string; name: string }[]>([]);

  const fetchTrailers = async () => {
    try {
      const response = await baseApi.get(
        `/3/movie/${movieId}/videos?language=en-US`
      );
      console.log(response.data.results);
      const tarilerObj = response.data.results.filter(
        (data: { type: string }) => data.type == "Trailer"
      );
      setTrailers(tarilerObj);
    } catch (error) {
      console.log("fetch triler error", error);
    }
  };

  useEffect(() => {
    fetchTrailers();
  }, [movieId]);

  const opts = {
    height: "280",
    width: "380",
  };

  return (
    <div className="">
      {trailer.length > 0 && (
        <div className="md:mt-16 my-[5rem]">
          <h1 className="md:text-3xl sm:text-2xl text-xl text-zinc-200 font-bold">
            Watch Trailers
          </h1>
          <div className="flex flex-wrap gap-4">
            {trailer.map((link, i) => (
              <div key={i} className="flex flex-col sm:gap-2 mt-4">
                <Youtube videoId={link.key} opts={opts} />
                <h1 className="text-xl text-zinc-200 w-[380px]">{link.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailers;
