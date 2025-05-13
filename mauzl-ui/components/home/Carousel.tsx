import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { carouselImages } from "@/utils/constant";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselImages.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={index}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
