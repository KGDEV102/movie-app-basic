
import play_button from "../assets/play-button.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from "react-youtube";
import {  useState } from "react";
import Modal from "react-modal";
import { movieService } from "../Service/MovieService";
import { BiArrowBack } from "react-icons/bi";
import MovieCardSkelethon from "./MovieCardSkelethon";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
    overlay: {
    position: "fixed",
    zIndex: 9999,
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

function MovieLists({ title, data,onBack,loading }) {
     const [modalIsOpen, setIsOpen] = useState(false);

     function openModal() {
       setIsOpen(true);
     }

     function closeModal() {
       setIsOpen(false);
     }
    const [videoActive, setVideoActive] = useState("");
   
    const handleClick = async(id) => {
      
         const videoId = await movieService.getVideo(id);
         if (videoId.results?.length > 0) {
           setVideoActive(videoId.results[0].key);
           openModal();
         }
          
     
    }
    return (
      <div className="p-9 bg-black">
        <p className="text-2xl uppercase mb-5 text-white">{title}</p>

        {loading ? (
          <div className="flex gap-2">
            {Array(6).fill(0).map((_, index) => (
              <MovieCardSkelethon key={index} />
            ))}
         </div>
        ): (
            data.length > 0 ? (
          <Carousel responsive={responsive}>
            {data.map((film) => (
              <div
                key={film.id}
                className="relative group w-[200px] h-[300px] hover:scale-105 duration-500 ease-in-out cursor-pointer hover:shadow-xl hover:shadow-blue-500 "
              >
                <img
                  src={
                    film.backdrop_path
                      ? `${import.meta.env.VITE_IMAGE_URL}${film.backdrop_path}`
                      : "https://placehold.co/200x300"
                  }
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
        ) : (
          <div className="w-full h-full text-white space-x-20 flex justify-between">
            <span>Không tìm thấy</span>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                onBack(false);
              }}
            >
              <BiArrowBack />
              Quay lại
            </button>
          </div>
        )
        )}

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