import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthProps {
  isLogin?: boolean;
}

export default function Auth(props: Partial<AuthProps>) {
  const { isLogin } = props;

  const [showDropdown, setShowDropdown] = React.useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const onClickOutsideListener = () => {
    setShowDropdown(false);
    document.removeEventListener("click", onClickOutsideListener);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <Image
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className={`dropdown-menu border-0  
            ${showDropdown ? "show" : ""}`}
            aria-labelledby="dropdownMenuLink"
            onMouseLeave={() => {
              document.addEventListener("click", onClickOutsideListener);
            }}
          >
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Wallet
              </a>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Account Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          href="./src/sign-in.html"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
