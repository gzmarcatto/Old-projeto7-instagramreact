import React from "react";

export default function Post(props) {
  const [likeicon, setLikeIcon] = React.useState("heart-outline");
  const [saveicon, setSaveIcon] = React.useState("bookmark-outline");
  const [savecolor, setSaveColor] = React.useState("black");
  const [numberlikes, setNumberLikes] = React.useState(props.and);

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.src} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postimg} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={likeicon}
              onClick={() => {
                if (likeicon === "heart-outline") {
                  setLikeIcon("heart");
                  setNumberLikes(numberlikes+1)
                } else {
                  setLikeIcon("heart-outline");
                  setNumberLikes(numberlikes-1)
                }
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={saveicon} style={{color: savecolor}}
              onClick={() => {
                if (saveicon === "bookmark-outline") {
                  setSaveIcon("bookmark");
                  setSaveColor("red")
                } else {
                  setSaveIcon("bookmark-outline");
                  setSaveColor("black")
                }
              }}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.liked}</strong> e <strong>outras {numberlikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
