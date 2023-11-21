const SearchBar = () => {
  return (
    <input
      className=" bg-[#ffffffa2] backdrop-blur-sm ring-1 ring-slate-950 flex placeholder:text-black rounded-lg text-center p-0.5 w-96 max-[1020px]:w-60"
      type="text"
      placeholder="Buscar"
    />
  );
};

export default SearchBar;
