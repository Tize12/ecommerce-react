import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#ffeebe",
        color: "#222"
      }}
    >
      <h2 style={{ margin: 0 }}>Mi Tienda</h2>

      <ul
        style={{
          display: "flex",
          gap: "15px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/category/ropa" style={{ textDecoration: "none", color: "#222" }}>
            Ropa
          </Link>
        </li>

        <li>
          <Link
            to="/category/calzado"
            style={{ textDecoration: "none", color: "#222" }}
          >
            Calzado
          </Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
