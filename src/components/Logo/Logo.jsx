/** @format */

import Link from "next/link";
import Image from "next/image";

import style from "./Logo.module.scss";

import logo1 from "../../../public/logo/logo.svg";
import logo2 from "../../../public/logo/logo-full.svg";

function Logo({ isCollapsed }) {
  return (
    <div className={style.logo}>
      <Link href="/">
        <Image src={isCollapsed ? logo1 : logo2} alt="Logo Finance" />
      </Link>
    </div>
  );
}

export default Logo;
