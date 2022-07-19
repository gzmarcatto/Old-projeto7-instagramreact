import Sugestao from "./Corpo-sidebar-sugestoes-props"

export default function CorpoSidebarSugestoes(props){
  return(
    <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

        <Sugestao src="assets/img/bad.vibes.memes.svg" name="bad.vibes.memes" razao="Segue você" />
        <Sugestao src="assets/img/chibirdart.svg" name="chibirdart" razao="Segue você" />
        <Sugestao
          src="assets/img/razoesparaacreditar.svg"
          name="razoesparaacreditar"
          razao="Novo no Instagram"
        />
        <Sugestao
          src="assets/img/adorable_animals.svg"
          name="adorable_animals"
          razao="Segue você"
        />
        <Sugestao src="assets/img/smallcutecats.svg" name="smallcutecats" razao="Segue você" />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações •
            Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
  )
}