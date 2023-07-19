import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Wall Clock"
            price="5000.00"
            color="Brown"
            badge={true}
            des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="2500.00"
            color="Blue"
            badge={true}
            des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Shoes"
            price="800.00"
            color="Blue"
            badge={true}
            des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Top and Skirt"
            price="999.00"
            color="Mixed"
            badge={false}
            des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Smart Watch"
            price="2500.00"
            color="Blue"
            badge={false}
            des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
