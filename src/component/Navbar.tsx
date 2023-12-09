import { Account } from "@/interface/model";
import { defaultUser, userList } from "@/service/accountService";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Notification from "./Notification";
const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<Account | undefined>(
    defaultUser
  );
  const currentUserFromLocal = JSON.parse(localStorage.getItem("user")!);
  // const notification = [{ content: "liked you post", data: "11/12/12" }];
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("likedPosts");
    window.location.reload();
  };
  const login = () => {
    localStorage.setItem("user", JSON.stringify(userList[1]));
    window.location.reload();
  };
  useEffect(() => {
    if (currentUserFromLocal) {
      setCurrentUser(currentUserFromLocal);
    } else {
      setCurrentUser((prevState) => {
        let currentUser = Object.assign({}, prevState);
        prevState = defaultUser;
        return { ...currentUser };
      });
    }
  }, []);
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Account", href: "/account" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 bg-light	">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <strong>X Y Z</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="navnavnav">
            {navigation.map((nav, index) => (
              <li className="nav-item mx-2" key={index}>
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold " : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={nav.href}
                  aria-current="page"
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* noti */}
          <Notification />
          {/*  */}
          <div className="dropdown me-4">
            <a
              className="nav-link dropdown-toggle dd"
              href="#"
              // id="navbarDropdown"
              aria-labelledby="dropdownMenuOffset"
              data-offset="10,20"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className="profile-pic" src={currentUser?.image} alt="" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <li>
                <a className="dropdown-item" href="/account">
                  {currentUser?.userName}
                </a>
                {}
              </li>
              {currentUser?.socialMedia?.map((media, index) => (
                <li key={index}>
                  <a className="dropdown-item" href={media.url} target="_blank">
                    {media.name}
                  </a>
                </li>
              ))}
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                {localStorage.getItem("user") ? (
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      login();
                    }}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
