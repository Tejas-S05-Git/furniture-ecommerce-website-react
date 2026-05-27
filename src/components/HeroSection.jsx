import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const heroCards = [
    {
        title: "Living Room",
        items: "2,500+ Items",
        price: "$1,500",
        image:
            "https://i.pinimg.com/1200x/1e/18/a2/1e18a2f468694aa9fd106d2f54f46926.jpg",
    },
    {
        title: "Bed Room",
        items: "1,500+ Items",
        price: "$2,100",
        image:
            "https://i.pinimg.com/1200x/19/18/8c/19188c5f45ab323031b2602db879fb3e.jpg",
    },
    {
        title: "Office Room",
        items: "900+ Items",
        price: "$3,400",
        image:
            "https://i.pinimg.com/736x/e3/97/ba/e397ba72350cc4d945d06a2337034427.jpg",
    },
];

export default function HeroSection() {

  const navigate = useNavigate();
    return (
         <section className="bg-secondary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-12 lg:gap-16 items-center">
          {/* LEFT */}

          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="text-center lg:text-left"
          >
            {/* TAG */}

            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <i className="ri-sofa-line text-accent text-sm"></i>
              </div>

              <p className="text-sm md:text-base font-medium text-zinc-800">
                The Best Online Furniture Store
              </p>
            </div>

            {/* HEADING */}

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 text-zinc-900 max-w-[620px] mx-auto lg:mx-0"
            >
              Explore Our{" "}
              <span className="text-primary">
                Modern Furniture Collection
              </span>
            </h1>

            {/* TEXT */}

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-zinc-600 text-base md:text-lg leading-relaxed mt-6 max-w-[560px] mx-auto lg:mx-0"
            >
              Discover timeless furniture designed to elevate your living
              space with comfort, elegance and modern style.
            </p>

            {/* BUTTONS */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8 justify-center lg:justify-start"
            >
              <button onClick={()=> navigate('/shop')} className="bg-primary hover:bg-accent hover:text-primary transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl">
                Shop Now
                <i className="ri-arrow-right-line text-xl"></i>
              </button>

              <Link
                to="/shop"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold px-8 py-4 rounded-full flex items-center gap-2"
              >
                View All Products
                <i className="ri-arrow-right-up-line text-xl"></i>
              </Link>
            </div>

            {/* RATINGS */}

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-10"
            >
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-3"
                />

                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-3"
                />

                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover -ml-3"
                />

                <div className="w-12 h-12 rounded-full bg-accent border-2 border-white flex items-center justify-center -ml-3">
                  <i className="ri-add-line text-2xl"></i>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-zinc-900">
                  4.9 Ratings+
                </h2>

                <p className="text-zinc-600 text-base mt-1">
                  Trusted by 50k+ Customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="relative w-full min-w-0 overflow-hidden"
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              spaceBetween={25}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".heroNext",
                prevEl: ".heroPrev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.4,
                },
              }}
            >
              {heroCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-[28px] p-4 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden rounded-[24px]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[280px] md:h-[340px] object-cover rounded-[24px] hover:scale-105 duration-700"
                      />

                      <div className="absolute bottom-4 right-4 bg-[#5A3B2E] text-white px-4 py-2 rounded-full text-base font-semibold">
                        {card.price}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
                          {card.title}
                        </h2>

                        <p className="text-zinc-600 mt-1">
                          {card.items}
                        </p>
                      </div>

                      <button className="w-14 h-14 rounded-full bg-primary text-white text-2xl flex items-center justify-center hover:rotate-45 duration-300">
                        <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAV BUTTONS */}

            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="heroPrev w-12 h-12 rounded-full bg-primary text-white text-xl flex items-center justify-center hover:scale-110 duration-300 shadow-md">
                <i className="ri-arrow-left-line"></i>
              </button>

              <button className="heroNext w-12 h-12 rounded-full bg-accent text-zinc-900 text-xl flex items-center justify-center hover:scale-110 duration-300 shadow-md">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}