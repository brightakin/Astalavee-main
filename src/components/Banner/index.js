import { Fragment } from "react";
import desktopImg from "../../assets/desktopimg.png";
import phoneImg from "../../assets/phoneimg.png";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute text-[150px] sm:text-[70px] h-[400px] w-[1500px] sm:w-[602px] left-[20px] sm:left-[66px] top-[300px] sm:top-[80px] text-center  sm:text-left text-[#3a3a3a] font-bold leading-[150px] sm:leading-[80px] ">
        <h1>Your power to own, starts when you create</h1>
      </div>
      <div>
        <input
          className="absolute w-[1350px] sm:w-[394px] h-[150px] sm:h-[71px] top-[1500px] sm:top-[350px] text-[40px] sm:text-[25px] rounded-[10px] left-[100px] sm:left-[70px] border-[2px] bg-[#f8f7fa] border-[#3a3a3a]"
          type="email"
          placeholder="Enter your email address"
        ></input>
        <button
          className="absolute text-[40px] sm:text-[22px] font-bold leading-[32px] h-[150px] sm:h-[71px] w-[1350px] sm:w-[207px] left-[100px] sm:left-[500px] bg-[#9900cc] text-[#ffffff] top-[1700px] sm:top-[350px] rounded-[10px] "
          type="submit"
        >
          Sign Up Free
        </button>
        <p className="absolute h-[121px] w-[1300px] sm:w-[624px] left-[130px] sm:left-[63px] top-[900px] sm:top-[450px] text-[#3a3a3a] text-[80px] sm:text-[32px] leading-[80px] sm:leading-[35px] text-center sm:text-left font-normal">
          Astalavee is an eCommerce platform that offers creators a webshop and
          the tools they need to market and sell their creativities.
        </p>
      </div>
      <div>
        <img
          className="absolute invisible sm:visible h-[400px] w-[400px] left-[875px] top-[175px] rounded-[30px] "
          src={desktopImg}
          alt=""
        />
        <img
          className="absolute invisible sm:visible h-[400px] w-[230px] left-[751px] top-[250px] rounded-[30px] "
          src={phoneImg}
          alt=""
        />
      </div>
    </div>
  );
}
