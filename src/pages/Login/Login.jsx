import { Link } from "react-router-dom";
import logo from "../../assets/vaper-logo.png";
import google from "../../assets/google.png";
import loginWithGoogle from "../../firebase/loginWithGoogle";

const Login = () => {
  const handleLoginWithGoogle = () => {
    loginWithGoogle();
  };

  return (
    <>
      <form action="" className="  flex flex-col  items-center">
        <figure className="">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={200} height={200} />
          </Link>
        </figure>
        <h1 className=" text-center pb-5 text-2xl font-bold">TAKE MY VAPE</h1>
        <label htmlFor="" className=" flex flex-col pb-8">
          <span className="absolute -translate-y-3 bg-white translate-x-4">
            Email
          </span>
          <input
            type="email"
            name=""
            id=""
            className=" p-1.5 w-72 max-sm:w-80 rounded-md border-2 border-black "
          />
        </label>
        <label htmlFor="" className=" flex flex-col">
          <span className=" absolute  translate-x-4 -translate-y-3 bg-white">
            Password
          </span>
          <input
            type="password"
            name=""
            id=""
            className=" p-1.5 w-72 max-sm:w-80  rounded-md  border-2 border-black "
          />
        </label>
        <div className="flex items-center justify-center gap-4 p-3 pb-6">
          <button>Login</button>
          <span className=" text-slate-500">or</span>
          <div role="button" onClick={loginWithGoogle}>
            <img src={google} alt="google" width={20} height={20} />
          </div>
        </div>
      </form>
      <div className=" text-center">
        <hr className="" />
        <p className=" text-slate-500">
          Aun no tienes una cuenta?{" "}
          <Link to={"/"} className=" text-[#059428] font-medium">
            Registrarse
          </Link>
        </p>
      </div>
    </>
  );
};
export default Login;
