import temp_1 from "../assets/temp-1.jpeg";
import play_button from "../assets/play-button.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
 const opts = {
   height: "390",
   width: "640",
   playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 1,
   },
 };
Modal.setAppElement("#root");
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function MovieLists({ title, data }) {
     const [modalIsOpen, setIsOpen] = useState(false);

     function openModal() {
       setIsOpen(true);
     }

     function closeModal() {
       setIsOpen(false);
     }
    const [videoActive, setVideoActive] = useState("");
   
    const handleClick = async(id) => {
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };
            const res = await fetch(url, options);
            const videoId = await res.json();
            console.log(videoId.results[0].key);
            setVideoActive(videoId.results[0].key);
            openModal();
        } catch (error) {
            console.log(error);
        }
        
          
     
    }
    return (
      <div className="p-9 bg-black">
        <p className="text-2xl uppercase mb-5 text-white">{title}</p>

        <Carousel responsive={responsive}>
          {data.map((film) => (
            <div
              key={film.id}
              className="relative group w-[200px] h-[300px] hover:scale-105 duration-500 ease-in-out cursor-pointer hover:shadow-xl hover:shadow-blue-500 "
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${film.backdrop_path}`}
                alt={film.original_title || film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 "></div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100"></div>
              <p className="absolute bottom-2 left-5 text-white ">
                {film.original_title || film.title}
              </p>
              <button
                className="top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] absolute  group-hover:opacity-100 opacity-0 cursor-pointer"
                onClick={() => {
                  handleClick(film.id);
                }}
              >
                <img src={play_button} alt="" className="size-10 invert  " />
              </button>
            </div>
          ))}
        </Carousel>

        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <YouTube videoId={videoActive} opts={opts} />
        </Modal>
      </div>
    );
}

export default MovieLists;