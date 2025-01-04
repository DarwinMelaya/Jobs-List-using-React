import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const LinkClass = ({ isActive }) => {
    return isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  };

  return (
    <nav
      className=" border-b "
      style={{
        background:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(112,189,255,1) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={LinkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={LinkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={LinkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
