import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import fish from "../../assets/fish.webp";
import fruit from "../../assets/fruits.png";
import juice from "../../assets/juice.png";
import masala from "../../assets/masala.png";
import sea from "../../assets/sea.png";
import veg from "../../assets/veg.webp";

const Category = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mt-20"
    >
      <CarouselContent className="max-h-[150px]">
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={fish}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={veg}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={sea}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={juice}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={fruit}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 border-2 mx-4">
          <img
            src={masala}
            alt=""
            className="w-full object-cover overflow-hidden"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Category;
