import { Fragment } from "react";
import favicon from "../../assets/faviconPicture.png";
import bellPicture from "../../assets/bell.png";
import avatar from "../../assets/dashboardAvatar.png";

export default function FirstTimeDashboard() {
  return (
    <Fragment>
      <header className="absolute w-[1440px] h-[100px] bg-[#9900CC1A] ">
        <img
          src={favicon}
          alt=""
          className="absolute w-[60px] h-[60px] top-[20px] left-[65px]  "
        />
        <img
          src={bellPicture}
          alt=""
          className="absolute top-[40px] left-[1204px] w-[40px] h-[30px] "
        />
        <img
          src={avatar}
          className="absolute h-[50px] w-[50px] top-[25px] left-[1300px] "
          alt=""
        />
      </header>
      <section>
        <p className="absolute top-[150px] left-[186px] w-[1069px] h-[40px] text-[50px] font-bold leading-[40px] text-center text-[#3A3A3A] ">
          What are you hoping to achieve with Astalavee?
        </p>
        <p className="absolute top-[200px] left-[191px] h-[43px] w-[1059px] text-[24px] text-[#3a3a3a] font-normal leading-[35px] text-center ">
          Choose as many options as you like to get started as quickly as
          possible.
        </p>
      </section>
      <main>
        <div className="relative border top-[300px] left-[80px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  text-[#3a3a3a]  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left  "
          >
            Launch a webshop <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-lefts ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <div className="relative border top-[100px] left-[500px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  text-[#3a3a3a]  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left  "
          >
            Build an audience <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-lefts ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <div className="relative border top-[-100px] left-[1000px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left text-[#3a3a3a]  "
          >
            Sell online courses <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-lefts ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <div className="relative border top-[10px] left-[80px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  text-[#3a3a3a]  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left  "
          >
            Sell coaching sessions <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-lefts ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <div className="relative border top-[-185px] left-[500px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  text-[#3a3a3a]  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left  "
          >
            Sell digital bundles <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-left ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <div className="relative border top-[-385px] left-[1000px] h-[200px] w-[300px] ">
          <input
            className="absolute h-[30px] w-[30px] top-[20px] left-[36px] "
            type={"checkbox"}
            id="webshop"
            name="webshop"
          />{" "}
          <br />
          <label
            htmlFor="webshop"
            className="absolute  text-[#3a3a3a]  top-[60px] left-[16px] h-[29px] w-[234px] text-[28px] font-bold leading-[32px] text-left  "
          >
            Affiliate programs <br />
            <span className="absolute text-[16px] font-normal leading-[24px] text-lefts ">
              Create standard website to sell your product with all tools
              integrated.
            </span>
          </label>
        </div>
        <button className="absolute top-[900px] left-[950px] h-[20px] w-[392px] text-center leading-[35px] font-bold text-[#9900CCBF] text-[24px] ">
          Proceed to my dashboard<span>&#8594;</span>
        </button>
      </main>
    </Fragment>
  );
}
