import React from "react";
import { Button } from "reactstrap";
import "../styles/responsivePlayer.css";

function ResponsivePlayer() {
  return (
    <div className="mainDiv">
      <video autoPlay loop muted>
        <source src="./videos/cotton-candy.mp4" type="video/mp4" />
      </video>
      <div className="mainText">
        <h1>Nostalji Şekerleme</h1>
        <p>Organizasyonunuzu tatlandırmak için hizmetinizdeyiz..</p>
        <Button color="dark" href="/about" className="mr-2 mb-1">
          Daha Fazla Bilgi
        </Button>
        <Button color="info" href="/contact">
          Bize Ulaşın
        </Button>
      </div>
    </div>
  );
}

export default ResponsivePlayer;
