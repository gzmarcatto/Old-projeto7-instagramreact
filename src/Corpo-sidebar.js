import CorpoSidebarSugestoes from "./Corpo-sidebar-sugestoes";

export default function CorpoSidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <CorpoSidebarSugestoes />
    </div>
  );
}
