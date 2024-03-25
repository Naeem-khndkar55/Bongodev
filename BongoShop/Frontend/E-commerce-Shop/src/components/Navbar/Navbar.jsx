import { NavMenu } from "./Navmenu/NavMenu";
import "./Navbar.css";
export function Navbar() {
  const NavItems = ["ami", "Blog", "alu", "contact"];
  return (
    <div>
      <div className="Navbar">
        <div>Logo</div>
        <div className="Nav-menu">
          <ul>
            {NavItems.map((navitem) => {
              return <NavMenu key={navitem} title={navitem} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
