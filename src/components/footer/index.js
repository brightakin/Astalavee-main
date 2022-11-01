import womanImg from "../../assets/woman.png";
import checkoutImg from "../../assets/checkout.png";
import googlePhoneImg from "../../assets/googlePhone.png";
import ipadImg from "../../assets/ipad.png";
import dashboardImg from "../../assets/dashboard.png";
import mapImg from "../../assets/map.png";
import instagramImg from "../../assets/instagram.png";
import youtubeImg from "../../assets/youtube.png";
import linkedlnImg from "../../assets/linkedln.png";
import facebookImg from "../../assets/facebook.png";
import copyrightImg from "../../assets/Copyright.png";

export default function Footer() {
  return (
    <div className="relative top-[925px] ">
      <div>
        <p className="absolute top-[3000px] sm:top-[40px] left-[100px] w-[1049px] h-[40px] text-[#3A3A3A] text-center leading-[40px] font-bold text-[52px] ">
          You control all your business on one platform
        </p>
        <p className="absolute top-[3000px] sm:top-[120px] left-[100px] h-[75px] w-[1029px] text-center leading-[35px] font-normal text-[25px] text-[#A6A6AA] ">
          One platform with all the ecommerce and creativity features for all
          creator. You just need to start, run and grow your business
        </p>
      </div>
      <div>
        <img
          className="absolute h-[510px] w-[500px] left-[59px] top-[3000px] sm:top-[344px] rounded-[20px] "
          src={womanImg}
          alt=""
        />
        <img
          className="absolute h-[459px] w-[228px] top-[3000px] sm:top-[455px] left-[419px] rounded-[25px] "
          src={checkoutImg}
          alt=""
        />
      </div>
      <div>
        <p className="absolute top-[3000px] sm:top-[427px] left-[650px] h-[128px] w-[656px] text-[52px] font-bold leading-[45px] text-[#3a3a3a] text-left ">
          Create your digital contents and sell
        </p>
        <p className="absolute top-[3000px] sm:top-[567px] left-[650px] h-[120px] w-[656px] text-[28px] text-[#3a3a3a] font-normal leading-[35px] text-left ">
          Build the perfect website that suits your product with powerful tools
          that can help you reach more customers and drive sales with ease.
        </p>
        <a
          href="#"
          className="absolute top-[3000px] sm:top-[704px] left-[650px] h-[77px] w-[609px] text-[32px] font-extrabold text-left leading-[35px] text-[#9900cc]"
        >
          Check the perfect website for you<span>&#8594;</span>
        </a>
      </div>
      <div>
        <p className="absolute top-[2000px] sm:top-[1250px] left-[64px] h-[68px] w-[656px] text-[52px] leading-[45px] text-left font-bold ">
          Market Your products
        </p>
        <p className="absolute top-[2500px] sm:top-[1363px] left-[64px] h-[120px] w-[656px] text-[28px] font-normal leading-[35px] text-left text-[#3a3a3a] ">
          Build the perfect website that suits your product with powerful tools
          that can help you reach more customers and drive sales with ease.{" "}
        </p>
        <a
          href="#"
          className="absolute top-[1502px] left-[64px] h-[77px] w-[609px] text-[32px] font-extrabold text-left leading-[35px] text-[#9900cc]"
        >
          Check the perfect website for you<span>&#8594;</span>
        </a>
      </div>
      <div>
        <img
          className="absolute top-[2500px] sm:top-[1086px] left-[769px] h-[616px] w-[454px] rounded-[30px] "
          src={googlePhoneImg}
          alt=""
        />
        <img
          className="absolute top-[2000px] sm:top-[1498px] left-[1000px] h-[264px] w-[281px] rounded-[20px]"
          src={ipadImg}
          alt=""
        />
      </div>
      <div>
        <img
          className="absolute top-[1932px] left-[64px] h-[563px] w-[609px] "
          src={dashboardImg}
          alt=""
        />
      </div>
      <div>
        <p className="absolute top-[2049px] left-[730px] h-[68px] w-[656px] text-left text-[52px] font-bold leading-[45px] ">
          Manage Everything
        </p>
        <p className="absolute top-[2000px] sm:top-[2162px] left-[730px] h-[120px] w-[656px] text-[28px] text-left leading-[35px] ">
          Build the perfect website that suits your product with powerful tools
          that can help you reach more customers and drive sales with ease.
        </p>
        <a
          href="#"
          className="absolute top-[2300px] left-[730px] h-[77px] w-[609px] text-[32px] font-extrabold text-left leading-[35px] text-[#9900cc]"
        >
          Check the perfect website for you<span>&#8594;</span>
        </a>
      </div>
      <div>
        <p className="absolute top-[2699px] left-[64px] h-[68px] w-[814px] text-[#3a3a3a] text-[52px] font-bold leading-[45px] text-left ">
          Receive Payment all over the world
        </p>
        <p className="absolute top-[2000px] sm:top-[2811px] left-[64px] h-[121px] w-[814px] text-[32px] font-normal leading-[35px] text-left text-[#3a3a3a] ">
          Build the perfect website that suits your product with powerful tools
          that can help you reach more customers and drive sales with ease.{" "}
        </p>
        <a
          href="#"
          className="absolute top-[2939px] left-[64px] h-[77px] w-[609px] text-[32px] font-extrabold text-left leading-[35px] text-[#9900cc]"
        >
          Check the perfect website for you<span>&#8594;</span>
        </a>
        <img
          className="absolute top-[4000px] sm:top-[3017px] left-[180px] h-[672px] w-[1080px]  "
          src={mapImg}
          alt=""
        />
      </div>
      <div className="relative top-[3800px] left-[59px] h-[496px] w-[1200px] bg-[#9900cc] rounded-[20px]">
        <p className="absolute top-[64px] left-[200px] h-[200px] w-[800px] text-[#ffffff] text-[64px] font-extrabold leading-[61px] text-center ">
          Take Control of your Digital Assets
        </p>
        <p className="absolute top-[210px] left-[200px] h-[92px] w-[799px] text-[24px] text-[#ffffff] font-normal leading-[28px] text-center ">
          You can store your contents safely, receive payments and track your
          sales with our analytics tool.
        </p>
        <button className="absolute text-[22px] font-bold leading-[32px] h-[92px] w-[270px] left-[460px] bg-[#ffffff] text-[#3a3a3a] top-[350px] rounded-[10px] ">
          Get Started For Free
        </button>
      </div>
      <div>
        <a
          href="#"
          className="absolute top-[4500px] left-[64px] h-[38px] w-[402] text-[#3a3a3a] text-[32px] font-bold leading-[35px] text-center "
        >
          Support@astalavee.com
        </a>
        <button className="absolute top-[4550px] left-[59px] h-[41px] w-[36px] ">
          <img src={instagramImg} alt="" />
        </button>
        <button className="absolute top-[4550px] left-[100px] h-[41px] w-[36px] ">
          <img src={youtubeImg} alt="" />
        </button>
        <button className="absolute top-[4550px] left-[150px] h-[41px] w-[36px] ">
          <img src={linkedlnImg} alt="" />
        </button>
        <button className="absolute top-[4550px] left-[200px] h-[41px] w-[36px] ">
          <img src={facebookImg} alt="" />
        </button>
        <img
          className="absolute h-[20px] w-[28px] top-[4650px] left-[50px]"
          src={copyrightImg}
          alt
        />
        <p className="absolute top-[4650px] left-[100px]">
          2021 Astalavee. All Rights Reserved{" "}
        </p>
        <div>
          <a
            href="#"
            className="absolute top-[4500px] left-[816px] h-[38px] w-[402] text-[#3a3a3a] text-[32px] font-bold leading-[28px] text-center "
          >
            Products
          </a>
          <a
            href="#"
            className="absolute top-[4550px] left-[816px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
          >
            Blog Us
          </a>
          <a
            href="#"
            className="absolute top-[4600px] left-[816px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
          >
            Home
          </a>
          <a
            href="#"
            className="absolute top-[4650px] left-[816px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
          >
            Pricing
          </a>
          <a
            href="#"
            className="absolute top-[4700px] left-[816px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
          >
            Contact
          </a>
        </div>

        <a
          href="#"
          className="absolute top-[4500px] left-[1089px] h-[38px] w-[402] text-[#3a3a3a] text-[32px] font-bold leading-[28px] text-center "
        >
          Legal
        </a>
        <a
          href="3"
          className="absolute top-[4550px] left-[1089px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
        >
          Terms & Conditions
        </a>
        <a
          href="#"
          className="absolute top-[4600px] left-[1089px] h-[38px] w-[402] text-[#3a3a3a] text-[24px] font-normal leading-[28px] text-center "
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
