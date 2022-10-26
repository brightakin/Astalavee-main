import { Fragment } from "react";
import desktopImg from "../../assets/desktopimg.png";
import phoneImg from "../../assets/phoneimg.png";

export default function Banner() {
  return (
    <Fragment className="relative">
      <div className="absolute text-[90px] sm:text-[70px] h-[224px] w-[1300px] sm:w-[602px] left-[120px] sm:left-[66px] top-[200px] sm:top-[150px] text-center  sm:text-left text-[#3a3a3a] font-bold leading-[80px] ">
        <h1>Your power to own, starts when you create</h1>
      </div>
      <div>
        <input
          className="absolute w-[1000px] sm:w-[394px] h-[71px] top-[600px] sm:top-[420px] text-[25px] rounded-[10px] left-[300px] sm:left-[70px] border-[1px] border-[#3a3a3a]"
          type="email"
          placeholder="Enter your email address"
        ></input>
        <button
          className="absolute text-[22px] font-bold leading-[32px] h-[71px] w-[1000px] sm:w-[207px] left-[300px] sm:left-[500px] bg-[#9900cc] text-[#ffffff] top-[700px] sm:top-[420px] rounded-[10px] "
          type="submit"
        >
          Sign Up Free
        </button>
        <p className="absolute h-[121px] w-[900px] sm:w-[624px] left-[360px] sm:left-[63px] top-[420px] sm:top-[510px] text-[#3a3a3a] text-[42px] sm:text-[32px] leading-[35px] text-center sm:text-left font-normal">
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
    </Fragment>
  );
}
