import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";
import grid3 from "../../assets/grid3.png";
import grid4 from "../../assets/grid4.png";
import controlImg from "../../assets/control.png";
import expressImg from "../../assets/express.png";
import unlockImg from "../../assets/unlock.png";

export default function MarketingPage() {
  return (
    <div className="relative top-[800px] h-[1644px] w-[2000px] sm:w-[1440px] bg-[#9900cc]">
      <div>
        <h2 className="absolute h-[40px] w-[2500px] sm:w-[788px] left-[20px] sm:left-[62px] top-[89px] text-[#F8F7FA] text-[80px] sm:text-[52px] font-extrabold sm:font-bold text-left leading-[40px] ">
          Start selling with with Astalavee
        </h2>
        <p className="absolute top-[200px] left-[40px] sm:left-[62px] h-[75px] w-[1500px] sm:w-[1000px] text-[60px] sm:text-[22px] font-normal leading-[60px] sm:leading-[35px] text-center sm:text-left text-[#ffffff] ">
          Build the perfect website that suits your product with powerful tools
          that can help you reach more customers and drive sales with ease.{" "}
        </p>
        <a
          href=""
          className="absolute top-[450px] sm:top-[258px] left-[62px] h-[48px] w-[8000px] sm:w-[498px] text-[40px] sm:text-[25px] font-extrabold text-left leading-[35px] text-[#ffffff]"
        >
          Check the perfect website for you<span>&#8594;</span>
        </a>
      </div>
      <div>
        <button className="absolute top-[500px] sm:top-[334px]  left-[59px] h-[500px] w-[250px] ">
          <img src={grid1} alt="" />
          <span className="font-bold text-[18px] leading-[35px] text-center text-[#ffffff]">
            One-product Page site
          </span>
        </button>
        <button className="absolute top-[334px] sm:visible invisible left-[375px] h-[500px] w-[250px] text-[#ffffff]">
          <img src={grid2} alt="" />
          <span className="font-bold text-[18px] leading-[35px] text-center text-[#ffffff]">
            Online-course Design
          </span>
        </button>
        <button className="absolute top-[334px] sm:visible invisible left-[685px] h-[500px] w-[250px]">
          <img src={grid3} alt="" />
          <span className="font-bold text-[18px] leading-[35px] text-center text-[#ffffff]">
            Online-training sales page
          </span>
        </button>
        <button className="absolute top-[334px] sm:visible invisible left-[985px] h-[500px] w-[250px]">
          <img src={grid4} alt="" />
          <span className="font-bold text-[18px] leading-[35px] text-center text-[#ffffff]">
            Coaching Website Design
          </span>
        </button>
      </div>
      <div>
        <h2 className="absolute top-[975px] left-[60px] w-[788px] h-[40px] font-bold text-[52px] text-[#ffffff] leading-[40px] ">
          Simple path to sell as a creator
        </h2>
      </div>
      <div>
        <div>
          <img
            src={unlockImg}
            className="absolute h-[100px] w-[100px] left-[62px] top-[1183px] "
            alt=""
          />
          <span className="absolute text-left leading-[56px] top-[1291px] left-[66px] h-[68px] w-[214px] text-[48px] text-[#ffffff] text-[Roboto] font-extrabold ">
            Unlock
          </span>
          <span className="absolute top-[1390px] left-[59px] h-[105px] w-[373px] text-[Roboto] text-[20px] text-left font-bold leading-[35px] text-[#ffffff]">
            With all the barriers broken the key to unlocking your creativity is
            one click away.
          </span>
        </div>
        <div>
          <img
            src={expressImg}
            className="absolute h-[100px] w-[100px] left-[543px] top-[1183px]"
            alt=""
          />
          <span className="absolute text-left leading-[56px] top-[1291px] left-[553px] h-[68px] w-[214px] text-[48px] text-[#ffffff] text-[Roboto] font-extrabold">
            Express
          </span>
          <span className="absolute top-[1390px] left-[553px] h-[105px] w-[373px] text-[Roboto] text-[20px] text-left font-bold leading-[35px] text-[#ffffff]">
            Just as ink flows on paper, Astalavee gives you the freedom to
            express yourself with ease.
          </span>
        </div>
        <div>
          <img
            src={controlImg}
            className="absolute h-[100px] w-[100px] left-[1012px] top-[1183px]"
            alt=""
          />
          <span className="absolute text-left leading-[56px] top-[1291px] left-[1012px] h-[68px] w-[214px] text-[48px] text-[Roboto]  text-[#ffffff] font-extrabold ">
            Control
          </span>
          <span className="absolute top-[1390px] left-[1007px] h-[105px] w-[373px] text-[Roboto] text-[20px] font-bold leading-[35px] text-left text-[#ffffff]">
            Take control with the limitless possibilities Astalavee offers.
          </span>
        </div>
      </div>
    </div>
  );
}
