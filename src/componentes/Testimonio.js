import React from "react";

function Testimonio (){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-mujer1.jpeg")}
        alt="foto de Emma"/>
   
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en SUecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        

    </div>
    </div>
  );          
}
export default Testimonio;