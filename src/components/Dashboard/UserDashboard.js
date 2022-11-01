import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/faviconPicture.png";
import bellPicture from "../../assets/bell.png";
import avatar from "../../assets/dashboardAvatar.png";
import withdrawIcon from "../../assets/withdrawIcon.png";

export default function UserDashboard() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBarHandler = () => {
    setSideBarOpen(true);
  };

  const closeSideBarHandler = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="bg-[#e5e5e5]">
      <header className="absolute w-[1440px] h-[100px] bg-[#ffffff]">
        <img
          src={favicon}
          alt=""
          className="absolute w-[60px] h-[60px] top-[20px] left-[65px]"
        />
        <img
          src={bellPicture}
          alt=""
          className="absolute top-[40px] left-[1204px] w-[40px] h-[30px]"
        />
        <img
          src={avatar}
          className="absolute h-[50px] w-[50px] top-[25px] left-[1300px]"
          alt=""
        />
      </header>
      <section className="relative top-[100px] h-[2248px] w-[298px] bg-[#ffffff]">
        <ul>
          <li className="absolute top-[71px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center p-2 rounded-[5px] text-[#ffffff] bg-[#9900cc]">
            Dashboard
          </li>
          <li className="absolute top-[168px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa]">
            Products
          </li>
          <li className="absolute top-[242px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa]">
            Sales
          </li>
          <li className="absolute top-[317px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa]">
            Audience
          </li>
          <li className="absolute top-[392px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa]">
            Affiliates
          </li>
          <li className="absolute top-[467px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa] ">
            Integration
          </li>
          <li className="absolute top-[543px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa] ">
            Email
          </li>
          <li className="absolute top-[618px] left-[64px] h-[43px] w-[214px] font-bold text-[28px] leading-[32px] text-center text-[#a6a6aa] ">
            Coupons
          </li>
        </ul>
      </section>
      <section>
        <p className="absolute top-[200px] left-[325px] h-[51px] w-[295px] text-left text-[38px] text-[#3a3a3a] leading-[40px] font-bold">
          Dashboard
        </p>
        <Link className="absolute top-[287px] left-[359px] w-[85px] h-[44px] font-normal leading-[28px] text-[20px] text-[#a6a6aa] ">
          Home<span>&#x203A;</span>
        </Link>
        <Link
          to
          className="absolute top-[287px] left-[451px] h-[44px] w-[139px] font-normal text-[20px] leading-[24px] text-[#9900CC80] "
        >
          Dashboard
        </Link>
        <button className="absolute top-[200px] left-[1100px] w-[162px] h-[46px] rounded-[5px] text-[#ffffff] bg-[#9900cc] ">
          Upgrade Plan
        </button>
        <div className="absolute top-[355px] left-[343px] h-[297px] w-[900px] bg-[#ffffff] ">
          <p className="absolute top-[3px] left-[19px] h-[44px] w-[219px] text-[28px] font-bold leading-[32px] text-[#3a3a3a] text-left ">
            Wallet Balance
          </p>
          <p className="absolute top-[71px] left-[231px] h-[44px] w-[180px] text-[28px] font-bold leading-[32px] text-[#CBCBD4] text-center ">
            USD
          </p>
          <p className="absolute top-[71px] left-[600px] h-[44px] w-[180px] text-[28px] font-bold leading-[32px] text-[#CBCBD4] text-center ">
            NGN
          </p>
          <p className="absolute top-[151px] left-[230px] h-[44px] w-[180px] text-[28px] font-bold leading-[32px] text-[#CBCBD4] text-center ">
            $0.00
          </p>
          <p className="absolute top-[151px] left-[600px] h-[44px] w-[180px] text-[28px] font-bold leading-[32px] text-[#CBCBD4] text-center ">
            $0.00
          </p>
          <button className="absolute top-[197px] left-[430px] h-[86px] w-[152px] bg-[#ffffff] ">
            <img
              className="absolute top-[13px] left-[56px] h-[40px] w-[40px] "
              src={withdrawIcon}
              alt=""
            />
            <p className="absolute top-[53px] h-[44px] w-[152px] text-[16px] font-extrabold leading-[20px] text-[#a6a6aa] text-center ">
              Withdraw
            </p>
          </button>
        </div>
        <div>
          <div className="absolute top-[700px] left-[343px] bg-[#ffffff] h-[200px] w-[200px] rounded-[10px] "></div>
        </div>
        <div>
          <div className="absolute top-[700px] left-[580px] bg-[#ffffff] h-[200px] w-[200px] rounded-[10px] "></div>
        </div>
        <div>
          <div className="absolute top-[700px] left-[810px] bg-[#ffffff] h-[200px] w-[200px] rounded-[10px] "></div>
        </div>
        <div>
          <div className="absolute top-[700px] left-[1050px] bg-[#ffffff] h-[200px] w-[200px] rounded-[10px] "></div>
        </div>
      </section>
    </div>
  );
}
