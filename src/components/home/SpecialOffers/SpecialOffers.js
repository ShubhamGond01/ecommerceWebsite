import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="150.00"
          color="White"
          badge={true}
          des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Jacket"
          price="1800.00"
          color="Black"
          badge={true}
          des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="1500.00"
          color="Black"
          badge={true}
          des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="220.00"
          color="Black"
          badge={true}
          des="Aut maiores reprehenderit ut tenetur dolores sit aliquam numquam aut harum exercitationem non voluptatem illum eum dignissimos tempora! "
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
