import star from "../assets/rating.png";
import star_half from "../assets/rating-half.png";
import temp_1 from "../assets/temp-1.jpeg";
import play from "../assets/play-button.png";
function Banner() {
    return (
      <div className="bg-[url(/banner.png)] h-[700px] w-full bg-no-repeat bg-center bg-cover relative">
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="flex p-8  items-center justify-between gap-8 absolute top-[50%] -translate-y-[50%]  ">
          <div className="relative flex flex-col gap-8 w-[50%] h-full">
            <div className="bg-gradient-to-r from-red-500 to-red-300 w-[100px] h-[40px] flex items-center justify-center text-white font-semibold">
              TV show
            </div>
            <div className="flex flex-col gap-6 ">
              <h3 className="text-5xl font-bold text-white">
                Nghe nói em thích tôi
              </h3>
              <div className="flex gap-2">
                <img src={star} alt="" className="size-10" />
                <img src={star} alt="" className="size-10" />
                <img src={star} alt="" className="size-10" />
                <img src={star} alt="" className="size-10" />
                <img src={star_half} alt="" className="size-10" />
              </div>
              <p className="text-white text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                obcaecati placeat voluptatum vero, quia consequatur laborum
                facilis dignissimos ea totam excepturi magni explicabo voluptate
                voluptatem, dolores, voluptas consequuntur ducimus recusandae.
                Beatae suscipit, dolorum accusantium necessitatibus accusamus
                quisquam alias veniam quos. Voluptatum explicabo illum iusto
                eius libero molestiae deleniti nam fuga ipsum iure iste dolore
                beatae, ab, sunt aliquam officia rerum. Voluptatum et
                exercitationem neque temporibus quisquam. Aliquid neque eos
                animi suscipit accusantium cupiditate, dolore totam inventore
                quam quidem sunt fuga similique soluta hic, pariatur dolores,
                quia obcaecati sapiente quibusdam vel!
              </p>
              <div className="flex gap-4 text-white">
                <button className="bg-black p-3 hover:bg-black/60 cursor-pointer">
                  Chi tiết
                </button>
                <button className="bg-red-500 py-3 px-4 cursor-pointer hover:bg-red-400">
                  Xem phim
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[50%] h-full relative cursor-pointer ">
            <div className="w-[300px] h-[400px] group relative">
              <img src={temp_1} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <img
                  src={play}
                  alt=""
                  className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] size-15 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;