import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const navItems = [
    { name: "Home", href: "", current: true },
    { name: "Products", href: "products", current: false },
    { name: "About", href: "about", current: false },
  ];

  return (
    <div className="p-8 w-full bg-white dark:bg-black border-b-2 border-b-white">
      <nav className="bg-white dark:bg-black border border-gray-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  React Store
                </h2>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                      item.current
                        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <NavLink className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Sign In
              </NavLink>
              <NavLink
                to="addtocart"
                className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
