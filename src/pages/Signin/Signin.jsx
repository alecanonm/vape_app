import logo from "../../assets/vaper-logo.png";
import google from "../../assets/google.png";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <>
      <form action="" className="flex flex-col  items-center">
        <figure>
          <Link to={"/"}>
            <img src={logo} alt="logo" width={200} height={200} />
          </Link>
        </figure>
        <h1 className=" text-center pb-5 text-2xl font-bold -translate-y-5">
          Nos llena de felicidad tenerte como uno de nuestros valiosos clientes!
        </h1>
        <label htmlFor="" className=" flex flex-col pb-6">
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
        <label htmlFor="" className=" flex flex-col pb-6">
          <span className="absolute -translate-y-3 bg-white translate-x-4">
            Username
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
        <div className="p-4 text-center ">
          <button className="pb-2">Registrarse</button>
          <div className=" flex items-center justify-center gap-3">
            <p className=" text-slate-400">Continuar con </p>
            <div role="button">
              <img src={google} alt="google" width={18} height={18} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
