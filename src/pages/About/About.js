import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">eCom</span>{" "}
          has been developed by our group it is an impressive ecommerce website using React.js and Tailwind CSS. It boasts a visually appealing design, user-friendly interface, and responsive layout. With easy navigation, detailed product information, and secure checkout, shoppers can enjoy a seamless online shopping experience. Additional features like wishlists and personalized user accounts enhance customer satisfaction.
          <br></br>
          Developed by
          <ul className="list-disc list-inside">
            <li><a href="https://www.linkedin.com/in/shubham-gond-1666091b7/" class="text-indigo-600">Shubham Gond</a></li>
            <li><a href="https://www.linkedin.com/in/abhinav-raj-198283230" class="text-indigo-600">Abhinav Raj</a></li>
            <li><a href="https://www.linkedin.com/in/abhishek-kumar-b22aa1201/" class="text-indigo-600">Abhishek Kumar</a></li>
            <li><a href="https://www.linkedin.com/in/dileep-gehlot-422296230" class="text-indigo-600">Dileep Gehlot</a></li>
            <li><a href="https://www.linkedin.com/in/laxman-singh-56a62b221/" class="text-indigo-600">Laxman Singh</a></li>
          </ul>
           
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
