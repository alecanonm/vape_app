import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

const navMotion = {
  visible: {
    opacity: 10,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" flex justify-between p-6 items-center">
      <h1>TMV</h1>
      <SearchBar />
      {matches && (
        <section
          onClick={() => setToggled((prevToggled) => !prevToggled)}
          className=" space-y-1 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className=" block h-1 w-8 rounded bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 26 }}
            className=" block h-1 w-6 rounded bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 30 : 18,
            }}
            className=" block h-1 w-4 rounded bg-black"
          ></motion.span>
        </section>
      )}
      {toggled && matches && (
        <motion.section
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className=" fixed flex bg-[#ffffff] bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <motion.section
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className=" flex flex-col gap-12 text-lg"
          >
            <motion.a
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              variants={itemMotion}
              href="/"
            >
              Marcas
            </motion.a>
            <motion.a variants={itemMotion} href="/project">
              Sabores
            </motion.a>
            <motion.a
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              variants={itemMotion}
              href="/"
            >
              Iniciar sesion
            </motion.a>
            <motion.a
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              variants={itemMotion}
              href="/"
            >
              Registarse
            </motion.a>
            <motion.a
              variants={itemMotion}
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              href="/"
            >
              Sobre nosotros
            </motion.a>
          </motion.section>
        </motion.section>
      )}
    </nav>
  );
};
export default Navbar;
