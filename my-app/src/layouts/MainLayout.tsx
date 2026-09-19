import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Meu TV Time</p>
      </footer>
    </div>
  );
}

export default MainLayout;