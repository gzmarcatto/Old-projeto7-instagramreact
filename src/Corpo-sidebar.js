import CorpoSidebarSugestoes from "./Corpo-sidebar-sugestoes";
import React from "react";


export default function CorpoSidebar() {
  const [image, setImage] = React.useState("assets/img/catanacomics.svg") 
  const [nome, setNome] = React.useState("Catana") 
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src={image} onClick={() => {
          setImage(prompt("Qual o link da imagem?"))
        }}/>
        <div class="texto">
          <strong>catanacomics</strong>
          <div class="usuario-edit">
            <span>{nome}</span>
            <span onClick={() => {
          setNome(prompt("Qual o nome?"))
        }}>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
      </div>

      <CorpoSidebarSugestoes />
    </div>
  );
}
