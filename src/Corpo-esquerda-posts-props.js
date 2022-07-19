import React from "react";

export default function Post(props) {
  const [likeicon, setLikeIcon] = React.useState("heart-outline");

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
                } else {
                  setLikeIcon("heart-outline");
                }
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.liked}</strong> e <strong>outras {props.and} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
