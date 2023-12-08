import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full navBar z-10">
      <div className="flex flex-col sm:flex-row justify-between  p-4 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center w-full sm:w-auto p">
          <div className="text-xl font-bold">
            <Link to="/">Junyong & Jaewon</Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl hover:text-stone-950 sm:hidden"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 items-center w-full sm:w-auto`}
        >
          <Link to="/" className="hover:text-stone-950 hover:font-medium">
            {t("Home")}
          </Link>
          <Link
            to="/gallery"
            className="hover:text-stone-950 hover:font-medium"
          >
            {t("Gallery")}
          </Link>
          <Link
            to="/guest-book"
            className="hover:text-stone-950 hover:font-medium"
          >
            {t("GuestBook")}
          </Link>
          <Link to="/rsvp" className="hover:text-stone-950 hover:font-medium">
            {t("RSVP")}
          </Link>
          <div className="ps-10 hover:font-medium">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
