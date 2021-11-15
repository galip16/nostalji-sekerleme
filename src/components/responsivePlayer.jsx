import React from "react";
import { Button } from "reactstrap";
import "../styles/responsivePlayer.css";

function ResponsivePlayer() {
  return (
    <div className="mainDiv">
      <video className="videoCandy" autoPlay loop muted>
        <source src="./videos/cotton-candy.mp4" type="video/mp4" />
      </video>
      <div className="mainText">
        <h1>Nostalji Şekerleme</h1>
        <p>Organizasyonunuzu tatlandırmak için hizmetinizdeyiz..</p>
        <div className="btn">
          <Button outline color="dark">
            Daha Fazla Bilgi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResponsivePlayer;
