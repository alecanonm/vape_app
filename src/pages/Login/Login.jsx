import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className=" text-center pb-5 text-2xl font-bold">TAKE MY VAPE</h1>
      <form action="" className="  flex flex-col gap-5">
        <label htmlFor="" className=" flex flex-col">
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
        <div className=" flex justify-center gap-5">
          <button>Login</button>
          <div role="button">
            <Link to={"/"}>back</Link>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
