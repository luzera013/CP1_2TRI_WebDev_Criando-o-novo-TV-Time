import { Link } from "react-router-dom";
import { Home, Search, List } from "lucide-react";

function Header() {
  return (
    <header>
      <h1>Meu TV Time</h1>

      <nav><Link to="/">
  <Home size={18} />
  Início
</Link>
<Link to="/search">
  <Search size={18} />
  Explorar
</Link>
<Link to="/my-list">
  <List size={18} />
  Minha Lista
</Link>
      </nav>
    </header>
  );
}

export default Header;