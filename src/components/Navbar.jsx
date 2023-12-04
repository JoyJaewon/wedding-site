import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div>Junyong & Jaewon</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/guest-book">Guest Book</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
    </header>
  );
}
