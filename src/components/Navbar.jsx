import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const { cartItems } = useCart();

  const openSidebar = () => {
    setSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeTopBar = () => {
    setTopBarVisible(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* TOP BAR */}
      {topBarVisible && (
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="bg-primary text-white hidden lg:block relative group transition-all duration-300"
        >
          <div className="max-w-[1250px] mx-auto flex items-center justify-between py-4">
            <p className="text-[18px]">Call Us : +123-456-789</p>

            <p className="text-[18px]">
              Sign up and GET 25% OFF for your first order.
              <span className="text-accent underline font-semibold cursor-pointer ml-2">
                Sign up now
              </span>
            </p>

            <div className="flex items-center gap-4 text-accent text-[20px]">
              <i className="ri-facebook-fill cursor-pointer"></i>
              <i className="ri-twitter-fill cursor-pointer"></i>
              <i className="ri-pinterest-fill cursor-pointer"></i>
              <i className="ri-instagram-line cursor-pointer"></i>
              <i className="ri-youtube-fill cursor-pointer"></i>
            </div>
          </div>

          <button
            onClick={closeTopBar}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 text-2xl"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="h-[90px] flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex items-center gap-3"
            >
              <div className="w-[45px] h-[45px] rounded-full bg-primary flex items-center justify-center">
                <span className="text-accent text-2xl font-bold">F</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-zinc-800">
                Furniture<span className="text-accent">.</span>
              </h1>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-10 text-[18px] font-medium text-zinc-800">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  data-aos="fade-down"
                  data-aos-delay={100 + index * 100}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition duration-300 hover:text-primary ${isActive ? "text-primary" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* DESKTOP ICONS */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="hidden md:flex items-center gap-5 text-[24px] text-zinc-800"
            >
              <i className="ri-search-line cursor-pointer hover:text-primary transition"></i>
              <i className="ri-heart-line cursor-pointer hover:text-primary transition"></i>
              <Link to="/cart" className="relative">
                <i className="ri-shopping-cart-2-line text-2xl cursor-pointer hover:text-primary transition"></i>

                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-accent text-black text-[11px] font-bold flex items-center justify-center leading-none">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <i className="ri-user-3-line cursor-pointer hover:text-primary transition"></i>
            </div>

            {/* MOBILE BTN */}
            <button
              onClick={openSidebar}
              data-aos="zoom-in"
              className="lg:hidden text-3xl"
            >
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-white shadow-2xl z-50 p-6 transition-all duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-3xl font-bold text-primary">Menu</h1>

          <button onClick={closeSidebar}>
            <i className="ri-close-line text-4xl"></i>
          </button>
        </div>

        <ul className="flex flex-col gap-8 mt-10 text-[20px] font-medium text-zinc-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `hover:text-primary transition ${isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 mt-12 text-[28px] text-primary">
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-heart-line cursor-pointer"></i>
          <i className="ri-shopping-cart-2-line cursor-pointer"></i>
          <i className="ri-user-3-line cursor-pointer"></i>
        </div>
      </div>
    </>
  );
}