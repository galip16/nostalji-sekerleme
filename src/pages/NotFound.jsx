import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h3>Böyle bir sayfa bulunmuyor !</h3>
      <p>
        <Link to="/"> Anasayfa</Link>'ya dönmeye ne dersin?{" "}
      </p>
      <img
        src="https://www.buldumgo.com/store/1/default_images/404.svg"
        alt="not found"
      />
    </div>
  );
}

export default NotFound;
