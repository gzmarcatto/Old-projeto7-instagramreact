export default function Sugestao(props){
  return(
    <div class="sugestao">
              <div class="usuario">
                <img src={props.src} />
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
  )
}