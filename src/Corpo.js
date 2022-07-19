import CorpoEsquerda from "./Corpo-esquerda";
import CorpoSidebar from "./Corpo-sidebar";

export default function Corpo() {
  return (
    <div class="corpo">
      <CorpoEsquerda />
      <CorpoSidebar />
    </div>
  );
}
