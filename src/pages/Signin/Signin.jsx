import logo from "../../assets/vaper-logo.png";

const Signin = () => {
  return (
    <>
      <form action="" className="flex flex-col  items-center">
        <figure>
          <img src={logo} alt="logo" width={200} />
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
        <button className=" p-4">Registrarse</button>
      </form>
    </>
  );
};

export default Signin;
