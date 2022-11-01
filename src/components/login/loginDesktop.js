import AppBar from "../appBar";
import googleicon from "../../assets/login-page/google-icon.svg";
import facebookicon from "../../assets/login-page/facebook-icon.svg";
import twittericon from "../../assets/login-page/twitter-icon.svg";
import main from "../../assets/login-page/desktop-main.png";

const LoginDesktop = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-between w-[100%] mx-auto my-24 font-bold shadow-xl rounded-[30px] px-12 pt-16 pb-[12.25rem]">
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Welcome Back</p>
          <a
            href="."
            className="font-normal text-xl text-[#A6A6AA] cursor-pointer mt-2"
          >
            New to astalavee? Sign up
          </a>

          <form>
            <div className="flex flex-col mt-8">
              <label
                htmlFor="email"
                className="font-normal text-base text-[#3A3A3A]"
              >
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                className="pl-2 w-[23.75rem] h-[45px] border-[1px] border-[#CBCBD4] rounded-sm"
              />
              <a
                href="reset"
                className="pt-2 self-end text-[#4269F2] text-xl font-normal"
              >
                Reset Password
              </a>
              <button
                type="submit"
                className="bg-[#9900CC] text-white py-2 rounded-[8px] cursor-pointer text-base mt-[8.25rem] hover:scale-105 duration-500"
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
        <div className="border-l-[3px] border-[#eeeef0] pl-[2.5rem]">
          <img src={main} alt="main" />
        </div>
      </div>
    </div>
  );
};

export default LoginDesktop;
