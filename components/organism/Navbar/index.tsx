import Image from "next/image";
import Auth from "./Auth";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";
import React from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const onClickOutsideListener = () => {
    setShowDropdown(false);
    document.removeEventListener("click", onClickOutsideListener);
  };

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className={` ${
              showDropdown
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }`}
            id="navbarNav"
            onMouseLeave={() => {
              document.addEventListener("click", onClickOutsideListener);
            }}
          >
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active />
              <Menu title="Games" href="/games" />
              <Menu title="Reward" />
              <Menu title="Discover" />
              <Menu title="Global Rank" />
              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
