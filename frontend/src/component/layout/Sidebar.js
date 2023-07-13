import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { AiOutlineUser, AiFillApi } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";
import { clearErrors } from "../../actions/userAction";
import { useParams } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const { user, error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const menus = [
    { name: "My Pokemons", link: "/profile", icon: AiOutlineUser },
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
  ];
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    alert.success("Logged Out");
  };

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
      {isAuthenticated && (
        <div
          className="mt-8 flex flex-col gap-4 relative"
          onClick={logoutHandler}
        >
          <div className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
            <div>
              <FiLogOut size={20} />
            </div>
            <h2
              style={{
                transitionDelay: `${1 + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Logout
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout{" "}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
