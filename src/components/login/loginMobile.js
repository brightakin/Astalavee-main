import AppBar from "../appBar";
import main from "../../assets/login-mobile/main.png";
import googleicon from "../../assets/login-mobile/google.png";
import facebookicon from "../../assets/login-mobile/facebook.png";
import twittericon from "../../assets/login-mobile/twitter.png";

const LoginMobile = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <div className="flex flex-col items-center w-full pt-4 rounded-t-3xl shadow-lg">
        <div>
          <img src={main} alt="main illustration" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl">Welcome Back</p>
          <p className="font-normal text-xl text-[#A6A6AA] mt-2">
            New to astalavee?{" "}
            <a href="holla" className="cursor-pointer text-[#9900CC]">
              Sign up
            </a>
          </p>
        </div>

        <form className="w-full">
          <div className="flex flex-col mt-8 w-full">
            <label
              htmlFor="email"
              className="font-normal text-base text-[#A6A6AA]"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              className="pl-2 w-full h-[45px] border-[1px] border-[#CBCBD4] rounded-sm"
            />

            <label
              htmlFor="email"
              className="mt-6 font-normal text-base text-[#A6A6AA]"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="pl-2 w-full h-[45px] border-[1px] border-[#CBCBD4] rounded-sm"
            />
            <a
              href="reset"
              className="pt-2 self-end text-[#4269F2] text-xl font-normal"
            >
              Reset Password
            </a>
            <button
              type="submit"
              className="bg-[#9900CC] text-white py-2 rounded-[8px] cursor-pointer text-base mt-8 hover:scale-105 duration-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col mt-[1.5rem]">
          <p className="text-[#A6A6AA] font-normal text-xl text-center">
            or continue with
          </p>
          <div className="flex pt-[1rem] gap-[3rem] m-auto">
            <a href="google">
              <img src={googleicon} alt="google icon" />
            </a>
            <a href="google">
              <img src={facebookicon} alt="facebook icon" />
            </a>
            <a href="google">
              <img src={twittericon} alt="twitter icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMobile;
