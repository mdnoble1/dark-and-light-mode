import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar bg-black py-8 px-12 max-w-screen-2xl mx-auto rounded-3xl flex justify-between items-center">
      <div>
        <button className="btn btn-ghost text-4xl font-extrabold text-white">
          Light/Dark
        </button>
      </div>
      <div>
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
};

export default Navbar;
